
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative h-[500px] md:h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/824e8ae5-dee4-4ff6-ac19-5c7b6daa0a39.png')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
          The Best Stays, at the Best Prices. Guaranteed.
        </h1>
        <p className="text-md md:text-lg text-white/90 mb-8">
          Discover low prices on hotels, homes, and more
        </p>
        
        <div className="w-full max-w-4xl bg-white rounded-full search-bar">
          {isMobile ? (
            <div className="flex flex-col w-full">
              <div className="flex-1 p-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="w-full outline-none text-sm" 
                  />
                </div>
              </div>
              
              <div className="flex-1 p-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">Check in — Check out</span>
                </div>
              </div>
              
              <div className="flex-1 p-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">Add guests</span>
                </div>
              </div>
              
              <div className="p-2">
                <Button className="w-full h-full rounded-full" size="lg">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="flex-1 p-4 border-r border-gray-200">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="w-full outline-none text-sm" 
                  />
                </div>
              </div>
              
              <div className="flex-1 p-4 border-r border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">Check in — Check out</span>
                </div>
              </div>
              
              <div className="flex-1 p-4 border-r border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">Add guests</span>
                </div>
              </div>
              
              <div className="p-2">
                <Button className="rounded-full w-12 h-12" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
