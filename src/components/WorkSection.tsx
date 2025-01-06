import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function WorkSection() {
  const [startTyping, setStartTyping] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const fullText = '    Click here to see my Projects    '
  const typingSpeed = 100

  useEffect(() => {
    if (startTyping) {
      let currentIndex = 0

      const typingInterval = setInterval(() => {
        const nextChar = fullText[currentIndex]
        if (nextChar !== undefined) {
          setDisplayText((prev) => prev + nextChar)
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, typingSpeed)

      return () => clearInterval(typingInterval)
    }
  }, [startTyping])
  function handleProjectPage() {}

  return (
    <>
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 8px;
            height: 20px;
            background-color: white;
            margin-left: 2px;
            animation: blink 1s step-start infinite;
          }

          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      <section
        id="work-section"
        className="section w-full h-screen flex flex-col items-center justify-center bg-gray-700"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
          onViewportEnter={() => setStartTyping(true)}
        >
          <h2 className="text-3xl font-bold text-white">Personal Projects</h2>
        </motion.div>
        <div className="flex flex-col items-center" onClick={handleProjectPage}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white px-8 py-4 rounded-lg shadow-lg text-center cursor-pointer"
          >
            <pre className="text-lg font-mono text-gray-300">
              {displayText}
              {displayText.length < fullText.length ? (
                <span className="blinking-cursor"> | </span>
              ) : null}
            </pre>
          </motion.div>
        </div>
      </section>
    </>
  )
}
