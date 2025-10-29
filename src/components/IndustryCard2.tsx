import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustryCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
}

const IndustryCard = ({ id, icon: Icon, title, shortDesc }: IndustryCardProps) => (
  <Link
    to={`/industries/${id}`}
    className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
  >
    <Icon className="w-12 h-12 mx-auto mb-4 text-[#FF8C00]" />
    <h3 className="text-xl font-semibold text-[#FF8C00] mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{shortDesc}</p>
  </Link>
);

export default IndustryCard