
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[500px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/26018419-ac04-4b1c-91ae-21c5481cdbbb.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The Best Stays, at the Best Prices. Guaranteed.
        </h1>
        <p className="text-lg text-white/90 mb-8">
          Search deals on hotels, homes, and much more...
        </p>
        
        <div className="w-full max-w-4xl bg-white rounded-full search-bar">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-3 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="w-full outline-none text-sm" 
                />
              </div>
            </div>
            
            <div className="flex-1 p-3 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-sm">Check in — Check out</span>
              </div>
            </div>
            
            <div className="flex-1 p-3 md:p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-sm">2 adults · 0 children</span>
              </div>
            </div>
            
            <div className="p-2">
              <Button className="w-full h-full rounded-full" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
