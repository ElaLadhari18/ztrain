import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  const contactInfo = [
    { icon: Phone, text: "+20 100 7000 185" },
    { icon: Mail, text: "hello@zedtrain.com" },
    { icon: MapPin, text: "7 Al Nasr St. 4th floor #20, Sheraton, Heliopolis, Cairo, Egypt" },
    { icon: Clock, text: "24/7 Support Available" }
  ];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <Link to="/transportation" className="text-[#FFA500] hover:text-[#FF8C00]">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.mainImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 flex flex-col items-center">
  <Icon className="w-16 h-16 text-[#FFA500] mb-[-8px]" /> 
  <h1 className="text-5xl font-bold text-white leading-tight">{service.title}</h1>
  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
    {service.shortDesc}
  </p>
</div>

        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/transportation" className="inline-flex items-center text-gray-600 hover:text-[#FFA500]">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>
      </div>


      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {service.fullDesc}
              </p>
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.additionalImages.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-md group">
                      <img
                        src={image}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

  
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Key Features Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FFA500] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-900 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <item.icon className="w-5 h-5 text-[#FFA500] mr-3" />
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
  className="w-full mt-6 bg-[#FFA500] hover:bg-[#FF8C00] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
  onClick={() => window.location.href = '/quote'}
>
  Request a Quote
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}