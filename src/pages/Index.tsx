import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FreeAuditSection from "@/components/FreeAuditSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <FreeAuditSection />
      <ServicesSection />
      <ContactFormSection />
      <GallerySection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
