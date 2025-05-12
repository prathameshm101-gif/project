import React from 'react';
import { Button } from '../ui/button';

const Smile = () => {
  const statistics = [
    { percentage: '95%', label: 'Dental Satisfaction' },
    { percentage: '98%', label: 'Success Rate' },
    { percentage: '98%', label: 'Travel Satisfaction' },
  ];

  return (
    <div>
      <section className="relative bg-[url('/rectangle-473.svg')] bg-cover bg-no-repeat bg-center min-h-screen">
        <div className="container mx-auto max-w-7xl relative z-10 py-16 md:py-24 px-4 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1]">
                How Will My Smile Look?
              </h2>
              <p className="text-xl text-[#000000a6]">After my treatment with Dr. Kunal</p>
              <p className="text-lg text-[#4a4a4a]">
                Smile transformations are more than cosmetic — they change confidence, careers, and relationships.
                With Dr. Kunal Shet's advanced techniques, patients experience world-class aesthetic and functional results.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-24 h-24 rounded-full border-4 border-[#0578B1] bg-white flex items-center justify-center mx-auto">
                      <span className="text-2xl font-semibold text-[#0578b1]">{stat.percentage}</span>
                    </div>
                    <p className="mt-3 text-[#0578b1]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full lg:w-[372px] h-12 mt-8 lg:mt-[100px] mx-auto block bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5">
        <span className="font-['Poppins'] font-medium text-white text-lg lg:text-[23px] tracking-[-0.92px] leading-normal">
          Request a Virtual Quote
        </span>
        <img className="w-[29px] h-[29px]" alt="Frame" src="/math.png" />
      </Button>
            </div>
          </div>
        </div>

        {/* Optional: Right-side image */}
        <div className="absolute right-0 top-0 h-full hidden lg:block z-0">
          <img
            src="/smileTransformationSection.png"
            alt="Smile Transformation"
            className="h-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Smile;
