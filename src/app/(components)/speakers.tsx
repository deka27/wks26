import React from 'react'
import Image from 'next/image'

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
    <section id="speakers" className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F58F00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F58F00]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Expert Speakers
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#F58F00] rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Learn from world-renowned experts in diffusion MRI and neuroimaging
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative flex"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border-2 border-white/10 rounded-2xl overflow-hidden hover:border-[#F58F00]/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F58F00]/20 w-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden flex-shrink-0">
                  <Image
                    src="/user.jpg"
                    alt={speaker.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-5 md:p-6 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm flex-grow flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#F58F00] transition-colors duration-300 line-clamp-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#F58F00] font-semibold mb-1 line-clamp-2">
                    {speaker.role}
                  </p>
                  <p className="text-sm md:text-base text-gray-400 line-clamp-2">
                    {speaker.university}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#F58F00]/10 rounded-bl-full blur-xl group-hover:bg-[#F58F00]/20 transition-all duration-300"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F58F00]/0 via-[#F58F00]/20 to-[#F58F00]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58F00] to-transparent"></div>
    </section>
  )
}

export default Speakers