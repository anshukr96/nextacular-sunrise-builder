
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Safety Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cancellation Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Report Concern</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Business Partnerships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Host an Experience</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Community Forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Host Your Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Host an Experience</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Responsible Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Resource Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Newsroom</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2023 Airin, Inc.</p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
