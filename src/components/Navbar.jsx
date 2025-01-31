import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { FaHome, FaGraduationCap, FaLaptopCode, FaPhoneAlt } from 'react-icons/fa'; // Adding icons for other sections
import { Link } from 'react-scroll'; // For smooth scroll functionality
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from '../provider/ThemeContext';


const Navbar = () => {
  const [active, setActive] = useState("home"); // Track the active button
  const { isDark, toggleTheme } = useTheme();  // Access theme context

  return (
    <div className="navbar  bg-base-100 bg-opacity-95 sticky top-0 z-10">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setActive("home")}
                className={`flex items-center text-lg font-medium ${active === "home"
                  ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                  : "text-[#6B5B95] hover:text-[#FF6F61]"
                  }`}
              >
                <FaHome className="w-5 h-5 mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setActive("about")}
                className={`flex items-center text-lg font-medium ${active === "about"
                  ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                  : "text-[#6B5B95] hover:text-[#FF6F61]"
                  }`}
              >
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="w-5 h-5 mr-2"
                />
                About
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={500}
                onClick={() => setActive("skill")}
                className={`flex items-center text-lg font-medium ${active === "skill"
                  ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                  : "text-[#6B5B95] hover:text-[#FF6F61]"
                  }`}
              >
                <FaLaptopCode className="w-5 h-5 mr-2" /> {/* Skill Icon */}
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                onClick={() => setActive("education")}
                className={`flex items-center text-lg font-medium ${active === "education"
                  ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                  : "text-[#6B5B95] hover:text-[#FF6F61]"
                  }`}
              >
                <FaGraduationCap className="w-5 h-5 mr-2" /> {/* Education Icon */}
                Education
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setActive("contact")}
                className={`flex items-center text-lg font-medium ${active === "contact"
                  ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                  : "text-[#6B5B95] hover:text-[#FF6F61]"
                  }`}
              >
                <FaPhoneAlt className="w-5 h-5 mr-2" /> {/* Contact Icon */}
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Link to='home' smooth={true}
          duration={500} className="w-16 h-16 rounded-full shadow-lg hover:scale-125 transition-all duration-300">
          <img src="https://i.ibb.co.com/hRBYCZkX/S-logo-circle.png" alt="logo" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setActive("home")}
              className={`flex items-center text-lg font-medium ${active === "home"
                ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                : "text-[#6B5B95] hover:text-[#FF6F61]"
                }`}
            >
              <FaHome className="w-5 h-5 mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setActive("about")}
              className={`flex items-center text-lg font-medium ${active === "about"
                ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                : "text-[#6B5B95] hover:text-[#FF6F61]"
                }`}
            >
              <FontAwesomeIcon
                icon={faAddressCard}
                className="w-5 h-5 mr-2"
              />
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              onClick={() => setActive("skill")}
              className={`flex items-center text-lg font-medium ${active === "skill"
                ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                : "text-[#6B5B95] hover:text-[#FF6F61]"
                }`}
            >
              <FaLaptopCode className="w-5 h-5 mr-2" /> {/* Skill Icon */}
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={() => setActive("education")}
              className={`flex items-center text-lg font-medium ${active === "education"
                ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                : "text-[#6B5B95] hover:text-[#FF6F61]"
                }`}
            >
              <FaGraduationCap className="w-5 h-5 mr-2" /> {/* Education Icon */}
              Education
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setActive("contact")}
              className={`flex items-center text-lg font-medium ${active === "contact"
                ? "text-[#FF6F61] bg-[#F7CAC9] rounded-lg"
                : "text-[#6B5B95] hover:text-[#FF6F61]"
                }`}
            >
              <FaPhoneAlt className="w-5 h-5 mr-2" /> {/* Contact Icon */}
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full mr-2 ${isDark ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
          <MdOutlineDarkMode size={24} />
        </button>
        <a
          href="https://drive.google.com/file/d/1i0brgpDKIxEl9VVlyeYF6sMA8U6JStW8/view?usp=sharing" //resume
          download
          className="inline-block px-6 py-3 bg-[#6B5B95] text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-l hover:from-[#FF6F61] hover:to-[#6B5B95]"
          target="_blank"
        >
          Download Resume
        </a>

      </div>
    </div>
  );
};

export default Navbar;
