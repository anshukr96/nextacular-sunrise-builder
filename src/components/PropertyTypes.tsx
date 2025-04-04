
const PropertyTypes = () => {
  const propertyTypes = [
    {
      id: 1,
      type: "Hotels",
      count: "732,948 properties",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      type: "Apartments",
      count: "923,812 properties",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      type: "Resorts",
      count: "176,549 properties",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      type: "Villas",
      count: "434,228 properties",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Browse by property type</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {propertyTypes.map((property) => (
            <div key={property.id} className="property-card rounded-xl overflow-hidden">
              <div className="h-40 rounded-xl overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.type} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">{property.type}</h3>
                <p className="text-sm text-gray-500">{property.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyTypes;
