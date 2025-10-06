'use client';

import React from 'react'
import Image from 'next/image'

const Schedule = () => {
  const schedule = [
    {
      day: 'Day 1',
      subtitle: 'Preprocessing',
      date: '2026-03-17',
      sessions: [
        { time: '09:00 - 09:45', title: 'Workshop Overview', speaker: 'Eleftherios Garyfallidis' },
        { time: '10:00 - 10:45', title: 'Keynote: Diffusion MRI for characterizing development, disease and injury.', speaker: 'Simon Warfield' },
        { time: '11:00 - 11:45', title: 'Introduction to DIPY Interfaces', speaker: 'Serge Koudoro' },
        { time: '12:00 - 12:45', title: 'Lunch Break', speaker: '' },
        { time: '13:00 - 13:45', title: 'DeepN4: Learning N4ITK Bias Field Correction for T1-weighted Images', speaker: 'Adam Saunders' },
        { time: '14:00 - 14:45', title: 'Brain Extraction and Tissue Classification', speaker: 'Jong Sung Park' },
        { time: '15:00 - 15:45', title: 'Image-based Registration', speaker: 'Serge Koudoro' },
        { time: '16:00 - 16:45', title: 'Distortion Correction', speaker: 'Sreekar Chigurupati' },
        { time: '17:00 - 17:45', title: 'Denoising with Patch2Self3', speaker: 'Shreyas Fadnavis' },
        { time: '18:00 - 18:30', title: 'Study Group Sessions', speaker: 'All' },
      ]
    },
    {
      day: 'Day 2',
      subtitle: 'Reconstruction',
      date: '2026-03-18',
      sessions: [
        { time: '09:00 - 09:45', title: 'Keynote: TBA', speaker: 'TBA' },
        { time: '10:00 - 10:45', title: 'Guided Practice', speaker: 'Serge Koudoro' },
        { time: '11:00 - 11:45', title: 'Diffusion Tensor and Kurtosis Imaging', speaker: 'Atharva Shah' },
        { time: '12:00 - 12:45', title: 'Lunch Break', speaker: '' },
        { time: '13:00 - 13:45', title: 'Spherical Harmonic Reconstruction', speaker: 'Eleftherios Garyfallidis' },
        { time: '14:00 - 14:45', title: 'Model-based Quantification of Microstructural Properties from Diffusion MRI', speaker: 'Rafael Henriques' },
        { time: '15:00 - 15:45', title: 'Advanced Diffusion MRI Sequences for Microstructural Quantification', speaker: 'Rafael Henriques' },
        { time: '16:00 - 16:45', title: 'Fractal Dimensions for Segmentation', speaker: 'Aziza Saber Jabdaragh' },
        { time: '17:00 - 17:45', title: 'WebGPU Mayhem', speaker: 'Maharshi Gor' },
        { time: '18:00 - 18:30', title: 'E-Posters (Present your work)', speaker: 'All' },
      ]
    },
    {
      day: 'Day 3',
      subtitle: 'Tractography',
      date: '2026-03-19',
      sessions: [
        { time: '09:00 - 09:45', title: 'TBA', speaker: 'TBA' },
        { time: '10:00 - 10:45', title: 'Introduction to computational neuroanatomy', speaker: 'Wei Tang' },
        { time: '11:00 - 11:45', title: 'Tractography: Principles, Methods and the New Fast Tracking API', speaker: 'Gabriel Girard' },
        { time: '12:00 - 12:45', title: 'Lunch Break', speaker: '' },
        { time: '13:00 - 13:45', title: 'Keynote: TBA', speaker: 'TBA' },
        { time: '14:00 - 14:45', title: 'Tractography Segmentation', speaker: 'Mohamed Abouagour' },
        { time: '15:00 - 15:45', title: 'Tractography-based Registration', speaker: 'Bramsh Qamar Chandio' },
        { time: '16:00 - 16:45', title: 'Guided Practice', speaker: 'Serge Koudoro' },
        { time: '17:00 - 17:45', title: 'E-Posters', speaker: 'All' },
      ]
    },
    {
      day: 'Day 4',
      subtitle: 'Tractometry',
      date: '2026-03-20',
      sessions: [
        { time: '09:00 - 09:45', title: 'Keynote: TBA', speaker: 'TBA' },
        { time: '10:00 - 10:45', title: 'Bundle Analytics', speaker: 'Bramsh Qamar Chandio' },
        { time: '11:00 - 11:45', title: 'Guided Practice', speaker: 'Bramsh Qamar Chandio' },
        { time: '12:00 - 12:45', title: 'Lunch Break', speaker: '' },
        { time: '13:00 - 13:45', title: 'New Frontiers in Bundle Analytics', speaker: 'Ariel Rokem' },
        { time: '14:00 - 14:45', title: 'Deep Learning for Tractography', speaker: 'Jon Haitz Legarreta' },
        { time: '15:00 - 15:45', title: 'Keynote : TBA', speaker: 'TBA' },
        { time: '16:00 - 16:45', title: 'TBA', speaker: 'TBA' },
        { time: '17:00 - 17:45', title: 'Study Group Sessions', speaker: 'All' },
      ]
    },
    {
      day: 'Day 5',
      subtitle: 'Mixed Topics',
      date: '2026-03-21',
      sessions: [
        { time: '09:00 - 09:45', title: 'Keynote: TBA', speaker: 'TBA' },
        { time: '10:00 - 10:45', title: 'Demo Session', speaker: 'All' },
        { time: '11:00 - 11:45', title: 'Keynote: TBA', speaker: 'TBA' },
        { time: '12:00 - 12:45', title: 'Lunch Break', speaker: '' },
        { time: '13:00 - 13:45', title: 'TBA', speaker: 'TBA' },
        { time: '14:00 - 14:45', title: 'TBA', speaker: 'TBA' },
        { time: '15:00 - 15:45', title: 'TBA', speaker: 'TBA' },
        { time: '16:00 - 16:45', title: 'Final Assembly', speaker: 'TBA' },
      ]
    }
  ];

  return (
    <section id="schedule" className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Workshop Schedule
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#F58F00] rounded-full mx-auto"></div>
        </div>

        {/* Schedule Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              {/* Day Header - Improved visual */}
              <div className="text-center mb-10">
                <div className="inline-block">
                  <h3 className="text-3xl font-bold text-[#F58F00] mb-2 tracking-tight">
                    {day.day}
                  </h3>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent mb-2"></div>
                  <p className="text-lg text-gray-700 font-semibold uppercase tracking-wider">
                    {day.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 font-medium mt-1">
                    {day.date}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-14">
                {/* Vertical line */}
                <div className="absolute left-[18px] top-0 bottom-0 w-[3px] bg-[#ebebeb] rounded-full"></div>

                {/* Sessions */}
                {day.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="relative mb-2">
                    {session.title === 'Lunch Break' ? (
                      <div className="relative my-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-white px-4 text-sm text-gray-500 font-normal">
                            Lunch Break
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Timeline dot - positioned outside card */}
                        <div className="absolute left-[-42px] top-5 w-[11px] h-[11px] rounded-full bg-[#F58F00] z-10"></div>

                        {/* Session card */}
                        <div className="bg-white rounded-xl p-5 mb-2 shadow-[0_0.25rem_1rem_0_rgba(47,91,234,0.125)] border-2 border-[#ebebeb] hover:border-[#F58F00] transition-all duration-500">
                          {/* Session title */}
                          <h4 className="text-[17px] font-semibold text-black mb-2.5 leading-tight tracking-tight">
                            {session.title}
                          </h4>
                          
                          {/* Time */}
                          <p className="text-[13px] text-gray-500 font-medium mb-4 tracking-wide uppercase">
                            {session.time}
                          </p>

                          {/* Speaker with avatar */}
                          {session.speaker && (
                            <div className="flex items-center">
                              {/* Orange badge with circular cutout for avatar */}
                              <div className="relative flex items-center h-[32px] bg-[#F58F00] rounded-full opacity-90 pr-4 pl-12">
                                {/* Avatar positioned to overlap badge */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full overflow-hidden border-[5px] border-white shadow-md">
                                  <Image
                                    src="/user.jpg"
                                    alt={session.speaker}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                {/* Speaker name */}
                                <span className="text-white text-[14px] font-medium whitespace-nowrap">
                                  {session.speaker}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>
    </section>
  )
}

export default Schedule