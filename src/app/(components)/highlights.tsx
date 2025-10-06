'use client';

import React from 'react'
import Image from 'next/image'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../css/highlights.css';

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
    <section id="highlights" className="highlights-section">
      {/* Background Decorative Elements */}
      <div className="highlights-decorative-top"></div>
      <div className="highlights-decorative-bottom"></div>

      <div className="highlights-container">
        {/* Section Header */}
        <div className="highlights-header">
          <h2 className="highlights-title">
            Workshop Highlights
          </h2>
          <div className="highlights-title-underline"></div>
          <p className="highlights-subtitle">
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
                <div className="highlights-slide-wrapper">
                  {/* Card Container */}
                  <div className="highlights-card-container">
                    {/* Image Container */}
                    <div className="highlights-image-container">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="highlights-image"
                      />
                    </div>

                    {/* Content */}
                    <div className="highlights-content">
                      <h3 className="highlights-content-title">
                        {highlight.title}
                      </h3>
                      <p className="highlights-content-description">
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
      <div className="section-separator"></div>

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