
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpecialOffers from "../components/SpecialOffers";
import PropertyTypes from "../components/PropertyTypes";
import TrendingDestinations from "../components/TrendingDestinations";
import WeekendDeals from "../components/WeekendDeals";
import ZeroCommission from "../components/ZeroCommission";
import PopularDestinations from "../components/PopularDestinations";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <SpecialOffers />
      <PropertyTypes />
      <TrendingDestinations />
      <WeekendDeals />
      <BlogPosts />
      <ZeroCommission />
      <PopularDestinations />
      <Footer />
    </div>
  );
};

export default Index;
