import { NavLink } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assests/LaunchImage@3x.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
            <img src={logo} alt="Zed Train Logo" style={{ width: '100px', height: 'auto' }}/>

            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <div className="flex flex-col space-y-2">
              <FooterLink to="/industries" label="INDUSTRIES SERVED" />
              <FooterLink to="/transportation" label="TRANSPORTATION SERVICES" />
              <FooterLink to="/logistics" label="LOGISTICS CAPABILITIES" />
              <FooterLink to="/about" label="ABOUT US" />
              <FooterLink to="/contact" label="CONTACT US" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a href="tel:+201007000185" className="flex items-center hover:text-[#FF8C00]">
                <Phone className="h-5 w-5 mr-2" />
                +20 100 7000 185 </a>
              <a href="mailto:hello@zedtrain.com" className="flex items-center hover:text-[#FF8C00]">
                <Mail className="h-5 w-5 mr-2" />
                hello@zedtrain.com
              </a>
              <div className="flex space-x-4 mt-4">
                <SocialLink Icon={Facebook} href="https://www.facebook.com/people/Zed-Train-for-Trans/61556332654218/" />
                <SocialLink Icon={Instagram} href="https://www.instagram.com/zedtrain?igsh=c3M2eHYxMG52c3g0" />
                <SocialLink Icon={Linkedin} href="https://www.linkedin.com/company/zedtrain/" />
              </div>
            </div>
          </div>

      {/* Get Quote Section */}
<div>
  <h4 className="text-lg font-semibold mb-4">Get a Quote</h4>
  <p className="mb-4">
    Discover customized transportation solutions tailored to your needs. Get your quote today!
  </p>
  <NavLink
    to="/quote"
    className="px-6 py-2 bg-[#FF8C00] text-white rounded hover:bg-[#e67e00] transition-colors inline-block text-center"
  >
    Get a Quote
  </NavLink>
</div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Zed Train. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    className="hover:text-[#FF8C00] transition-colors text-sm"
  >
    {label}
  </NavLink>
);

const SocialLink = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#FF8C00] transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default Footer;