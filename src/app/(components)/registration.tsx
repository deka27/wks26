'use client';

import React from 'react'
import Link from 'next/link'

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
    <section id="registration" className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Registration
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#F58F00] rounded-full mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Get the Early Birds Discount before 3rd January 2026
          </p>
        </div>

        {/* Main Packages */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-3">
              One Price for all to get you started
            </h3>
            <p className="text-lg text-gray-600">
              Get the most of the workshop with easy pricing, no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mainPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 flex flex-col ${
                  pkg.popular 
                    ? 'border-[#F58F00] shadow-lg' 
                    : 'border-gray-200 hover:border-[#F58F00] shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F58F00] text-black text-xs font-bold px-6 py-2 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  {/* Package Name */}
                  <h4 className="text-2xl font-bold text-black mb-6 min-h-[60px] flex items-center">
                    {pkg.name}
                  </h4>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-5xl font-bold text-black">
                        {pkg.currency}{pkg.price}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {pkg.currency}{pkg.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-[#F58F00] font-semibold">
                      Save {pkg.currency}{pkg.originalPrice - pkg.price} with Early Bird
                    </div>
                  </div>

                  {/* Features - Grows to fill space */}
                  <ul className="space-y-3 mb-8 pb-8 border-b border-gray-200 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#F58F00] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Always at bottom */}
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#F58F00] via-[#FF8C00] to-[#FFA500] text-black hover:shadow-xl hover:scale-105'
                        : 'bg-gradient-to-r from-gray-900 to-black text-white hover:from-gray-800 hover:to-gray-900'
                    }`}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Packages */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Optional Packages
            </h3>
            <p className="text-lg text-gray-600">
              Need more flexibility? Check out our optional packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {optionalPackages.map((pkg, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border-2 border-gray-200 hover:border-[#F58F00] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  {/* Package Name */}
                  <h4 className="text-2xl font-bold text-black mb-6">
                    {pkg.name}
                  </h4>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-5xl font-bold text-black">
                        {pkg.currency}{pkg.price}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {pkg.currency}{pkg.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-[#F58F00] font-semibold">
                      Save {pkg.currency}{pkg.originalPrice - pkg.price} with Early Bird
                    </div>
                  </div>

                  {/* Features - Grows to fill space */}
                  <ul className="space-y-3 mb-8 pb-8 border-b border-gray-200 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#F58F00] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Always at bottom */}
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 rounded-xl font-bold text-base border-2 border-[#F58F00] bg-gradient-to-r from-[#F58F00]/10 to-[#FF8C00]/10 text-[#F58F00] hover:from-[#F58F00] hover:to-[#FF8C00] hover:text-black transition-all duration-300"
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
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>
    </section>
  )
}

export default Registration