import Link from 'next/link'
import { GithubIcon } from '@/components/icons'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            <Link
              href="https://github.com/elvish-ishaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Shamir Manzoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 