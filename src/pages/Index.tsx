
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpecialOffers from "../components/SpecialOffers";
import PropertyTypes from "../components/PropertyTypes";
import TrendingDestinations from "../components/TrendingDestinations";
import WeekendDeals from "../components/WeekendDeals";
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
      <Footer />
    </div>
  );
};

export default Index;
