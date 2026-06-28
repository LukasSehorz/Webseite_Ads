import Navbar from "./components/Navbar";
import HeroPortrait from "./components/HeroPortrait";
import Section2SmartFinance from "./components/Section2SmartFinance";
import ReferencesScatter from "./components/ReferencesScatter";
import Testimonials from "./components/Testimonials";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import ComparisonSection from "./components/ComparisonSection";
import IncludedSection from "./components/IncludedSection";
import PerformanceMarketingSection from "./components/PerformanceMarketingSection";
import AiAutomationSection from "./components/AiAutomationSection";
import ContactForm from "./components/ContactForm";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroPortrait />
      <Section2SmartFinance />
      <ReferencesScatter />
      <Testimonials />
      <ServicesSection />
      <WhyUsSection />
      <ComparisonSection />
      <IncludedSection />
      <PerformanceMarketingSection />
      <AiAutomationSection />
      <ContactForm />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
