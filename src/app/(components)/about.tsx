import React from 'react'

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
    <section id="about" className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            About the Workshop
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#F58F00] rounded-full mx-auto mb-6 md:mb-8"></div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col items-center space-y-12 md:space-y-16">
          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Attention grads, researchers, physicists, radiologists, doctors and technicians interested in medical imaging! 
              Join us for an exciting online workshop hosted by DIPY. Our comprehensive program is designed to equip you 
              with the skills and knowledge needed to master the latest techniques and tools in structural and diffusion imaging.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Our team of expert instructors will guide you through the fundamentals of diffusion theory, data pre-processing, 
              fiber tracking, and much more. You'll have the opportunity to learn from industry-leading professionals, ask 
              questions, and network with like-minded peers.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Whether you're new to diffusion imaging or an experienced practitioner, this workshop is perfect for you. 
              Our curriculum is tailored to meet the needs of individuals at all levels of expertise. Don't miss this chance 
              to enhance your skills and advance your career.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center font-semibold">
              Register today to secure your spot in this highly anticipated event. We can't wait to see you in the event!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#F58F00]/10 to-white backdrop-blur-sm border-2 border-[#F58F00]/30 rounded-2xl p-6 md:p-8 hover:border-[#F58F00]/60 hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#F58F00]">
                    {stat.number}
                  </div>
                  <div className="text-lg md:text-xl text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#F58F00]/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#F58F00]/20 rounded-full blur-sm"></div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>
    </section>
  )
}

export default About