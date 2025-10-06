import React from 'react'
import '../css/about.css';

const About = () => {
  const stats = [
    {
      number: "500+",
      label: "Participants",
      icon: "👥"
    },
    {
      number: "20+",
      label: "Sessions",
      icon: "📚"
    },
    {
      number: "15+",
      label: "Speakers",
      icon: "🎤"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-title">
            About the Workshop
          </h2>
          <div className="about-title-underline"></div>
        </div>

        {/* Content Grid */}
        <div className="about-content">
          {/* Description */}
          <div className="about-description">
            <p>
              Attention grads, researchers, physicists, radiologists, doctors and technicians interested in medical imaging! 
              Join us for an exciting online workshop hosted by DIPY. Our comprehensive program is designed to equip you 
              with the skills and knowledge needed to master the latest techniques and tools in structural and diffusion imaging.
            </p>
            
            <p>
              Our team of expert instructors will guide you through the fundamentals of diffusion theory, data pre-processing, 
              fiber tracking, and much more. You'll have the opportunity to learn from industry-leading professionals, ask 
              questions, and network with like-minded peers.
            </p>
            
            <p>
              Whether you're new to diffusion imaging or an experienced practitioner, this workshop is perfect for you. 
              Our curriculum is tailored to meet the needs of individuals at all levels of expertise. Don't miss this chance 
              to enhance your skills and advance your career.
            </p>
            
            <p>
              Register today to secure your spot in this highly anticipated event. We can't wait to see you in the event!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="about-stat-card"
              >
                <div className="about-stat-content">
                  <div className="about-stat-icon">
                    {stat.icon}
                  </div>
                  <div className="about-stat-number">
                    {stat.number}
                  </div>
                  <div className="about-stat-label">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="about-decorative-circle-left"></div>
        <div className="about-decorative-circle-right"></div>
      </div>

      {/* Section Separator */}
      <div className="section-separator"></div>
    </section>
  )
}

export default About