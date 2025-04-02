'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TechStack from './TechStack'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Hey there! I&apos;m Shamir, a high school graduate with a deep passion for building
            impactful products that can positively influence humankind. I thrive in collaborative
            environments and love working with teams to create high-quality products that solve
            real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TechStack />
        </motion.div>
      </div>
    </section>
  )
} 