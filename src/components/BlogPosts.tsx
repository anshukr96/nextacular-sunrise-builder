
const BlogPosts = () => {
  const blogs = [
    {
      id: 1,
      title: "Essential Travel Photography Tips",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Sustainable Travel Guide",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
    {
      id: 3,
      title: "Hidden Gems Around the World",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Latest from Our Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card rounded-xl overflow-hidden border border-gray-200">
              <div className="h-48 sm:h-52">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{blog.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Learn tips and tricks to make your travel experience more enjoyable and sustainable.
                </p>
                <a href="#" className="text-primary text-sm font-medium mt-4 inline-block">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
