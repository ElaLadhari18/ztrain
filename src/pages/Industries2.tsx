import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import { ArrowRight } from 'lucide-react';

const Industries = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
            alt="Logistics Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Industries Served
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how we serve and support various industries with our specialized logistics solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link 
              key={industry.id}
              to={`/industries/${industry.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <industry.icon className="w-6 h-6 text-[#ffa500]" />
                    <h3 className="text-xl font-semibold text-slate-900">{industry.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4 text-center">{industry.shortDesc}</p>
                  <div className="flex items-center justify-center text-[#ffa500] font-medium">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

{/* Trust Banner */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="mt-16 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] rounded-lg p-8 shadow-lg mb-8">
    <h2 className="text-2xl font-bold text-white mb-4 text-center">
      Ready to Transform Your Supply Chain?
    </h2>
    <p className="text-white mb-6 max-w-2xl mx-auto text-center">
      Join the industry leaders who trust Zed Train for Trans with their logistics needs.
      Let us help you streamline your operations and drive your business forward.
    </p>
    <div className="flex justify-center">
      <Link 
        to="/contact" 
        className="bg-white text-[#FFA500] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
      >
        Contact Us Today
      </Link>
    </div>
  </div>
</div>




</div>


);
};

export default Industries;