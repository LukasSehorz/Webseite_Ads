// One-off: generate the new full-bleed hero portrait via KIE.AI.
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const API_KEY = process.env.KIE_API_KEY;
if (!API_KEY) { console.error("Missing KIE_API_KEY"); process.exit(1); }
const BASE = "https://api.kie.ai/api/v1/jobs";
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const JOB = {
  file: "hero-portrait.png",
  aspect_ratio: "16:9",
  prompt:
    "Cinematic full-bleed editorial portrait of an elegant woman in side profile facing left, head and shoulders, sleek low bun, wearing a dark blazer. She is photographed against a seamless studio backdrop lit with a LARGE, SOFT, EVEN muted steel-blue gradient glow that fills most of the frame, brightest very gently in the center behind her, with a smooth gradual low-contrast falloff to a darker desaturated navy toward the edges and top corners. Soft even lighting, absolutely NO harsh spotlight and NO bright concentrated hotspot, the glow is broad and diffuse. The subject is mostly in deep shadow, almost a silhouette, with only a faint subtle cool rim light catching the edge of her face. Muted desaturated steel-blue color palette, subtle cinematic film grain, low contrast, premium minimal aesthetic, generous negative space, photorealistic, no text, no logo.",
};

async function run() {
  await mkdir(OUT_DIR, { recursive: true });
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(`${BASE}/createTask`, {
        method: "POST",
        headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-image-2-text-to-image", input: { prompt: JOB.prompt, aspect_ratio: JOB.aspect_ratio, resolution: "2K" } }),
      });
      const data = await res.json();
      const taskId = data?.data?.taskId;
      if (!taskId) throw new Error(JSON.stringify(data));
      console.log(`submitted ${JOB.file} taskId=${taskId}`);
      for (let i = 0; i < 60; i++) {
        await sleep(5000);
        const r = await fetch(`${BASE}/recordInfo?taskId=${taskId}`, { headers: { Authorization: `Bearer ${API_KEY}` } });
        const d = await r.json();
        const state = d?.data?.state;
        console.log(`  ${state}`);
        if (state === "success") {
          const url = JSON.parse(d.data.resultJson).resultUrls[0];
          const img = Buffer.from(await (await fetch(url)).arrayBuffer());
          await writeFile(join(OUT_DIR, JOB.file), img);
          console.log(`✓ saved public/${JOB.file} (${(img.length / 1024).toFixed(0)} KB)`);
          return;
        }
        if (state === "fail") throw new Error(d.data.failMsg);
      }
      throw new Error("timeout");
    } catch (e) {
      console.log(`attempt ${attempt} error: ${e.message}`);
      await sleep(3000);
    }
  }
  process.exit(1);
}
run();
