import React from 'react'
import { Link } from 'react-scroll'
import { FaHome, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'

const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 p-3 rounded-full flex space-x-4 shadow-lg">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white"
      >
        <FaHome size={24} />
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white"
      >
        <FaCode size={24} />
      </Link>
      <Link
        to="work"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white"
      >
        <FaProjectDiagram size={24} />
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="text-gray-400 hover:text-white"
      >
        <FaEnvelope size={24} />
      </Link>
    </nav>
  )
}

export default Navigation
