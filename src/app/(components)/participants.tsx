'use client';

import React from 'react'
import Image from 'next/image'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../css/participants.css';

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
    <section id="participants" className="participants-section">
      <div className="participants-container">
        {/* Section Header */}
        <div className="participants-header">
          <h2 className="participants-title">
            Participating Institutions
          </h2>
          <div className="participants-title-underline"></div>
          <p className="participants-subtitle">
            Join researchers and professionals from leading universities and institutions worldwide
          </p>
        </div>

        {/* Carousel Container */}
        <div className="participants-carousel-container">
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
                <div className="participants-slide-item">
                  <div className="participants-logo-wrapper">
                    <Image
                      src={`/universities/${logo}`}
                      alt={`University logo ${index}`}
                      width={150}
                      height={100}
                      className="participants-logo-image"
                    />
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Section Separator */}
      <div className="section-separator"></div>
    </section>
  )
}

export default Participants