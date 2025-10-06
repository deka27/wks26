'use client';

import React from 'react'
import Image from 'next/image'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Highlights = () => {
  const highlights = [
    {
      image: 'https://raw.githubusercontent.com/dipy/dipy_data/master/tractometry.png?raw=true',
      title: 'Advanced tractometry',
      description: 'Advanced techniques in tractography for diffusion MRI.'
    },
    {
      image: 'https://raw.githubusercontent.com/dipy/dipy_data/master/wrapping_bundles.png?raw=true',
      title: 'Warping of bundles',
      description: 'Techniques for warping and aligning bundles in diffusion MRI.'
    },
    {
      image: 'https://raw.githubusercontent.com/dipy/dipy_data/master/illuminating_lines.png?raw=true',
      title: 'Cinematic visualization',
      description: 'Cinematic techniques for visualizing diffusion MRI data.'
    },
    {
      image: 'https://raw.githubusercontent.com/dipy/dipy_data/master/preprocess.png?raw=true',
      title: 'State-of-the-art preprocessing',
      description: 'Advanced preprocessing techniques for diffusion MRI data.'
    },
    {
      image: 'https://raw.githubusercontent.com/dipy/dipy_data/master/brain-extraction.png?raw=true',
      title: 'Accurate brain extraction',
      description: 'Techniques for accurate brain extraction in diffusion MRI.'
    },
    {
      image: 'https://raw.githubusercontent.com/dipy/dipy_data/master/generative_approach.png?raw=true',
      title: 'Generative approaches for missing data',
      description: 'Techniques for generative modeling of missing data in diffusion MRI.'
    }
  ];

  return (
    <section id="highlights" className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F58F00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#F58F00]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Workshop Highlights
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#F58F00] rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge techniques and methodologies in diffusion MRI analysis
          </p>
        </div>

        {/* Carousel */}
        <div className="highlights-carousel">
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              perMove: 1,
              gap: '2rem',
              autoplay: true,
              interval: 4000,
              speed: 800,
              pauseOnHover: true,
              pauseOnFocus: true,
              arrows: false,
              pagination: false,
              height: 'auto',
            }}
          >
            {highlights.map((highlight, index) => (
              <SplideSlide key={index}>
                <div className="relative group">
                  {/* Card Container */}
                  <div className="bg-white overflow-hidden transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-transparent">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14 bg-white text-center">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6 group-hover:text-[#F58F00] transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>

      <style jsx global>{`
        .highlights-carousel .splide__track,
        .highlights-carousel .splide__list {
          height: auto !important;
        }
      `}</style>
    </section>
  )
}

export default Highlights