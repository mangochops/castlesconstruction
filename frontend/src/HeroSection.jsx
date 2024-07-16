import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <div
      id="HeroSection"
      style={{ 
        backgroundImage: `url("/assets/Frame 33.png")`,
        color: '#ffffff', // Set text color to white for better contrast
      }}
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-gray-800" // Darkened background for better contrast
    >
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide font-bold">
          WE BUILD YOUR DREAMS
        </h1>
        <p className="mt-4 text-lg max-w-2xl   mx-auto font-medium">
          At Castles Construction Company, we specialize in transforming your vision into reality with precision and care. As a full-service construction firm, we are committed to exceeding expectations by consistently delivering exceptional quality and service on every project. Whether it is crafting bespoke residential spaces or managing large-scale commercial developments, trust us to bring your dreams to life with expertise and dedication.
        </p>
        <Link
          to="Services"
          smooth={true}
          duration={500}
          className="mt-6 inline-block px-6 py-3 rounded-full bg-custom-blue text-white font-medium shadow-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
        >
          Explore Our Services
        </Link>
        <div className="mt-8 animate-bounce cursor-pointer">
          <Link to="Services" smooth={true} duration={500}>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
