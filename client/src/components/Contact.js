import React from "react";

function ContactPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Contact Information</h2>
        <div className="flex items-center mb-4">
          <i className="ri-phone-line mr-2"></i>
          <p>+1 2898341346</p>
        </div>
        <div className="flex items-center mb-4">
          <i className="ri-map-pin-line mr-2"></i>
          <p>1383 White Oaks Blvd, Oakville, Ontario, Canada</p>
        </div>
        <div className="flex justify-between">
          <div>
            <a
              href="mailto:beulaevangelin3182@gmail.com"
              className="text-gray-600 hover:text-gray-900 mr-2"
            >
              <i className="ri-mail-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/beulaevangelin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 mr-2"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://www.behance.net/beulaevangelin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 mr-2"
            >
              <i className="ri-behance-fill"></i>
            </a>
            <a
              href="https://github.com/BeulaEvangelin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 mr-2"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/_.beula._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
