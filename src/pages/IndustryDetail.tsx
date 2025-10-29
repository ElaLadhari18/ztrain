import { useParams, Link } from 'react-router-dom';
import { industries } from '../data/industries';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const IndustryDetail = () => {
  const { id } = useParams();
  const industry = industries.find(ind => ind.id === id);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-4">Industry not found</p>
          <Link to="/industries" className="text-[#ffa500] hover:underline">
            Return to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src={industry.image}
            alt={industry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <Link to="/industries" className="absolute left-4 top-4 inline-flex items-center text-white hover:text-[#ffa500] transition-colors">
  <ArrowLeft className="w-5 h-5 mr-2" />
  Back to Industries
</Link>


          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {industry.title}
          </h1>
          <p className="text-2xl text-slate-200 max-w-2xl">
            {industry.shortDesc}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {industry.longDesc}
              </p>
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Expertise</h3>
                <p className="text-slate-600">{industry.details.expertise}</p>
              </div>
            </div>

            {/* Industry Gallery */}
            <div className="grid grid-cols-2 gap-6">
              {industry.galleryImages?.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg aspect-video">
                  <img 
                    src={image} 
                    alt={`${industry.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Services</h2>
              <ul className="space-y-4">
                {industry.details.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#ffa500] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;