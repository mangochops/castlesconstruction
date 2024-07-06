import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import QuotationModal from "./QuotationModal";
import PropTypes from 'prop-types'; // Import PropTypes for type checking

const Slider = () => {
  // Generate descriptions based on project type
  const generateDescription = (type) => {
    switch (type) {
      case "Pavements":
        return (
          "Explore our latest pavement projects. We specialize in creating durable and aesthetic pavements tailored to your needs. " +
          "Our projects include various styles and materials, ensuring both functionality and visual appeal. " +
          "With a focus on quality and durability, our pavements are designed to withstand various weather conditions and heavy foot traffic. " +
          "Contact us today to learn more about how we can enhance your outdoor spaces with our expert pavement solutions."
        );
      case "Designs":
        return (
          "Discover our creative design solutions. From concept to execution, we craft designs that leave a lasting impression. " +
          "Our design projects span across interior, exterior, and landscape designs, combining aesthetics with functionality. " +
          "With a team of experienced designers, we tailor our designs to reflect your unique vision and requirements. " +
          "Explore our portfolio to see how our innovative designs have transformed spaces and inspired creativity."
        );
      case "Drainage":
        return (
          "Learn about our drainage projects. We implement effective drainage systems to manage water flow and prevent flooding. " +
          "Our drainage solutions include sustainable practices and advanced technologies to ensure efficient water management. " +
          "From residential to commercial projects, we offer customized drainage solutions tailored to specific site conditions. " +
          "Contact us for comprehensive drainage services that prioritize environmental sustainability and flood prevention."
        );
      case "Sewerage systems":
        return (
          "View our sewerage system projects. We design and install efficient sewerage solutions for urban and rural areas. " +
          "Our sewerage systems incorporate advanced technologies and sustainable practices to ensure reliable performance. " +
          "With a focus on environmental stewardship, our solutions aim to minimize environmental impact while meeting regulatory standards. " +
          "Explore our projects to see how we contribute to improving public health and environmental quality through effective sewerage systems."
        );
      default:
        return "Explore our latest projects.";
    }
  };

  const projects = [
    {
      image1: "/assets/Pavements/IMG-20240703-WA0012.jpg",
      image2: "/assets/Pavements/IMG-20240703-WA0011.jpg",
      image3: "/assets/Pavements/IMG-20240703-WA0000.jpg",
      title: "Pavements",
      type: "Pavements",
      description: generateDescription("Pavements"),
    },
    {
      image1: "/assets/Design/IMG-20240703-WA0016.jpg",
      image2: "/assets/Design/IMG-20240703-WA0017.jpg",
      image3: "/assets/Design/new.png",
      title: "Design",
      type: "Designs",
      description: generateDescription("Designs"),
    },
    {
      image1: "/assets/Drainage/IMG-20240703-WA0003.jpg",
      image2: "/assets/Drainage/IMG-20240703-WA0004.jpg",
      image3: "/assets/Drainage/IMG-20240703-WA0006.jpg",
      title: "Drainage",
      type: "Drainage",
      description: generateDescription("Drainage"),
    },
    {
      image1: "/assets/Sewerage/IMG-20240703-WA0002.jpg",
      image2: "/assets/Sewerage/IMG-20240703-WA0005.jpg",
      image3: "/assets/Sewerage/IMG-20240703-WA0008.jpg",
      title: "Sewage",
      type: "Sewerage systems",
      description: generateDescription("Sewerage systems"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };

  const goToSlide = (projectsIndex) => {
    setCurrentIndex(projectsIndex);
  };

  const handleGetQuote = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div section id="Slider" className="container mx-auto px-4 py-8 bg-gray-100">
      <div className="relative text-center">
        <div className="group">
          <h1 className="text-3xl font-bold mb-2 text-custom-blue">Projects</h1>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            {projects[currentIndex].type}
          </h2>
          <div className="slider-images flex justify-center space-x-4 overflow-hidden">
            <div
              style={{ backgroundImage: `url(${projects[currentIndex].image1})` }}
              className="slide-image bg-cover bg-center w-1/3 h-64"
            ></div>
            <div
              style={{ backgroundImage: `url(${projects[currentIndex].image2})` }}
              className="slide-image bg-cover bg-center w-1/3 h-64"
            ></div>
            {projects[currentIndex].image3 && (
              <div
                style={{ backgroundImage: `url(${projects[currentIndex].image3})` }}
                className="slide-image bg-cover bg-center w-1/3 h-64"
              ></div>
            )}
          </div>
          <p className="text-lg mt-4 text-center">{projects[currentIndex].description}</p>
          <button
            onClick={handleGetQuote}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Get a Quote
          </button>
          {showModal && <QuotationModal projectTitle={projects[currentIndex].title} closeModal={closeModal} />} {/* Pass projectTitle and closeModal */}
        </div>
        <div className="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-blue-950/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-blue-950/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            onClick={() => goToSlide(projectIndex)}
            className={`cursor-pointer mx-2 ${
              projectIndex === currentIndex ? "text-blue-500" : "text-gray-400"
            }`}
          >
            {projectIndex === currentIndex ? (
              <FaCircle size={20} />
            ) : (
              <FaRegCircle size={20} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// PropTypes validation for closeModal
Slider.propTypes = {
  closeModal: PropTypes.func.isRequired, // Ensure closeModal is a function and required
};

export default Slider;
