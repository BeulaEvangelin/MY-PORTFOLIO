import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactPopup from "./Contact";

function Header() {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-center items-center">
        <nav style={{ fontFamily: "DM Sans" }}>
          <ul className="flex space-x-20 sm:space-x-8">
            <li>
              <Link
                to="/"
                className={`text-black px-4 py-2 transition duration-300 ${
                  location.pathname === "/"
                    ? "bg-MyBlue text-white rounded"
                    : "bg-transparent text-black"
                } rounded-md hover:bg-MyBlue hover:text-white`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-black px-4 py-2 transition duration-300 ${
                  location.pathname === "/about"
                    ? "bg-MyBlue text-white rounded"
                    : "bg-transparent text-black"
                } rounded-md hover:bg-MyBlue hover:text-white`}
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={togglePopup}
                className={`text-black px-4 py-2 transition duration-300 bg-transparent text-black rounded-md hover:bg-MyBlue hover:text-white`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {isPopupOpen && <ContactPopup onClose={togglePopup} />}
    </header>
  );
}

export default Header;
