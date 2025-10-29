import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  mainImage: string;
}

export default function ServiceCard({ id, icon: Icon, title, shortDesc, mainImage }: ServiceCardProps) {
  return (
    <Link to={`/services/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 text-center">
          <div className="flex items-center justify-center mb-4"> {/* Centrage horizontal */}
            <Icon className="w-8 h-8 text-[#FFA500] mr-3" />
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{shortDesc}</p>
          <button className="w-full bg-[#FFA500] text-white px-4 py-2 rounded-lg hover:bg-[#FF8C00] transition-all">
            Learn More
          </button>
        </div>
      </div>
    </Link>
  );
}
