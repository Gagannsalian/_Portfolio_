import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-500 to-blue-800 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white">
          <Link to="/">PORTFOLIO</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white font-semibold text-lg py-2 px-4 transition-all duration-300 transform hover:font-bold hover:scale-110 hover:shadow-2xl"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white font-semibold text-lg py-2 px-4 transition-all duration-300 transform hover:font-bold hover:scale-110 hover:shadow-2xl"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white font-semibold text-lg py-2 px-4 transition-all duration-300 transform hover:font-bold hover:scale-110 hover:shadow-2xl"
          >
            Projects
          </Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-110"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-blue-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden bg-white shadow-md z-100 fixed left-0 w-full h-full">
    <Link
      to="/home"
      onClick={() => setIsOpen(false)} // Close the menu when clicked
      className="block px-4 py-2 text-gray-700 hover:font-bold hover:scale-110 hover:text-blue-500 transition-all duration-300 transform hover:shadow-lg"
    >
      Home
    </Link>
    <Link
      to="/about"
      onClick={() => setIsOpen(false)} // Close the menu when clicked
      className="block px-4 py-2 text-gray-700 hover:font-bold hover:scale-110 hover:text-blue-500 transition-all duration-300 transform hover:shadow-lg"
    >
      About
    </Link>
    <Link
      to="/projects"
      onClick={() => setIsOpen(false)} // Close the menu when clicked
      className="block px-4 py-2 text-gray-700 hover:font-bold hover:scale-110 hover:text-blue-500 transition-all duration-300 transform hover:shadow-lg"
    >
      Projects
    </Link>
    <Link
      to="/contact"
      onClick={() => setIsOpen(false)} // Close the menu when clicked
      className="block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 hover:font-bold hover:scale-110 rounded-lg mx-4 my-2 shadow-lg transition-all duration-300"
    >
      Contact
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
