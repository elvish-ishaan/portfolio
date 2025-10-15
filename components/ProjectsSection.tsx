'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Pumpkin Ai',
    description: 'An AI-powered platform for editing images with just a prompt.',
    image: "https://res.cloudinary.com/diqurtmad/image/upload/v1760537595/Screenshot_2025-09-11_142624_qtwhog.png",
    technologies: ['Next.js', 'Node.js', 'Postgres', 'Tailwind CSS', 'Gemini API', 'AWS S3'],
    github: 'https://github.com/elvish-ishaan/pumpkin',
    live: 'https://pumpkin.dryink.space',
  },
  {
    title: "Plusai",
    description: "Chatbot Where you can ask questions and get answers with lots of other stuff.",
    image: "https://res.cloudinary.com/diqurtmad/image/upload/v1760537754/plusai_mgsebt.png",
    technologies: ['Next.js', 'Node.js', 'Postgres', 'Tailwind CSS'],
    github: 'https://github.com/elvish-ishaan/plusai',
    live: 'https://plusai.dryink.space',
  },
  {
    title: "Ask Guru",
    description: "A platform where you can ask questions and get answers from experts.",
    image: "https://res.cloudinary.com/diqurtmad/image/upload/v1760537831/Screenshot_2025-10-15_194650_mgkwvq.png",
    technologies: ['Next.js', 'Node.js', 'Postgres', 'Tailwind CSS', 'Langchain', 'Pinecone'],
    github: 'https://github.com/elvish-ishaan/askguru',
    live: 'https://askguru.dryink.space',
  },
  {
    title: 'Nafri',
    description: 'A cloud storage platform with advanced asset management and secure file encryption.',
    image: "https://res.cloudinary.com/du7xpy1rn/image/upload/v1753363314/Screenshot_2025-07-24_185122_rdys7h.png",
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3'],
    github: 'https://github.com/elvish-ishaan/nafri',
    live: 'https://nafri.dryink.space',
  },
  {
    title: "Dryink",
    description: "A platform for generating animated videos from educational content.",
    image: "https://res.cloudinary.com/du7xpy1rn/image/upload/v1753364154/Screenshot_2025-07-24_190533_hzjtgs.png",
    technologies: ['Next.js', 'Node.js', 'Postgres', 'Tailwind CSS', "FFmpeg", "OpenAI API"],
    github: 'https://github.com/elvish-ishaan/dryink',
    live: 'https://dryink.space',
  },
  // {
  //   title: "Hiremate",
  //   description: "A platform for automating the hiring process.",
  //   image: "https://res.cloudinary.com/du7xpy1rn/image/upload/v1753364322/Screenshot_2025-07-24_190828_dphhcv.png",
  //   technologies: ['Next.js', 'Node.js', 'Postgres', 'Tailwind CSS'],
  //   github: 'https://github.com/elvish-ishaan/Hiremate',
  //   live: 'https://hiremate.vercel.app',
  // },
 
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-[#f9fafb] dark:bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on. Each project was built with a focus on
            solving real-world problems and delivering exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={480}
                  width={640}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-[#e0f2fe] dark:bg-[#1e3a8a] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 