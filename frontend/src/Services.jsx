const Services = () => {
  return (
    <div section id="Services" className="bg-gray-200 py-8 px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-custom-blue">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="text-center bg-white rounded-lg shadow-lg p-4">
          <img src="/assets/remodelling-icon.svg" alt="remodelling" className="mx-auto w-16 h-16" />
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">Reconstruction</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Modification</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Repairs</p>
        </div>
        <div className="text-center bg-white rounded-lg shadow-lg p-4">
          <img src="/assets/finishes-icon.svg" alt="Finishes" className="mx-auto w-16 h-16" />
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">Site Clearance</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Furniture Installation</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Paintworks</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Terrazzo</p>
        </div>
        <div className="text-center bg-white rounded-lg shadow-lg p-4">
          <img src="/assets/estimations-_-billing-icon.svg" alt="estimations" className="mx-auto w-16 h-16" />
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">Quantity analysis</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Bills of Quantities</p>
        </div>
        <div className="text-center bg-white rounded-lg shadow-lg p-4">
          <img src="/assets/design-logo.svg" alt="design" className="mx-auto w-16 h-16" />
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">Architecture</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Structures</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Landscaping</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Pavement Design</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Gates & Entrances</p>
        </div>
        <div className="text-center bg-white rounded-lg shadow-lg p-4">
          <img src="/assets/building-icon.svg" alt="building" className="mx-auto w-16 h-16" />
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">Structures</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Cabro Pavements</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Paving Slab</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Sewer Connection</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Drainage</p>
        </div>
        <div className="text-center bg-white rounded-lg shadow-lg p-4">
          <img src="/assets/Group 3.png" alt="consultation" className="mx-auto w-16 h-16" />
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">Consultation</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Site Agent</p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">Topography levelling</p>
        </div>
      </div>
    </div>
  );
}

export default Services;


