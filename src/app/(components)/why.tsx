import React from 'react'

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
    <section id="why" className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F58F00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F58F00]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Why Attend?
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#F58F00] rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Here are a few reasons why attending the DIPY MR Imaging workshop is essential:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-8 md:space-y-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 lg:gap-12 items-center`}>
                {/* Icon and Number Side */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="relative">
                    {/* Number Background */}
                    <div className="absolute -top-8 -left-8 text-8xl sm:text-9xl font-bold text-[#F58F00]/10 select-none">
                      {reason.number}
                    </div>
                    {/* Icon */}
                    <div className="relative bg-gradient-to-br from-[#F58F00]/20 to-[#F58F00]/5 border-2 border-[#F58F00]/30 rounded-3xl p-8 sm:p-10 md:p-12 group-hover:border-[#F58F00]/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <div className="text-6xl sm:text-7xl md:text-8xl">
                        {reason.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/3">
                  <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 group-hover:border-[#F58F00]/50 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 flex items-center gap-3">
                      <span className="text-[#F58F00]">{reason.number}.</span>
                      {reason.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    
                    {/* Special levels for reason 5 */}
                    {reason.levels && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {reason.levels.map((level, idx) => (
                          <div 
                            key={idx}
                            className="bg-[#F58F00]/10 border border-[#F58F00]/30 rounded-lg px-4 py-3 flex items-center gap-3"
                          >
                            <span className="text-[#F58F00] font-bold text-lg">{String.fromCharCode(97 + idx)})</span>
                            <span className="text-gray-800 font-medium">{level}</span>
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
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>
    </section>
  )
}

export default Why