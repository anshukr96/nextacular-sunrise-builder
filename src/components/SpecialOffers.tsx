
import { Button } from "./ui/button";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Save 20% on summer stays",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Last-minute deals",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Special Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="property-card relative h-64 rounded-xl overflow-hidden"
            >
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-gradient" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                  See Deals
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${dot === 1 ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
