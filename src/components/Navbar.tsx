
import { Bell, Globe, Menu, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Airin</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Stays
          </Button>
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Flights
          </Button>
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Cars
          </Button>
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Experiences
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Menu className="h-4 w-4" />
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
