import React from 'react'
import '../css/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            Contact
          </h2>
          <div className="contact-title-underline"></div>
          <p className="contact-subtitle">
            Contact us for more information
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards-grid">
          {/* Email Card */}
          <a
            href="mailto:workshop@dipy.org"
            className="contact-card"
          >
            {/* Icon */}
            <div className="contact-icon-container">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="contact-card-title">
              Email Us
            </h3>
            <p className="contact-card-description">
              Send us an email for inquiries
            </p>
            <p className="contact-card-link">
              workshop@dipy.org
            </p>
          </a>

          {/* Forum Card */}
          <a
            href="https://github.com/dipy/dipy/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            {/* Icon */}
            <div className="contact-icon-container">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="contact-card-title">
              Join Our Forum
            </h3>
            <p className="contact-card-description">
              Connect with the community
            </p>
            <p className="contact-card-link contact-card-link-small">
              github.com/dipy/dipy/discussions
            </p>
          </a>
        </div>
      </div>

      {/* Section Separator */}
      <div className="section-separator"></div>
    </section>
  )
}

export default Contact