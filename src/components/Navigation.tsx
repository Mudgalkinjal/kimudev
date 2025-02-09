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
      <Link
        to="introduction-section"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        activeClass="text-white"
        spy={true}
        offset={-70}
        aria-label="Home"
      >
        <FaHome size={24} />
      </Link>

      <Link
        to="expertise-section"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white transition-colors duration-300"
        activeClass="text-white"
        spy={true}
        offset={-70}
        aria-label="Expertise"
      >
        <FaUser size={24} />
      </Link>
      <Link
        to="work-experience"
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

      <Link
        to="project-section"
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
