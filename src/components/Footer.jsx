import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand / Name */}
        <h3 className="text-lg font-semibold text-white">
          © {new Date().getFullYear()} Divyanshu Ranjan Srivastava
        </h3>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:divyanshusrivastava946@gmail.com"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
