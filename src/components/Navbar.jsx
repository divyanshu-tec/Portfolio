import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-8 py-3 fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="flex items-center justify-between">
        
        {/* Left side */}
        <div className="flex items-center">
          <img
            src="/photo.avif"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold">Divyanshu</span>
            <span className="text-sm text-gray-300">Web Developer</span>
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["home", "about", "projects", "experience", "contact"].map((item) => (
            <li key={item} className="hover:scale-105 duration-200 cursor-pointer">
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-gray-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center">
          {["home", "about", "projects", "experience", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="block hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
