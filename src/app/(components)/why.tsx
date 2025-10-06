import React from 'react'
import '../css/why.css';

const Why = () => {
  const reasons = [
    {
      number: "01",
      title: "Hands-on Experience",
      description: "The workshop offers a hands-on learning experience, which is essential for learning how to use MR imaging techniques and software effectively. The practical sessions provide attendees with the opportunity to work on real-world problems and gain valuable experience in the field.",
      icon: "🔬"
    },
    {
      number: "02",
      title: "Expert Instructors",
      description: "The workshop is led by expert instructors who have extensive experience in MR imaging and DIPY software. They provide valuable insights and expertise, which is essential for staying up-to-date with the latest advancements in this rapidly evolving field.",
      icon: "👨‍🏫"
    },
    {
      number: "03",
      title: "Networking Opportunities",
      description: "The workshop provides an excellent opportunity for attendees to network with other professionals in the field. This can lead to collaborations and the sharing of knowledge and expertise, which is critical for advancing research in the field.",
      icon: "🤝"
    },
    {
      number: "04",
      title: "Access to the Latest Technology",
      description: "The DIPY workshop provides access to the latest software for analyzing and processing MR imaging data. This ensures that attendees are working with the most advanced technology available, which can lead to more accurate and efficient analysis of data.",
      icon: "💻"
    },
    {
      number: "05",
      title: "Deep Understanding of the Theory",
      description: "The topics covered need a solid understanding of the models, theory and math. For this reason, all tutorials will be provided at four levels:",
      icon: "📊",
      levels: [
        "Theory",
        "Algorithms/Methods",
        "Code/Interfaces",
        "Clinical Application Examples"
      ]
    }
  ];

  return (
    <section id="why" className="why-section">
      {/* Background Decorative Elements */}
      <div className="why-decorative-top"></div>
      <div className="why-decorative-bottom"></div>

      <div className="why-container">
        {/* Section Header */}
        <div className="why-header">
          <h2 className="why-title">
            Why Attend?
          </h2>
          <div className="why-title-underline"></div>
          <p className="why-subtitle">
            Here are a few reasons why attending the DIPY MR Imaging workshop is essential:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="why-reasons-container">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="why-reason-row"
            >
              <div className={`why-reason-row ${index % 2 === 0 ? '' : 'reverse'}`}>
                {/* Icon and Number Side */}
                <div className="why-icon-side">
                  <div className="why-icon-container">
                    {/* Number Background */}
                    <div className="why-number-background">
                      {reason.number}
                    </div>
                    {/* Icon */}
                    <div className="why-icon-box">
                      <div className="why-icon">
                        {reason.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="why-content-side">
                  <div className="why-content-card">
                    <h3 className="why-content-title">
                      <span className="why-content-number">{reason.number}.</span>
                      {reason.title}
                    </h3>
                    <p className="why-content-description">
                      {reason.description}
                    </p>
                    
                    {/* Special levels for reason 5 */}
                    {reason.levels && (
                      <div className="why-levels-grid">
                        {reason.levels.map((level, idx) => (
                          <div 
                            key={idx}
                            className="why-level-item"
                          >
                            <span className="why-level-letter">{String.fromCharCode(97 + idx)})</span>
                            <span className="why-level-text">{level}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
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

export default Why