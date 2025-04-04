
import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

type TabType = "domestic" | "international" | "regions" | "countries" | "places";

const PopularDestinations = () => {
  const [activeTab, setActiveTab] = useState<TabType>("domestic");
  const isMobile = useIsMobile();
  
  const cities = {
    col1: [
      { name: "Srinagar hotels", link: "#" },
      { name: "Bangalore hotels", link: "#" },
      { name: "Mumbai hotels", link: "#" },
      { name: "Delhi hotels", link: "#" },
    ],
    col2: [
      { name: "Goa hotels", link: "#" },
      { name: "Jaipur hotels", link: "#" },
      { name: "Udaipur hotels", link: "#" },
      { name: "Chennai hotels", link: "#" },
    ],
    col3: [
      { name: "Manali hotels", link: "#" },
      { name: "Shimla hotels", link: "#" },
      { name: "Kolkata hotels", link: "#" },
      { name: "Pune hotels", link: "#" },
    ],
    col4: [
      { name: "Hyderabad hotels", link: "#" },
      { name: "Kochi hotels", link: "#" },
      { name: "Agra hotels", link: "#" },
      { name: "Show more", link: "#", isShowMore: true },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Popular with travellers from India
        </h2>
        
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-6 mb-6 min-w-max">
            <Button
              variant="ghost"
              className={`px-0 font-medium ${
                activeTab === "domestic" 
                  ? "text-primary border-b-2 border-primary rounded-none" 
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("domestic")}
            >
              Domestic cities
            </Button>
            <Button
              variant="ghost"
              className={`px-0 font-medium ${
                activeTab === "international" 
                  ? "text-primary border-b-2 border-primary rounded-none" 
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("international")}
            >
              International cities
            </Button>
            <Button
              variant="ghost"
              className={`px-0 font-medium ${
                activeTab === "regions" 
                  ? "text-primary border-b-2 border-primary rounded-none" 
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("regions")}
            >
              Regions
            </Button>
            <Button
              variant="ghost"
              className={`px-0 font-medium ${
                activeTab === "countries" 
                  ? "text-primary border-b-2 border-primary rounded-none" 
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("countries")}
            >
              Countries
            </Button>
            <Button
              variant="ghost"
              className={`px-0 font-medium ${
                activeTab === "places" 
                  ? "text-primary border-b-2 border-primary rounded-none" 
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("places")}
            >
              Places to stay
            </Button>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-4 gap-6'}`}>
          <div className="space-y-3">
            {cities.col1.map((city) => (
              <a 
                key={city.name} 
                href={city.link}
                className="block text-gray-700 hover:text-primary transition-colors"
              >
                {city.name}
              </a>
            ))}
          </div>
          
          <div className="space-y-3">
            {cities.col2.map((city) => (
              <a 
                key={city.name} 
                href={city.link}
                className="block text-gray-700 hover:text-primary transition-colors"
              >
                {city.name}
              </a>
            ))}
          </div>
          
          {!isMobile && (
            <div className="space-y-3">
              {cities.col3.map((city) => (
                <a 
                  key={city.name} 
                  href={city.link}
                  className="block text-gray-700 hover:text-primary transition-colors"
                >
                  {city.name}
                </a>
              ))}
            </div>
          )}
          
          {!isMobile && (
            <div className="space-y-3">
              {cities.col4.map((city) => (
                <a 
                  key={city.name} 
                  href={city.link}
                  className={`block ${
                    city.isShowMore ? "font-medium text-primary" : "text-gray-700 hover:text-primary"
                  } transition-colors`}
                >
                  {city.name}
                </a>
              ))}
            </div>
          )}

          {isMobile && (
            <div className="space-y-3">
              {[...cities.col3, ...cities.col4].slice(0, 4).map((city) => (
                <a 
                  key={city.name} 
                  href={city.link}
                  className={`block ${
                    city.isShowMore ? "font-medium text-primary" : "text-gray-700 hover:text-primary"
                  } transition-colors`}
                >
                  {city.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
