'use client';

import React from 'react'
import Image from 'next/image'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Participants = () => {
  const universities = [
    'BUSM.jpeg',
    'camh.jpg',
    'DELLMEDSCHOOL.png',
    'DUKE.jpeg',
    'EMORY.png',
    'EPFL.png',
    'GRG.png',
    'HARVARD.png',
    'HMRI.jpeg',
    'ISE.jpeg',
    'IUPUI.png',
    'IUSM.png',
    'JHOPKINS.png',
    'LU.png',
    'MIT.png',
    'MSINAI.png',
    'MWISCONSIN.png',
    'NIBIB.jpeg',
    'PENNMED.png',
    'THEMINDRESNET.jpeg',
    'UARIZONA.png',
    'UCB.png',
    'UCHICAGO.png',
    'UCSD.png',
    'UPENN.png',
    'USHER.png',
    'UTHA.png',
    'UW.jpeg'
  ];

  return (
    <section id="participants" className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Participating Institutions
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#F58F00] rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Join researchers and professionals from leading universities and institutions worldwide
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Splide
            options={{
              type: 'loop',
              perPage: 5,
              perMove: 1,
              gap: '2rem',
              autoplay: true,
              interval: 2000,
              speed: 1000,
              pauseOnHover: true,
              pauseOnFocus: true,
              arrows: false,
              pagination: false,
              drag: 'free',
              focus: 'center',
              breakpoints: {
                1280: {
                  perPage: 4,
                },
                1024: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            {universities.map((logo, index) => (
              <SplideSlide key={index}>
                <div className="flex items-center justify-center group px-2">
                  <div className="relative w-full h-32 bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#F58F00] hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
                    <Image
                      src={`/universities/${logo}`}
                      alt={`University logo ${index}`}
                      width={150}
                      height={100}
                      className="object-contain max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>
    </section>
  )
}

export default Participants