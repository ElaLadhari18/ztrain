// import { Package, BarChart, Shield, Clock } from 'lucide-react';

// const Logistics = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-[#FF8C00] mb-4">Logistics Capabilities</h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our comprehensive logistics solutions are designed to optimize your supply chain and enhance your business efficiency.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <CapabilityCard
//             icon={Package}
//             title="Warehousing & Distribution"
//             description="State-of-the-art facilities with advanced inventory management systems."
//             features={[
//               "Temperature-controlled storage",
//               "Real-time inventory tracking",
//               "Pick and pack services",
//               "Cross-docking capabilities"
//             ]}
//           />
//           <CapabilityCard
//             icon={BarChart}
//             title="Supply Chain Management"
//             description="End-to-end supply chain solutions tailored to your needs."
//             features={[
//               "Demand forecasting",
//               "Inventory optimization",
//               "Order fulfillment",
//               "Returns management"
//             ]}
//           />
//           <CapabilityCard
//             icon={Shield}
//             title="Customs Clearance"
//             description="Expert handling of all customs documentation and procedures."
//             features={[
//               "Import/Export documentation",
//               "Customs compliance",
//               "Duty & tax management",
//               "Trade consulting"
//             ]}
//           />
//           <CapabilityCard
//             icon={Clock}
//             title="Value-Added Services"
//             description="Additional services to enhance your logistics operations."
//             features={[
//               "Packaging & labeling",
//               "Quality inspection",
//               "Assembly & kitting",
//               "Reverse logistics"
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const CapabilityCard = ({ 
//   icon: Icon, 
//   title, 
//   description, 
//   features 
// }: { 
//   icon: any; 
//   title: string; 
//   description: string;
//   features: string[];
// }) => (
//   <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//     <Icon className="w-12 h-12 text-[#FF8C00] mb-4" />
//     <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//     <p className="text-gray-600 mb-4">{description}</p>
//     <ul className="space-y-2">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-center text-gray-600">
//           <span className="w-2 h-2 bg-[#FF8C00] rounded-full mr-2"></span>
//           {feature}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default Logistics;






import React from 'react';
import { Package, BarChart, Shield, Clock, Truck, FileCheck } from 'lucide-react';

const CapabilityCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: any; 
  title: string; 
  description: string;
  features: string[];
}) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <Icon className="w-12 h-12 text-[#ffa500] mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <span className="w-2 h-2 bg-[#ffa500] rounded-full mr-2"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

function App() {
  const handleGetStarted = () => {
    window.location.href = '/quote';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[500px]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 14, 35, 0.6), rgba(34, 30, 53, 0.38)), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-white max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Logistics Capabilities to Streamline Your Supply Chain
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              At Zed Train for Trans, we offer a comprehensive suite of logistics capabilities to support the diverse needs of our clients. Our team of experts leverages industry-leading tools and techniques to optimize your supply chain operations, ensuring your goods are transported and managed with the utmost efficiency and care.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-[#ffa500] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff9000] transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      {/* <div className="relative h-[60vh] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
            alt="Transportation Hero"
            className="w-full h-full object-cover opacity-30"
          />
                
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-6">
            Comprehensive Logistics Capabilities to Streamline Your Supply Chain
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Zed Train for Trans, we offer a comprehensive suite of logistics capabilities to support the diverse needs of our clients. Our team of experts leverages industry-leading tools and techniques to optimize your supply chain operations, ensuring your goods are transported and managed with the utmost efficiency and care.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-[#ffa500] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff9000] transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
 */}


    {/* <img
            src="src/assests/genrall.png"
            alt="Transportation Hero"
            className="w-full h-full object-cover opacity-30"
          /> */}




      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <CapabilityCard
            icon={Truck}
            title="Supply Chain Management"
            description="Our supply chain management expertise allows us to provide end-to-end solutions for your logistics needs."
            features={[
              "End-to-end solutions",
              "Planning and procurement",
              "Distribution management",
              "Performance optimization",
              "Supply chain resilience"
            ]}
          />
          <CapabilityCard
            icon={Package}
            title="Warehousing and Distribution"
            description="With a network of strategically located, state-of-the-art warehousing facilities, we offer flexible storage and distribution services."
            features={[
              "Strategic facility locations",
              "Advanced inventory management",
              "Cross-docking services",
              "Kitting solutions",
              "On-time delivery"
            ]}
          />
          <CapabilityCard
            icon={FileCheck}
            title="Customs Clearance and Documentation"
            description="Navigating the complexities of international trade can be a daunting task. Our dedicated teams handle all aspects of customs clearance."
            features={[
              "Expert customs specialists",
              "Latest regulations compliance",
              "Documentation management",
              "Efficient clearance procedures",
              "Legal compliance"
            ]}
          />
          <CapabilityCard
            icon={Shield}
            title="Specialized Handling"
            description="Whether you're transporting hazardous materials or sensitive goods, we ensure safe and compliant handling."
            features={[
              "Hazardous materials transport",
              "Strict safety protocols",
              "Latest technology implementation",
              "Risk mitigation",
              "Cargo protection"
            ]}
          />
          <CapabilityCard
            icon={BarChart}
            title="Technology-Driven Solutions"
            description="Leveraging cutting-edge technology, we provide our clients with real-time visibility and advanced tracking capabilities."
            features={[
              "Real-time visibility",
              "Advanced tracking",
              "Digital platforms",
              "Intelligent analytics",
              "Market-leading tools"
            ]}
          />
          <CapabilityCard
            icon={Clock}
            title="Value-Added Services"
            description="Our comprehensive approach ensures your logistics operations reach their full potential."
            features={[
              "Customer-centric approach",
              "Tailored solutions",
              "Supply chain excellence",
              "Operational optimization",
              "Performance monitoring"
            ]}
          />
        </div>

        {/* Call to Action */}
        {/* <div className="bg-[#ffa500] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            By combining our comprehensive logistics capabilities with a customer-centric approach, Zed Train for Trans is your trusted partner in driving supply chain excellence. Let us tailor our services to your unique needs and unlock the full potential of your logistics operations.
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-[#ffa500] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default App;