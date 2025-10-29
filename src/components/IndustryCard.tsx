import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  isSelected: boolean;
  onClick: () => void;
}

const IndustryCard = ({ id, icon: Icon, title, shortDesc, isSelected, onClick }: IndustryCardProps) => (
  <button
    onClick={onClick}
    className={`bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 ${
      isSelected
        ? 'ring-2 ring-[#FF8C00] transform -translate-y-2'
        : 'hover:shadow-lg hover:-translate-y-1'
    }`}
  >
    <Icon className="w-12 h-12 mx-auto mb-4 text-[#FF8C00]" />
    <h3 className="text-lg font-semibold text-[#FF8C00] mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{shortDesc}</p>
  </button>
);

export default IndustryCard;