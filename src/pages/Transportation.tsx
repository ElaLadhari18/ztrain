import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import ServiceDetail from "./ServiceDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Transportation() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
            alt="Transportation Hero"
            className="w-full h-full object-cover opacity-30"
          />
                    {/* <img
            src="src/assests/genrall.png"
            alt="Transportation Hero"
            className="w-full h-full object-cover opacity-30"
          /> */}
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              Comprehensive Transportation Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver excellence in global logistics through our comprehensive suite of transportation services, ensuring your cargo reaches its destination safely and efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transportation Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of transportation solutions to meet your logistics needs. Click on any service to learn more about our capabilities and how we can help optimize your supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              shortDesc={service.shortDesc}
              mainImage={service.mainImage}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#FFA500] to-[#FF8C00] rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Let us help you optimize your transportation needs with our comprehensive logistics solutions.
          </p>
<Link 
        to="/contact" 
        className="bg-white text-[#FFA500] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
      >
        Contact Us Today
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Transportation;
