'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability - reduced opacity for more vibrant images */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 md:p-12 lg:p-16 max-w-[85%] mx-auto">
        {/* Top Left - Title and Date */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-2xl">
            DIPY ONLINE WORKSHOP
          </h1>
          <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-[#F58F00] rounded-full mb-3 md:mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl pt-2 text-[#F58F00] font-semibold drop-shadow-lg">
            17th to 21st March 2026 <br /> Bloomington, Indiana
          </p>
        </div>

        {/* Bottom Left - Registration Card */}
        <div className="mb-4 sm:mb-6 md:mb-12">
          <div className="bg-black/40 backdrop-blur-lg border-2 border-[#F58F00]/50 rounded-2xl p-4 sm:p-6 md:p-8 max-w-full sm:max-w-md lg:max-w-lg shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              Registrations are Open
            </h3>
            <p className="text-[#F58F00] mb-4 sm:mb-6 text-sm sm:text-base">Time left to register:</p>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="text-center">
                <div className="bg-[#F58F00]/20 backdrop-blur border border-[#F58F00]/40 rounded-lg p-2 sm:p-3 mb-1 sm:mb-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F58F00]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium">DAYS</span>
              </div>
              <div className="text-center">
                <div className="bg-[#F58F00]/20 backdrop-blur border border-[#F58F00]/40 rounded-lg p-2 sm:p-3 mb-1 sm:mb-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F58F00]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium">HOURS</span>
              </div>
              <div className="text-center">
                <div className="bg-[#F58F00]/20 backdrop-blur border border-[#F58F00]/40 rounded-lg p-2 sm:p-3 mb-1 sm:mb-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F58F00]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium">MINS</span>
              </div>
              <div className="text-center">
                <div className="bg-[#F58F00]/20 backdrop-blur border border-[#F58F00]/40 rounded-lg p-2 sm:p-3 mb-1 sm:mb-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F58F00]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium">SECS</span>
              </div>
            </div>

            {/* Register Button */}
            <a
              href="#registration"
              className="block w-full bg-[#F58F00] hover:bg-[#F58F00]/90 text-black font-bold text-center py-3 sm:py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#F58F00]/50 text-sm sm:text-base md:text-lg"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-[#F58F00] w-6 sm:w-8'
                : 'bg-[#F58F00]/50 hover:bg-[#F58F00]/75 w-2 sm:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;