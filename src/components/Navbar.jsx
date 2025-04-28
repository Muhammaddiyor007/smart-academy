'use client'  // Mark the component as client-side

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div className="text-2xl font-bold">SmartAcademy</div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 text-lg">
        <Link className='hover:text-yellow-400' href="/">Home</Link>
        <Link className='hover:text-yellow-400' href="/blog">Blog</Link>
        <Link className='hover:text-yellow-400' href="/courses">Courses</Link>
        <Link className='hover:text-yellow-400' href="/about">About</Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-blue-600 text-center transform transition-all duration-300 ease-in-out ${
          isOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'
        }`}
      >
        <div className="space-y-4 py-4">
          <Link
            href="/"
            className="block text-lg py-2 hover:bg-blue-700 hover:text-yellow-400 transition-all duration-200"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="block text-lg py-2 hover:bg-blue-700 hover:text-yellow-400 transition-all duration-200"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            href="/courses"
            className="block text-lg py-2 hover:bg-blue-700 hover:text-yellow-400 transition-all duration-200"
            onClick={closeMenu}
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="block text-lg py-2 hover:bg-blue-700 hover:text-yellow-400 transition-all duration-200"
            onClick={closeMenu}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
