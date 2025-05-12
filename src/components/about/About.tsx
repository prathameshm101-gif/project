import React from 'react'

const About = () => {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1]">
                Meet Dr. Kunal Shet: The Smile Architect
              </h2>
              <div className="text-lg text-[#4a4a4a] space-y-4">
                <p>
                  Dr. Kunal Shet is a celebrated implantologist and a pioneer in modern dentistry, renowned for transforming over 80,000 smiles across India. With a BDS, a postgrad in Orthodontics and Dentofacial Orthopedics, and a Master's in Cortical Implantology from Italy, he brings unmatched expertise, warmth, and visionary leadership to the field.
                </p>
                <p>
                  As the founder of Orthosquare Multispeciality Dental Clinic — India's fastest-growing and award-winning dental network with over 120 clinics across India — Dr. Shet is admired for his precision, passion, and patient-first philosophy.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/group-168.png"
                alt="Dr. Kunal Shet Portrait"
                className="w-full max-w-md mx-auto"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#0578b1]">Dr. Kunal Shet</h3>
                <p className="text-sm text-[#0578b1]">
                  (BDS, MDS, Orthodontics & Dentofacial Orthopedics,
                  <br />
                  Implantologist (Masters in Cortical Implantology))
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
