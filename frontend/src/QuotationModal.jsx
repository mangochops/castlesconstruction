import { useState } from "react";

// eslint-disable-next-line react/prop-types
const QuotationModal = ({ closeModal }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleProjectChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g., API call, form validation)
    setFormSubmitted(true); // Set formSubmitted to true
    setTimeout(() => {
      closeModal(); // Close modal after submission
    }, 2000); // Delay closing modal for 2 seconds
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-center text-2xl font-bold">Request a Quotation</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-700">
              Project
            </label>
            <input
              type="text"
              id="project"
              name="project"
              value={projectTitle}
              onChange={handleProjectChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-3 py-2 bg-gray-100"
              placeholder="Enter Project Title"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-3 py-2 bg-gray-100"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-3 py-2 bg-gray-100"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-3 py-2 bg-gray-100"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              formSubmitted ? "bg-gray-500 cursor-not-allowed" : ""
            }`}
            disabled={formSubmitted}
          >
            {formSubmitted ? "We will get back soon 🚀" : "Request Quotation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuotationModal;

