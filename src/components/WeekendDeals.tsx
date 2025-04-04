
import { Star } from "lucide-react";
import { Button } from "./ui/button";

const WeekendDeals = () => {
  const deals = [
    {
      id: 1,
      name: "Beachside Villa in Goa",
      location: "Goa, India",
      price: "$120",
      nights: "night",
      rating: 4.92,
      reviews: 169,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Luxury Apartment in Mumbai",
      location: "Mumbai, India",
      price: "$180",
      nights: "night",
      rating: 4.85,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 3,
      name: "Mountain Retreat in Munnar",
      location: "Kerala, India",
      price: "$95",
      nights: "night",
      rating: 4.78,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1587974036022-66ac5084a15a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Deals for the Weekend</h2>
        <p className="text-gray-500 mb-8">Plan a quick break for May 7 - 9</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="deal-card rounded-xl overflow-hidden border border-gray-200">
              <div className="h-48 sm:h-52 relative">
                <img 
                  src={deal.image} 
                  alt={deal.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{deal.name}</h3>
                    <p className="text-sm text-gray-500">{deal.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span>{deal.rating}</span>
                    <span className="text-gray-500">({deal.reviews})</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="font-bold">{deal.price}</span>
                    <span className="text-sm text-gray-500"> / {deal.nights}</span>
                  </div>
                  <Button size="sm" className="rounded-md">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekendDeals;
