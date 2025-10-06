import React from 'react'
import Image from 'next/image'
import '../css/speakers.css';

const Speakers = () => {
  const speakers = [
    { name: "Dr. Sarah Johnson", role: "Professor of Neuroscience", university: "Stanford University" },
    { name: "Dr. Michael Chen", role: "Research Scientist", university: "MIT" },
    { name: "Dr. Emily Rodriguez", role: "Head of Neuroimaging", university: "Harvard Medical School" },
    { name: "Dr. James Anderson", role: "Senior Researcher", university: "Oxford University" },
    { name: "Dr. Maria Garcia", role: "Associate Professor", university: "Yale University" },
    { name: "Dr. David Kim", role: "Clinical Neurologist", university: "Johns Hopkins" },
    { name: "Dr. Lisa Thompson", role: "Lead Data Scientist", university: "UC Berkeley" },
    { name: "Dr. Robert Martinez", role: "Director of MRI Research", university: "Cambridge University" },
    { name: "Dr. Jennifer Lee", role: "Assistant Professor", university: "Columbia University" },
    { name: "Dr. William Brown", role: "Senior Lecturer", university: "University of Toronto" },
    { name: "Dr. Amanda White", role: "Research Associate", university: "Princeton University" },
    { name: "Dr. Christopher Davis", role: "Professor of Radiology", university: "UCLA" },
    { name: "Dr. Jessica Wilson", role: "Neuroscience Researcher", university: "Duke University" },
    { name: "Dr. Thomas Miller", role: "Clinical Professor", university: "Northwestern University" },
    { name: "Dr. Rachel Moore", role: "Head of Brain Imaging", university: "University of Michigan" },
    { name: "Dr. Daniel Taylor", role: "Associate Researcher", university: "Cornell University" },
    { name: "Dr. Patricia Jackson", role: "Medical Physicist", university: "University of Pennsylvania" },
    { name: "Dr. Kevin Harris", role: "Professor of Imaging", university: "Caltech" },
    { name: "Dr. Michelle Martin", role: "Senior Scientist", university: "University of Washington" },
    { name: "Dr. Brian Thompson", role: "Research Director", university: "Carnegie Mellon University" }
  ];

  return (
    <section id="speakers" className="speakers-section">
      {/* Background Decorative Elements */}
      <div className="speakers-decorative-top"></div>
      <div className="speakers-decorative-bottom"></div>

      <div className="speakers-container">
        {/* Section Header */}
        <div className="speakers-header">
          <h2 className="speakers-title">
            Our Expert Speakers
          </h2>
          <div className="speakers-title-underline"></div>
          <p className="speakers-subtitle">
            Learn from world-renowned experts in diffusion MRI and neuroimaging
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="speaker-card-wrapper"
            >
              {/* Card */}
              <div className="speaker-card">
                {/* Image Container */}
                <div className="speaker-image-container">
                  <Image
                    src="/user.jpg"
                    alt={speaker.name}
                    fill
                    className="speaker-image"
                  />
                  {/* Gradient Overlay */}
                  <div className="speaker-image-gradient"></div>
                </div>

                {/* Content */}
                <div className="speaker-content">
                  <h3 className="speaker-name">
                    {speaker.name}
                  </h3>
                  <p className="speaker-role">
                    {speaker.role}
                  </p>
                  <p className="speaker-university">
                    {speaker.university}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="speaker-decorative-corner"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="speaker-hover-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Separator */}
      <div className="section-separator"></div>
    </section>
  )
}

export default Speakers