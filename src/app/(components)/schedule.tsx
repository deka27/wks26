'use client';

import React from 'react'
import Image from 'next/image'
import '../css/schedule.css';

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
    <section id="schedule" className="schedule-section">
      <div className="schedule-container">
        {/* Section Header */}
        <div className="schedule-header">
          <h2 className="schedule-title">
            Workshop Schedule
          </h2>
          <div className="schedule-title-underline"></div>
        </div>

        {/* Schedule Grid - 2 columns */}
        <div className="schedule-grid">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="schedule-day-column">
              {/* Day Header - Improved visual */}
              <div className="schedule-day-header">
                <div className="schedule-day-header-inner">
                  <h3 className="schedule-day-title">
                    {day.day}
                  </h3>
                  <div className="schedule-day-underline"></div>
                  <p className="schedule-day-subtitle">
                    {day.subtitle}
                  </p>
                  <p className="schedule-day-date">
                    {day.date}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="schedule-timeline">
                {/* Vertical line */}
                <div className="schedule-timeline-line"></div>

                {/* Sessions */}
                {day.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="schedule-session">
                    {session.title === 'Lunch Break' ? (
                      <div className="schedule-lunch-break">
                        <div className="schedule-lunch-line"></div>
                        <div className="schedule-lunch-overlay">
                          <span className="schedule-lunch-text">
                            Lunch Break
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Timeline dot - positioned outside card */}
                        <div className="schedule-session-dot"></div>

                        {/* Session card */}
                        <div className="schedule-session-card">
                          {/* Session title */}
                          <h4 className="schedule-session-title">
                            {session.title}
                          </h4>
                          
                          {/* Time */}
                          <p className="schedule-session-time">
                            {session.time}
                          </p>

                          {/* Speaker with avatar */}
                          {session.speaker && (
                            <div className="schedule-speaker-container">
                              {/* Orange badge with circular cutout for avatar */}
                              <div className="schedule-speaker-badge">
                                {/* Avatar positioned to overlap badge */}
                                <div className="schedule-speaker-avatar">
                                  <Image
                                    src="/user.jpg"
                                    alt={session.speaker}
                                    fill
                                  />
                                </div>
                                {/* Speaker name */}
                                <span className="schedule-speaker-name">
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
      <div className="section-separator"></div>
    </section>
  )
}

export default Schedule