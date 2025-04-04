
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              <span className="bg-primary text-white rounded-full inline-flex items-center justify-center w-8 h-8 mr-1">A</span>
              arin
            </span>
          </a>
        </div>

        {!isMobile && (
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-1 border border-gray-200 rounded-full px-2 py-1">
              <Button variant="ghost" size="sm" className="text-sm font-medium rounded-full bg-primary/10 text-primary">
                <span className="mr-1">🏠</span> Stay
              </Button>
              <Button variant="ghost" size="sm" className="text-sm font-medium rounded-full flex items-center">
                <span className="mr-1 opacity-70">✈️</span> 
                <span className="opacity-70">Flights</span>
                <span className="ml-1 text-xs bg-gray-100 px-1 rounded text-gray-500">Coming Soon</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-sm font-medium rounded-full flex items-center">
                <span className="mr-1 opacity-70">🚌</span> 
                <span className="opacity-70">Buses</span>
                <span className="ml-1 text-xs bg-gray-100 px-1 rounded text-gray-500">Coming Soon</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-sm font-medium rounded-full flex items-center">
                <span className="mr-1 opacity-70">🏛️</span> 
                <span className="opacity-70">Attractions</span>
                <span className="ml-1 text-xs bg-gray-100 px-1 rounded text-gray-500">Coming Soon</span>
              </Button>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            List Your Property
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            EN
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 p-1 border border-gray-200 rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMobile && (
        <div className="container mx-auto px-4 flex overflow-x-auto pb-2 no-scrollbar">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-sm font-medium rounded-full bg-primary/10 text-primary whitespace-nowrap">
              <span className="mr-1">🏠</span> Stay
            </Button>
            <Button variant="outline" size="sm" className="text-sm font-medium rounded-full whitespace-nowrap flex items-center">
              <span className="mr-1 opacity-70">✈️</span> 
              <span className="opacity-70">Flights</span>
              <span className="ml-1 text-xs bg-gray-100 px-1 rounded text-gray-500">Soon</span>
            </Button>
            <Button variant="outline" size="sm" className="text-sm font-medium rounded-full whitespace-nowrap flex items-center">
              <span className="mr-1 opacity-70">🚌</span> 
              <span className="opacity-70">Buses</span>
              <span className="ml-1 text-xs bg-gray-100 px-1 rounded text-gray-500">Soon</span>
            </Button>
            <Button variant="outline" size="sm" className="text-sm font-medium rounded-full whitespace-nowrap flex items-center">
              <span className="mr-1 opacity-70">🏛️</span> 
              <span className="opacity-70">Attractions</span>
              <span className="ml-1 text-xs bg-gray-100 px-1 rounded text-gray-500">Soon</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
