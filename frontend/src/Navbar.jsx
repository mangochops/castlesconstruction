import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className="sticky top-0 z-50 py-0.5 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 p-4">
            <img className="w-auto h-12 lg:h-16" src="/assets/logo.png" alt="Logo" />
          </div>
          <div className="hidden lg:flex space-x-4 lg:space-x-8 items-center">
            <NavLink to="HeroSection">Home</NavLink>
            <NavLink to="Services">Services</NavLink>
            <NavLink to="Slider">Projects</NavLink>
            <NavLink to="AboutUs">About us</NavLink>
            <button className="bg-blue-950 text-white px-3 lg:px-4 py-2 rounded-md hover:bg-blue-800">
              Get a quote
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar} className="text-2xl text-white p-2">
              {open ? <X className="text-custom-blue" /> : <Menu className="text-custom-blue" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden flex flex-col items-center space-y-4 mt-4">
            <NavLink to="HeroSection" onClick={toggleNavbar}>Home</NavLink>
            <NavLink to="Services" onClick={toggleNavbar}>Services</NavLink>
            <NavLink to="Slider" onClick={toggleNavbar}>Projects</NavLink>
            <NavLink to="AboutUs" onClick={toggleNavbar}>About us</NavLink>
            <button className="bg-blue-950 text-white px-3 py-2 rounded-sm">
              Get a quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

// Custom NavLink component to handle navigation links with active styling
const NavLink = ({ to, children, onClick }) => (
  <Link 
    to={to}
    smooth={true}
    duration={500}
    spy={true}
    activeClass="text-blue-500 border-b-2 border-blue-500"
    className="block cursor-pointer hover:text-blue-500 px-2 lg:px-0 text-center"
    onClick={onClick}
  >
    {children}
  </Link>
);

// PropTypes validation for NavLink component
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Navbar;
