import React from 'react'
import { Link } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from 'react-icons/fa'
import { scroller } from 'react-scroll'

const Navigation: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (target: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      if (target !== 'introduction-section') {
        setTimeout(() => {
          scroller.scrollTo(target, {
            smooth: true,
            duration: 500,
            offset: -70,
          })
        }, 100)
      }
    }
  }
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
        onClick={() => handleClick('introduction-section')}
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
        onClick={() => handleClick('expertise-section')}
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
        onClick={() => handleClick('work-experience')}
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
        onClick={() => handleClick('project-section')}
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
        onClick={() => handleClick('contact-me')}
      >
        <FaEnvelope size={24} />
      </Link>
    </nav>
  )
}

export default Navigation
