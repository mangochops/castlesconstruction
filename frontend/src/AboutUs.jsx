const AboutUs = () => {
  return (
    <div section id="AboutUs" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <img src="./assets/strength-svgrepo-com.svg" alt="Durability" className="mx-auto h-24 mb-4" />
          <h2 className="text-xl font-bold mb-2 text-center">Durability</h2>
          <p className="text-gray-700 text-center">Our team consists of experienced professionals who have extensive experience in the construction industry. We are committed to delivering exceptional quality and service on every project.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <img src="./assets/sustainability-approved-ecology-approval-environment-conservation-agreement-svgrepo-com(1).svg" alt="Sustainability" className="mx-auto h-24 mb-4" />
          <h2 className="text-xl font-bold mb-2 text-center">Sustainability</h2>
          <p className="text-gray-700 text-center">We are committed to delivering exceptional quality and service on every project. We are committed to delivering exceptional quality and service on every project.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <img src="./assets/quality-diamond-svgrepo-com.svg" alt="Quality" className="mx-auto h-24 mb-4" />
          <h2 className="text-xl font-bold mb-2 text-center">Quality</h2>
          <p className="text-gray-700 text-center">We are committed to delivering exceptional quality and service on every project. We are committed to delivering exceptional quality and service on every project.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

