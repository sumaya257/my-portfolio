import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer bg-[#6B5B95] text-neutral-content items-center p-4 mt-16">
      <aside className="md:grid-flow-col items-center">
        <Link to='home' smooth={true}
          duration={500} className="w-16 h-16 rounded-full shadow-lg hover:scale-125 transition-all duration-300">
          <img src="https://i.ibb.co.com/hRBYCZkX/S-logo-circle.png"  alt="logo" />
        </Link>
        <p className='text-white lg:ml-96'>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* Email Icon */}
        <a
          // href="mailto:sumayaece19@gmail.com" // Replace with your email
          href="mailto:sumayaece19@gmail.com?subject=Subject%20Here&body=Message%20Here"
          className="text-white hover:text-gray-200 transition"
          aria-label="Email"
        >
          <FaEnvelope className="text-4xl text-white p-2" />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/sumaya-tabassum-tanna/" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-4xl text-white p-2" />
        </a>
        {/* facebook Icon */}
        <a
          href="https://www.facebook.com/sumaya.tabassum.952448" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition"
          aria-label="LinkedIn"
        >
          <FaFacebook className="text-4xl text-white p-2" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;