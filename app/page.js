import HeroSection from "@/components/HeroSection";
import MortgageCalculator from "@/components/MortgageCalculator";
import RecentSales from "@/components/RecentSales";
import PromoSection from "@/components/PromoSection";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import FirstTimeBuyers from "@/components/FirstTimeBuyers";
import LondonInfo from "@/components/LondonInfo";
import LondonNeighbourhoods from "@/components/LondonNeighbourhoods";
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
      <RecentSales />
      <LondonInfo />
      <LondonNeighbourhoods />
      <MortgageCalculator />
      <BlogSection />
      <PromoSection />
      <Testimonials />
      <p className="text-center text-black text-sm md:text-2xl max-w-[350px] md:max-w-4xl mx-auto mt-20">
        Thank you for visiting! We’re Stacy and Louise, a husband-and-wife real
        estate team. With over 20 years of experience, Stacy specializes in
        residential, commercial, and land transactions, while Louise brings
        expertise in mortgage financing and customer care. Together, we’re here
        to make your real estate journey seamless. Reach out anytime—we’re ready
        to help!
      </p>
      <ContactForm />
      <div className="my-20"></div>
      <LondonInfo />
    </main>
  );
}
