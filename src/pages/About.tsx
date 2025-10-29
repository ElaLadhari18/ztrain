import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const successStories = [
  {
    title: 'Proven Track Record in Bulk Shipments',
    content: 'Zed Train for Trans has been highly successful in the transportation industry, consistently handling more than 50,000 tons of Silica Sand, Phosphate, and Calcium Carbonate on a monthly basis from each location. This remarkable volume showcases our unparalleled efficiency and effectiveness in managing large-scale shipments. Our specialized equipment, optimized logistics processes, and expert team have enabled us to consistently exceed our clients expectations in the bulk materials sector.',
    image: 'src/assests/ProvenTrack.jpg'

  },
  {
    title: 'Specialization in Alfalfa Stuffing',
    content: 'Zed Train for Trans has carved a niche for itself by specializing in alfalfa stuffing. This specialization has allowed us to gain a competitive edge in the market by offering the best rates to our customers. Our in-depth understanding of the unique requirements for handling and securing alfalfa cargo has resulted in efficient and cost-effective solutions for our clients in the agriculture industry. This success story highlights our ability to cater to specific industry needs and deliver exceptional value to our partners.',
    image: 'src/assests/AlfalfaStuffing.jpg'

  },
  {
    title: 'Pharmaceutical Logistics Excellence',
    content: 'The pharmaceutical and healthcare industry demands the highest standards of quality and compliance. Zed Train for Trans has proven its mettle in this sector by successfully managing the transportation and distribution of temperature-sensitive pharmaceutical products and medical equipment. Our adherence to strict safety protocols, use of specialized handling equipment, and real-time visibility capabilities have earned us the trust of leading pharmaceutical companies.',
    image: 'src/assests/phamarceutical.png'
  }
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8 text-[#FFA500]">About Zed Train for Trans</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to Zed Train for Trans, your premier logistics partner in Egypt. We are a dynamic and forward-thinking logistics firm specializing in providing seamless multimode transportation solutions.
            </p>
            <div className={`${expanded ? '' : 'max-h-[100px] overflow-hidden relative'}`}>
              <p className="mb-6">
                Situated at the strategic intersection of Africa and the Middle East, we offer unmatched connectivity and expertise to businesses seeking comprehensive logistics services. Our state-of-the-art infrastructure and modern transportation fleet enable us to deliver efficient and reliable logistics solutions tailored to your unique requirements.
                
              The foundation of our success is our unwavering dedication to excellence, reliability, and innovation. Our team of industry experts leverages the latest technology and best practices to optimize every aspect of the logistics process, from transportation and warehousing to customs clearance and documentation. This dedication has firmly established Zed Train for Trans as the preferred choice in the logistics industry.

              Driven by a relentless pursuit of excellence, we continually invest in our people, processes, and technology to stay ahead of the curve. Our commitment to sustainability and environmental responsibility is reflected in our eco-friendly initiatives and our adherence to the highest safety and compliance standards.

              Whether you're a multinational corporation or a growing SME, Zed Train for Trans is your trusted partner in navigating the ever-evolving logistics landscape. Discover how our comprehensive suite of services and innovative solutions can elevate your logistics operations and drive your business forward. Trust Zed Train for Trans to be the backbone of your supply chain and unlock new opportunities for growth and success.

              </p>
              {!expanded && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#FFA500] hover:text-[#FF8C00] mt-4 flex items-center gap-2"
            >
              {expanded ? 'Read Less' : 'Read More'}
              <ChevronRight className={`h-4 w-4 transform transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Success Stories</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div className="transition-transform duration-500 ease-in-out">
                <div key={currentStory} className="grid md:grid-cols-2 gap-8">
                  <div className="h-64 overflow-hidden rounded-lg">
                    <img
                      src={successStories[currentStory].image}
                      alt={successStories[currentStory].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#FFA500]">
                      {successStories[currentStory].title}
                    </h3>
                    <p className="text-gray-700">{successStories[currentStory].content}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStory}
                className="bg-[#FFA500] text-white px-4 py-2 rounded hover:bg-[#FF8C00] transition-colors"
              >
                Previous
              </button>
              <button
                onClick={nextStory}
                className="bg-[#FFA500] text-white px-4 py-2 rounded hover:bg-[#FF8C00] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}