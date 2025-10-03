import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default Index;
