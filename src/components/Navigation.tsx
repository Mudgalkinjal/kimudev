// Navigation.tsx
import React from 'react'
import { Link } from 'react-scroll'
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from 'react-icons/fa'

const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 p-3 rounded-full flex space-x-4 shadow-lg z-50">
      {/* Home/Introduction */}
      <Link
        to="introduction-section" // Updated to match section ID
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        activeClass="text-white"
        spy={true}
        offset={-70} // Adjust if you have a fixed header
        aria-label="Home"
      >
        <FaHome size={24} />
      </Link>

      {/* Expertise */}
      <Link
        to="expertise-section" // Updated to match section ID
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        activeClass="text-white"
        spy={true}
        offset={-70}
        aria-label="Expertise"
      >
        <FaUser size={24} /> {/* Changed icon to FaUser */}
      </Link>
      {/* Work Experience */}
      <Link
        to="work-experience" // Updated to match section ID
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        activeClass="text-white"
        spy={true}
        offset={-70}
        aria-label="Work Experience"
      >
        <FaProjectDiagram size={24} />
      </Link>

      {/* Projects */}
      <Link
        to="project-section" // Ensure your Projects section has this ID
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        activeClass="text-white"
        spy={true}
        offset={-70}
        aria-label="Projects"
      >
        <FaCode size={24} />
      </Link>

      {/* Contact */}
      <Link
        to="contact-me"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        activeClass="text-white"
        spy={true}
        offset={-70}
        aria-label="Contact"
      >
        <FaEnvelope size={24} />
      </Link>
    </nav>
  )
}

export default Navigation
