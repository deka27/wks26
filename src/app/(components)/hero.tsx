'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../css/hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/bg1.png', '/bg2.jpeg', '/bg3.jpeg'];

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Countdown timer (example: 15 days, 10 hours, 30 minutes, 45 seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Carousel */}
      <div className="hero-background-container">
        {images.map((img, index) => (
          <div
            key={img}
            className={`hero-background-image ${
              index === currentImageIndex ? 'active' : ''
            }`}
          >
            <Image
              src={img}
              alt={`Background ${index + 1}`}
              fill
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability - reduced opacity for more vibrant images */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Top Left - Title and Date */}
        <div className="hero-title-section">
          <h1 className="hero-title">
            DIPY ONLINE WORKSHOP
          </h1>
          <div className="hero-title-underline"></div>
          <p className="hero-subtitle">
            17th to 21st March 2026 <br /> Bloomington, Indiana
          </p>
        </div>

        {/* Bottom Left - Registration Card */}
        <div className="hero-registration-container">
          <div className="hero-registration-card">
            <h3 className="hero-registration-title">
              Registrations are Open
            </h3>
            <p className="hero-registration-subtitle">Time left to register:</p>
            
            {/* Countdown Timer */}
            <div className="hero-countdown-grid">
              <div className="hero-countdown-item">
                <div className="hero-countdown-box">
                  <span className="hero-countdown-number">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                </div>
                <span className="hero-countdown-label">DAYS</span>
              </div>
              <div className="hero-countdown-item">
                <div className="hero-countdown-box">
                  <span className="hero-countdown-number">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <span className="hero-countdown-label">HOURS</span>
              </div>
              <div className="hero-countdown-item">
                <div className="hero-countdown-box">
                  <span className="hero-countdown-number">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <span className="hero-countdown-label">MINS</span>
              </div>
              <div className="hero-countdown-item">
                <div className="hero-countdown-box">
                  <span className="hero-countdown-number">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <span className="hero-countdown-label">SECS</span>
              </div>
            </div>

            {/* Register Button */}
            <a
              href="#registration"
              className="hero-register-button"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`hero-carousel-indicator ${
              index === currentImageIndex ? 'active' : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;