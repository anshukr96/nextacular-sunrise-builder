
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar, MapPin, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TravelAndStayToday = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Travel & Stay Today
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Destination finder card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Find your next destination</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Discover new places to explore and create unforgettable memories.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="destination">Where to?</Label>
                  <Input
                    id="destination"
                    type="text"
                    placeholder="Enter a destination"
                  />
                </div>
                <Button className="w-full">Explore destinations</Button>
              </div>
            </CardContent>
          </Card>

          {/* Plan your trip card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Plan your perfect trip</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Create a customized itinerary that fits your travel preferences.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dates">Travel dates</Label>
                  <Input
                    id="dates"
                    type="text"
                    placeholder="Select dates"
                  />
                </div>
                <Button className="w-full">Plan now</Button>
              </div>
            </CardContent>
          </Card>

          {/* Group booking card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Group bookings made easy</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Special rates and easy coordination for group travel.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="people">Number of people</Label>
                  <Input
                    id="people"
                    type="number"
                    min="2"
                    placeholder="Enter group size"
                  />
                </div>
                <Button className="w-full">Request group rates</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile view for quick access */}
        {isMobile && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                Popular destinations
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Last minute deals
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelAndStayToday;
