'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import ThemeToggle from '@/components/ThemeToggle'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

export default function Home() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Shamir",
      className: "text-blue-600 dark:text-blue-500",
    },
    {
      text: "Manzoor,",
      className: "text-blue-600 dark:text-blue-500",
    },
    {
      text: "a",
    },
    {
      text: "passionate",
    },
    {
      text: "developer",
      className: "text-blue-600 dark:text-blue-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6] dark:from-[#121212] dark:to-[#1e1e1e] text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">SM</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600">About</Link>
                  <Link href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600">Projects</Link>
                  <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600">Contact</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <TypewriterEffect words={words} />
            
            <p className="text-xl max-w-3xl mx-auto mt-8 mb-8 text-gray-700 dark:text-gray-300">
              I focus on building impactful products that solve real-world problems.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center space-x-4 mt-12"
            >
              <Link
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View My Work
                <ArrowDownIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-[#e5e7eb] dark:border-[#333] text-base font-medium rounded-md bg-white dark:bg-[#1e1e1e] hover:bg-[#f9fafb] dark:hover:bg-[#2d2d2d] text-gray-800 dark:text-gray-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
