import { useState } from 'react';
import ExploreSection from '../components/ExploreSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showExploreSection, setShowExploreSection] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Zed Train for Trans
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your premier logistics partner in Egypt, specializing in seamless multimode transportation solutions.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <Link to="/about">
            <button className="px-6 py-3 bg-[#FF8C00] text-white rounded-lg hover:bg-[#e67e00] transition-colors">
              About Us
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-3 border-2 border-[#FF8C00] text-[#FF8C00] rounded-lg hover:bg-[#FF8C00] hover:text-white transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
        {/* Explore More Link */}
        <p
          onClick={() => setShowExploreSection(!showExploreSection)}
          className="text-[#FF8C00] text-lg cursor-pointer hover:underline mt-6"
          style={{ marginTop: '2rem' }}
        >
          Explore More
        </p>
      </div>
      <div>
        <img
          src="src\assests\home1.jpg"
          alt="Logistics"
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* Explore Section */}
      {showExploreSection && (
        <div className="bg-white py-16">
          <ExploreSection  />
        </div>
      )}

      {/* Additional Content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src='src\assests\home2.jpg'
              alt="Logistics Operations"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Logistics Solutions</h2>
            <p className="text-gray-600 mb-6">
              Our state-of-the-art infrastructure, including a network of well-equipped warehouses and modern transportation fleet, enables us to deliver efficient and reliable logistics solutions tailored to our clients' unique requirements.
            </p>
            <p className="text-gray-600">
              The foundation of our success is our unwavering dedication to excellence, reliability, and innovation. Our team of industry experts leverages the latest technology and best practices to optimize every aspect of the logistics process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
