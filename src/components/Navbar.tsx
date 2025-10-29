import { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assests/logo-zed-train.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg  w-full z-50 font-roboto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Zed Train Logo" style={{ width: '100px', height: 'auto' }}/>

            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
     {/* Desktop menu */}
<div className="hidden md:flex md:items-center md:space-x-4">
  <NavLinks />
  <NavLink
    to="/quote"
    className="ml-4 px-4 py-2 bg-[#FF8C00] text-white rounded hover:bg-[#e67e00] transition-colors">
    GET A QUOTE
  </NavLink>
</div>

        </div>
      </div>
      {/* Mobile menu */}
 {/* Mobile menu */}
{isOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <MobileNavLinks />
      <NavLink
        to="/quote"
        className="w-full mt-4 px-4 py-2 bg-[#FF8C00] text-white rounded hover:bg-[#e67e00] transition-colors block text-center"
      >
        GET A QUOTE
      </NavLink>
    </div>
  </div>
)}

    </nav>
  );
};

const NavLinks = () => {
  const links = [
    { to: '/', label: 'HOME' },
    { to: '/industries', label: 'INDUSTRIES SERVED' },
    { to: '/transportation', label: 'TRANSPORTATION SERVICES' },
    { to: '/logistics', label: 'LOGISTICS CAPABILITIES' },
    { to: '/about', label: 'ABOUT US' },
    { to: '/contact', label: 'CONTACT US' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `relative px-3 py-2 text-sm text-gray-700 hover:text-[#FF8C00] transition-colors
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
            after:bg-[#FF8C00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform 
            after:duration-300 ${isActive ? 'text-[#FF8C00] after:scale-x-100' : ''}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

const MobileNavLinks = () => {
  const links = [
    { to: '/', label: 'HOME' },
    { to: '/industries', label: 'INDUSTRIES SERVED' },
    { to: '/transportation', label: 'TRANSPORTATION SERVICES' },
    { to: '/logistics', label: 'LOGISTICS CAPABILITIES' },
    { to: '/about', label: 'ABOUT US' },
    { to: '/contact', label: 'CONTACT US' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `block px-3 py-2 text-base relative
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
            after:bg-[#FF8C00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform 
            after:duration-300 ${
              isActive
                ? 'text-[#FF8C00] after:scale-x-100'
                : 'text-gray-700 hover:text-[#FF8C00] transition-colors'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

export default Navbar;
