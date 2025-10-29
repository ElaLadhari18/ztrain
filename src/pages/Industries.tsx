import { useState } from 'react';
import IndustryCard from '../components/IndustryCard';
import IndustryDescription from '../components/IndustryDescription';
import { industries } from '../data/industries';

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[#FF8C00] mb-8">
          Industries Served
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At Zed Train for Trans, we specialize in providing customized logistics solutions for a wide range of industries. Our dedication to safety, efficiency, and regulatory compliance ensures that we deliver exceptional results every time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              {...industry}
              isSelected={selectedIndustry === industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
            />
          ))}
        </div>

        {selectedIndustry && (
          <IndustryDescription
            title={industries.find((i) => i.id === selectedIndustry)?.title || ''}
            description={industries.find((i) => i.id === selectedIndustry)?.longDesc || ''}
          />
        )}
      </div>
    </div>
  );
};

export default Industries;