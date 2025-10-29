import { Award, Shield, Truck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-[#FF8C00] mb-6">
              About Zed Train for Trans
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Elevating Logistics Excellence in Egypt
            </p>
            <p className="text-gray-600">
              Welcome to Zed Train for Trans, your premier logistics partner in Egypt. We are a dynamic and forward-thinking logistics firm specializing in providing seamless multimode transportation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Truck}
              title="Strategic Location"
              description="Situated at the intersection of Africa and the Middle East, offering unmatched connectivity."
            />
            <FeatureCard
              icon={Shield}
              title="Modern Infrastructure"
              description="State-of-the-art warehouses and transportation fleet for efficient logistics."
            />
            <FeatureCard
              icon={Users}
              title="Expert Team"
              description="Industry experts leveraging the latest technology and best practices."
            />
            <FeatureCard
              icon={Award}
              title="Excellence Driven"
              description="Continuous investment in people, processes, and technology."
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Logistics Operations"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                The foundation of our success is our unwavering dedication to excellence, reliability, and innovation. Our team of industry experts leverages the latest technology and best practices to optimize every aspect of the logistics process, from transportation and warehousing to customs clearance and documentation.
              </p>
              <p className="text-gray-600">
                Driven by a relentless pursuit of excellence, we continually invest in our people, processes, and technology to stay ahead of the curve. Our commitment to sustainability and environmental responsibility is reflected in our eco-friendly initiatives and our adherence to the highest safety and compliance standards.
              </p>
              <p className="text-gray-600">
                Whether you're a multinational corporation or a growing SME, Zed Train for Trans is your trusted partner in navigating the ever-evolving logistics landscape. Trust us to be the backbone of your supply chain and unlock new opportunities for growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="w-12 h-12 text-[#FF8C00] mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;