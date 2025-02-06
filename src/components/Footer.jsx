import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#6B5B95] text-white p-6 mt-16 flex flex-col items-center text-center sm:flex-row sm:justify-between">
      {/* Logo and Copyright */}
      <div className="flex flex-col items-center sm:flex-row gap-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="w-16 h-16 rounded-full shadow-lg hover:scale-125 transition-all duration-300"
        >
          <img
            src="https://i.ibb.co.com/hRBYCZkX/S-logo-circle.png"
            alt="logo"
          />
        </Link>
      </div>

      <p className="text-center">Copyright © {new Date().getFullYear()} - All rights reserved</p>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-4 sm:mt-0">
        <a
          href="mailto:sumayaece19@gmail.com?subject=Subject%20Here&body=Message%20Here"
          className="hover:text-gray-200 transition"
          aria-label="Email"
        >
          <FaEnvelope className="text-4xl p-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/sumaya-tabassum-tanna/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-4xl p-2" />
        </a>
        <a
          href="https://www.facebook.com/sumaya.tabassum.952448"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
          aria-label="Facebook"
        >
          <FaFacebook className="text-4xl p-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
