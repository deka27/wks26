import React from 'react'
import Image from "next/image";
import '../css/navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
          {/* Logo and Name */}
          <div className="navbar-logo-section">
            <Image 
              src="/dipy-logo.png" 
              alt="DIPY Logo" 
              width={32} 
              height={32}
              className="navbar-logo-image"
            />
            <span className="navbar-logo-text">DIPY</span>
          </div>

          {/* Decorative Arrow connecting logo to nav */}
          <div className="navbar-arrow">
            <svg viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <ul className="navbar-nav">
            <li>
              <a href="#home" className="navbar-nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#speakers" className="navbar-nav-item">
                Speakers
              </a>
            </li>
            <li>
              <a href="#why" className="navbar-nav-item">
                Why?
              </a>
            </li>
            <li>
              <a href="#highlights" className="navbar-nav-item">
                Highlights
              </a>
            </li>
            <li>
              <a href="#schedule" className="navbar-nav-item">
                Schedule
              </a>
            </li>
            <li>
              <a href="#registration" className="navbar-nav-item">
                Registration
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-nav-item">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="navbar-mobile-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav></>
  )
}

export default Navbar