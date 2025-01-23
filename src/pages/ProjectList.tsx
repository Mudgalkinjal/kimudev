import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Chat Application',
    description:
      'A real-time chat app built with Socket.io for seamless communication and modern UI/UX.',
    image: './chat.png',
    link: 'https://chat-application-topaz-mu.vercel.app/',
    technologies: [
      'React',
      'Socket.io',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Mongoose',
    ],
  },

  {
    title: 'Brownie Points',
    description:
      'A productivity app to gamify task completion with rewards and motivational tools.',
    image: '/brownieP.png',
    link: 'https://brownie-points.vercel.app/',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Framer Motion',
    ],
  },
  {
    title: 'Peak Timer',
    description: 'Personalized workout planner and timer app',
    image: '/peakT.png',
    link: 'https://peak-timer.vercel.app/',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Tailwind CSS',
      'MongoDB',
      'Express.js',
      'OpenAI API',
      'Jest',
      'Mongoose',
    ],
  },
  {
    title: 'Sentiment Analysis',
    description:
      'A web app to analyze the sentiment of user-provided text using an AI model.',
    image: '/sentimentA.png',
    link: '/sentimentpage',
    technologies: [
      'React',
      'TypeScript',
      'Flask',
      'Tailwind CSS',
      'Python',
      'NumPy',
      'Scikit-learn',
      'Jest',
      'Flask-CORS',
    ],
  },
]

export default function ProjectList() {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center">
      <div className="overflow-x-auto w-full h-full flex items-center">
        <div className="flex space-x-8 px-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[400px] bg-gray-800 rounded-lg shadow-lg p-6 text-white flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                className="mt-4 text-blue-400 hover:underline"
              >
                View Project
              </a>
              {/* Technologies Section */}
              <motion.div
                className="mt-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.4,
                      delayChildren: 1.4,
                    },
                  },
                }}
              >
                <h4 className="text-lg font-semibold mb-2">
                  Technologies Used:
                </h4>
                <motion.ul className="space-y-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.li
                      key={techIndex}
                      className="text-gray-300 text-sm"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
