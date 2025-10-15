'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TechStack from './TechStack'
import { Highlighter } from './ui/text-highlighter'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className=' leading-[1.25] text-center text-2xl'>
           Hey there! , a high school graduate with a{" "} I&apos;m{" "}
            <Highlighter action="underline" color="#FF9800">
              deep passion for building
            </Highlighter>{" "}
            impactful products that can positively influence humankind.I thrive in
            <Highlighter action="underline" color="#3458eb">
              collaborative environments{" "}
            </Highlighter>{" "}
            and love working with teams to create high-quality products that solve real-world problems
          </p>

        </div>

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