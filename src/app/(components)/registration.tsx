'use client';

import React from 'react'
import Link from 'next/link'
import '../css/registration.css';

const Registration = () => {
  const mainPackages = [
    {
      name: 'Students, Academic, Professionals',
      price: 500,
      originalPrice: 650,
      currency: '$',
      link: 'https://iubgrg-fireform.eas.iu.edu/online/form/index/grgdw2026',
      features: [
        'One price for all',
        'Listen to the talks live',
        'Learn from the experts',
        'Basic kit for diffusion imaging',
        'Attend Study Groups',
        'Present your work',
        'Complete 5 days of workshop',
        'LinkedIn verifiable certificate'
      ],
      popular: true
    },
    {
      name: 'Returning Participants',
      price: 250,
      originalPrice: 300,
      currency: '$',
      link: 'https://iubgrg-fireform.eas.iu.edu/online/form/index/grgdw2026',
      features: [
        'Listen to the talks live',
        'Learn from the experts',
        'Basic kit for diffusion imaging',
        'Attend Study Groups',
        'Present your work',
        'Complete 5 days of workshop',
        'LinkedIn verifiable certificate'
      ],
      popular: false
    }
  ];

  const optionalPackages = [
    {
      name: 'Recording Access',
      price: 250,
      originalPrice: 350,
      currency: '$',
      link: 'https://iubgrg-fireform.eas.iu.edu/online/form/index/grgdw2026',
      features: [
        'Only accessible if you register for the workshop',
        'Access to talks during and after the workshop',
        'Access to materials during and after the workshop'
      ]
    },
    {
      name: 'Coaching Package',
      price: 500,
      originalPrice: 750,
      currency: '$',
      link: 'https://iubgrg-fireform.eas.iu.edu/online/form/index/grgdw2026',
      features: [
        'Only accessible if you register for the workshop',
        'Deep Dive into your data and project with expert guidance',
        'Up to 3 one-hour 1:1 with DIPY developers',
        'A Discount Year-long support option available'
      ]
    }
  ];

  return (
    <section id="registration" className="registration-section">
      <div className="registration-container">
        {/* Section Header */}
        <div className="registration-header">
          <h2 className="registration-title">
            Registration
          </h2>
          <div className="registration-title-underline"></div>
          <p className="registration-subtitle">
            Get the Early Birds Discount before 3rd January 2026
          </p>
        </div>

        {/* Main Packages */}
        <div className="registration-main-packages">
          <div className="registration-section-header">
            <h3 className="registration-section-title">
              One Price for all to get you started
            </h3>
            <p className="registration-section-description">
              Get the most of the workshop with easy pricing, no hidden fees.
            </p>
          </div>

          <div className="registration-packages-grid">
            {mainPackages.map((pkg, index) => (
              <div
                key={index}
                className={`registration-package-card ${pkg.popular ? 'popular' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="registration-popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <div className="registration-package-content">
                  {/* Package Name */}
                  <h4 className="registration-package-name">
                    {pkg.name}
                  </h4>

                  {/* Pricing */}
                  <div className="registration-pricing">
                    <div className="registration-price-wrapper">
                      <span className="registration-price">
                        {pkg.currency}{pkg.price}
                      </span>
                      <span className="registration-original-price">
                        {pkg.currency}{pkg.originalPrice}
                      </span>
                    </div>
                    <div className="registration-savings">
                      Save {pkg.currency}{pkg.originalPrice - pkg.price} with Early Bird
                    </div>
                  </div>

                  {/* Features - Grows to fill space */}
                  <ul className="registration-features-list">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="registration-feature-item">
                        <div className="registration-feature-icon">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="registration-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Always at bottom */}
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`registration-cta-button ${pkg.popular ? 'popular' : ''}`}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Packages */}
        <div className="registration-optional-packages">
          <div className="registration-section-header">
            <h3 className="registration-section-title">
              Optional Packages
            </h3>
            <p className="registration-section-description">
              Need more flexibility? Check out our optional packages.
            </p>
          </div>

          <div className="registration-packages-grid">
            {optionalPackages.map((pkg, index) => (
              <div
                key={index}
                className="registration-package-card"
              >
                <div className="registration-package-content">
                  {/* Package Name */}
                  <h4 className="registration-package-name">
                    {pkg.name}
                  </h4>

                  {/* Pricing */}
                  <div className="registration-pricing">
                    <div className="registration-price-wrapper">
                      <span className="registration-price">
                        {pkg.currency}{pkg.price}
                      </span>
                      <span className="registration-original-price">
                        {pkg.currency}{pkg.originalPrice}
                      </span>
                    </div>
                    <div className="registration-savings">
                      Save {pkg.currency}{pkg.originalPrice - pkg.price} with Early Bird
                    </div>
                  </div>

                  {/* Features - Grows to fill space */}
                  <ul className="registration-features-list">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="registration-feature-item">
                        <div className="registration-feature-icon">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="registration-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Always at bottom */}
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="registration-cta-button"
                    style={{
                      background: 'linear-gradient(to right, rgba(245, 143, 0, 0.1), rgba(255, 140, 0, 0.1))',
                      color: '#F58F00',
                      border: '2px solid #F58F00'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #F58F00, #FF8C00)';
                      e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, rgba(245, 143, 0, 0.1), rgba(255, 140, 0, 0.1))';
                      e.currentTarget.style.color = '#F58F00';
                    }}
                  >
                    Add to Registration
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="section-separator"></div>
    </section>
  )
}

export default Registration