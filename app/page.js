import HeroSection from "@/components/HeroSection";
import MortgageCalculator from "@/components/MortgageCalculator";
import PromoSection from "@/components/PromoSection";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import FirstTimeBuyers from "@/components/FirstTimeBuyers";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import AboutTeam from "@/components/AboutTeam";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutTeam />
      <Statistics />
      <FirstTimeBuyers />
      <MortgageCalculator />
      <BlogSection />
      <PromoSection />
      <Testimonials />
      <ContactForm />
      <div className="my-20"></div>
    </main>
  );
}
