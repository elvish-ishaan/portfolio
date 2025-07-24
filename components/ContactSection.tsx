'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-blue-600" />
              <a
                href="mailto:ishaanelvish@gmail.com"
                className="hover:text-blue-600 text-gray-700 dark:text-gray-300"
              >
                ishaanelvish@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <CodeBracketIcon className="h-6 w-6 text-blue-600" />
              <a
                href="https://github.com/elvish-ishaan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 text-gray-700 dark:text-gray-300"
              >
                github.com/elvish-ishaan
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border border-[#e5e7eb] dark:border-[#333] shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#1e1e1e] dark:text-white py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-[#e5e7eb] dark:border-[#333] shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#1e1e1e] dark:text-white py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-[#e5e7eb] dark:border-[#333] shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#1e1e1e] dark:text-white py-2 px-3"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 