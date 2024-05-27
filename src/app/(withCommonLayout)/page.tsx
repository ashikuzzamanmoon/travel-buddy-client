import FeaturedDestinations from "@/components/UI/HomePage/FeaturedDestinations/FeaturedDestinations";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import TravelCards from "@/components/UI/HomePage/TravelCards/TravelCards";
import TravelTipsAndGuides from "@/components/UI/HomePage/TravelTipsAndGuides/TravelTipsAndGuides";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TravelCards />
      <FeaturedDestinations />
      <TravelTipsAndGuides />
    </div>
  );
};

export default HomePage;
