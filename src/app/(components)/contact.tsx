import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Contact
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#F58F00] rounded-full mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            Contact us for more information
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:workshop@dipy.org"
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border-2 border-white/10 hover:border-[#F58F00] shadow-sm hover:shadow-xl hover:shadow-[#F58F00]/20 transition-all duration-300 p-10 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 mb-6 bg-[#F58F00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F58F00] transition-all duration-300">
              <svg className="w-8 h-8 text-[#F58F00] group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-3">
              Email Us
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Send us an email for inquiries
            </p>
            <p className="text-[#F58F00] font-semibold text-lg">
              workshop@dipy.org
            </p>
          </a>

          {/* Forum Card */}
          <a
            href="https://github.com/dipy/dipy/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border-2 border-white/10 hover:border-[#F58F00] shadow-sm hover:shadow-xl hover:shadow-[#F58F00]/20 transition-all duration-300 p-10 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 mb-6 bg-[#F58F00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F58F00] transition-all duration-300">
              <svg className="w-8 h-8 text-[#F58F00] group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-3">
              Join Our Forum
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Connect with the community
            </p>
            <p className="text-[#F58F00] font-semibold text-sm">
              github.com/dipy/dipy/discussions
            </p>
          </a>
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>
    </section>
  )
}

export default Contact