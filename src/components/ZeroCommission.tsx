
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

const ZeroCommission = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-12'}`}>
          {/* Left column - Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Zero Commission Means Better Prices
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">No Middleman Fees</h3>
                  <p className="text-gray-600">Direct bookings mean no extra charges added to your stay.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Transparent Pricing</h3>
                  <p className="text-gray-600">See exactly what you pay for with no hidden costs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Direct Savings</h3>
                  <p className="text-gray-600">Businesses pass on commission savings directly to you.</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 rounded-full" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Right column - Comparison */}
          <div>
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-xl font-semibold text-center mb-4">
                Commission Comparison
              </h3>
              <p className="text-center text-gray-600 mb-6">
                See how much you save with our zero commission model
              </p>
              
              <div className="space-y-4">
                <Card className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Arin</span>
                    <span className="font-bold text-xl text-primary">0%</span>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary rounded-full p-1 h-5 w-5 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-primary font-medium">Maximum Savings</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Other Platforms</span>
                    <span className="font-bold text-xl text-gray-700">20-30%</span>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-400 rounded-full p-1 h-5 w-5 flex items-center justify-center shrink-0">
                        <X className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-600 font-medium">Hidden Fees</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroCommission;
