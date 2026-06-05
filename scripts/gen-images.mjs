// Generate the 3 photographic assets via KIE.AI (gpt-image-2-text-to-image).
// API key is read from env (KIE_API_KEY) — never hard-coded.
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const API_KEY = process.env.KIE_API_KEY;
if (!API_KEY) { console.error("Missing KIE_API_KEY env var"); process.exit(1); }

const BASE = "https://api.kie.ai/api/v1/jobs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public");

const JOBS = [
  {
    file: "atm-bg.png",
    aspect_ratio: "16:9",
    prompt:
      "Cinematic dark photograph of a modern web designer's workstation: a large ultrawide monitor on a sleek minimalist desk displaying an elegant clean website user interface, contemporary dark creative studio, dramatic cool blue rim lighting, deep shadows, subtle volumetric blue glow, glossy reflections, premium digital design agency atmosphere, very dark and moody, high contrast, photorealistic, shot on cinema camera, no text, no logo.",
  },
  {
    file: "portrait-faceup.png",
    aspect_ratio: "16:9",
    prompt:
      "Cinematic editorial portrait of a confident young creative professional designer with a sleek modern look, in a dark contemporary design studio, head turned slightly upward with a calm composed confident expression, wearing a minimalist dark outfit, dramatic blue and teal cinematic lighting, dark moody background that fades into a soft bright blue glow in the upper right corner, centered composition, premium digital agency brand photography, ultra detailed, photorealistic, no text.",
  },
  {
    file: "portrait-profile.png",
    aspect_ratio: "2:3",
    prompt:
      "Cinematic side profile portrait of a stylish creative professional with a modern minimalist look, standing in front of a glowing circular blue halo ring light on a pure black background, strong blue rim light tracing the silhouette, moody dramatic premium digital agency photography, vertical composition, photorealistic, no text.",
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function createTask(job) {
  const res = await fetch(`${BASE}/createTask`, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-image-2-text-to-image",
      input: { prompt: job.prompt, aspect_ratio: job.aspect_ratio, resolution: "2K" },
    }),
  });
  const data = await res.json();
  if (!res.ok || !data?.data?.taskId) {
    throw new Error(`createTask failed for ${job.file}: ${JSON.stringify(data)}`);
  }
  console.log(`→ submitted ${job.file}  taskId=${data.data.taskId}`);
  return data.data.taskId;
}

async function poll(taskId, file) {
  for (let i = 0; i < 60; i++) {
    await sleep(5000);
    const res = await fetch(`${BASE}/recordInfo?taskId=${taskId}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const data = await res.json();
    const state = data?.data?.state;
    process.stdout.write(`   [${file}] ${state}\n`);
    if (state === "success") {
      const parsed = JSON.parse(data.data.resultJson);
      return parsed.resultUrls[0];
    }
    if (state === "fail") {
      throw new Error(`${file} failed: ${data.data.failMsg} (${data.data.failCode})`);
    }
  }
  throw new Error(`${file} timed out`);
}

async function download(url, file) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(OUT_DIR, file), buf);
  console.log(`✓ saved public/${file}  (${(buf.length / 1024).toFixed(0)} KB)`);
}

async function runJob(job) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const taskId = await createTask(job);
      const url = await poll(taskId, job.file);
      await download(url, job.file);
      return true;
    } catch (e) {
      console.log(`   [${job.file}] attempt ${attempt} error: ${e.message}`);
      await sleep(3000);
    }
  }
  console.error(`✗ ${job.file} gave up after retries`);
  return false;
}

(async () => {
  await mkdir(OUT_DIR, { recursive: true });
  // run all 3 independently in parallel
  const results = await Promise.all(JOBS.map(runJob));
  const ok = results.filter(Boolean).length;
  console.log(`Done: ${ok}/${JOBS.length} images generated.`);
  if (ok < JOBS.length) process.exit(1);
})().catch((e) => { console.error(e.message); process.exit(1); });
