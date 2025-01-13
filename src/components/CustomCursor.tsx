import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [position])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
          background: 'linear-gradient(135deg, #a2f4f2, #78ddda)',
          borderRadius: '80%',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      ></motion.div>
    </>
  )
}

export default CustomCursor
