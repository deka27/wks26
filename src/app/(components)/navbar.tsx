import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-11/12 max-w-7xl z-50 px-3 sm:px-6 py-3 sm:py-4 rounded-full bg-black/40 backdrop-blur-lg border-2 border-[#F58F00]/50 shadow-lg shadow-[#F58F00]/20">
        <div className="flex items-center justify-between relative">
          {/* Logo and Name */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/dipy-logo.png" 
              alt="DIPY Logo" 
              width={32} 
              height={32}
              className="rounded-full sm:w-10 sm:h-10"
            />
            <span className="text-white font-bold text-base sm:text-xl">DIPY</span>
          </div>

          {/* Decorative Arrow connecting logo to nav */}
          <div className="hidden lg:block absolute left-32 xl:left-36 top-1/2 -translate-y-1/2 w-48 xl:w-64">
            <svg className="w-full h-6" viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M2 12 L230 12 M230 12 L224 8 M230 12 L224 16" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-white text-sm xl:text-base">
            <li>
              <a href="#home" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#speakers" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                Speakers
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                Why?
              </a>
            </li>
            <li>
              <a href="#highlights" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                Highlights
              </a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                Schedule
              </a>
            </li>
            <li>
              <a href="#registration" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                Registration
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#F58F00] transition-colors duration-200 font-medium">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#F58F00] hover:text-[#F58F00]/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav></>
  )
}

export default Navbar