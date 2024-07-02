import HeroSection from "./components/HeroSection.tsx";
import FeatureSection from "./components/FeatureSection.tsx";
import PricingSection from "./components/PricingSection.tsx";
import FooterSection from "./components/FooterSection.tsx";

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <FooterSection />
    </div>
  );
};

export default HomePage;
