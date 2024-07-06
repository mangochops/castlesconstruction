import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="bg-custom-blue py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <img src="/assets/logo.png" alt="logo" className="mb-4 w-auto h-16" />
        <ul className="flex flex-wrap mb-8">
          <li className="mr-6"><a href="/#" className="text-white hover:text-gray-300">Home</a></li>
          <li className="mr-6"><a href="/#" className="text-white hover:text-gray-300">Services</a></li>
          <li className="mr-6"><a href="/#" className="text-white hover:text-gray-300">Projects</a></li>
          <li><a href="/#" className="text-white hover:text-gray-300">About us</a></li>
        </ul>
        <h3 className="text-white text-lg font-bold mb-4">Stay in touch</h3>
        <div className="flex mb-8 space-x-6">
          <a href="https://facebook.com/groups/268287157828063/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center">
            <FaFacebookF className="mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center">
            <FaBehance className="mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
            <span className="hidden sm:inline">Behance</span>
          </a>
          <a href="https://www.instagram.com/castles_construction.company?igsh=MTJrdHV4NHR4NDQyZg==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center">
            <FaInstagram className="mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/castles-construction-company/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 flex items-center">
            <FaLinkedinIn className="mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href="mailto:castlesconstruction01@gmail.com" className="text-white hover:text-gray-300 flex items-center">
            <FaEnvelope className="mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
        <div className="text-center text-white mt-8">
          <p>&copy; {currentYear} Mangochops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
