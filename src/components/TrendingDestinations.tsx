
const TrendingDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Maldives",
      description: "10 properties",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 2,
      name: "Dubai",
      description: "115 properties",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      name: "Switzerland",
      description: "90 properties",
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      name: "Bali",
      description: "76 properties",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1038&q=80",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Trending Destinations</h2>
          <a href="#" className="text-primary text-sm">View all</a>
        </div>
        <p className="text-gray-500 mb-8">Most popular choices for travelers from India</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card rounded-xl overflow-hidden">
              <div className="h-40 sm:h-48 relative rounded-xl overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-semibold">{destination.name}</h3>
                  <p className="text-sm text-white/80">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingDestinations;
