import React from "react";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="relative min-h-[653px] bg-[url(/rectangle-469.svg)] bg-cover bg-center px-4 md:px-8 lg:px-0">
      <div className="container mx-auto max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 mt-[20%]">
            <h1 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px] font-black text-[#0578b1] leading-tight whitespace-nowrap">
              Dr. Kunal Shet
            </h1>

            <div className="font-['Beau_Rivage'] text-3xl md:text-[45px] text-[#0578b1]">
              crafting confident smiles worldwide
            </div>
            <div className="text-base md:text-lg text-[#000000bf] font-medium">
              Award-Winning Implantologist | 80,000+ Smiles Delivered | Mentor
              to 400+ Dentists
            </div>
            <Button className="w-full h-12 mt-8 lg:mt-[100px] bg-[#ff7f50] rounded-[5px] flex items-center justify-center gap-2 px-3 sm:px-4 overflow-hidden">
  <div className="min-w-0 flex items-center gap-2">
    <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[20px] tracking-[-0.5px] leading-normal text-center">
      Schedule Your Free Video Consultation
    </span>
    <img
      className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] flex-shrink-0"
      alt="Arrow Icon"
      src="/math.png"
    />
  </div>
</Button>

          </div>
          {/* Right Column */}
          <div className="relative ">
            <img
              src="/aasiya--2--1.png"
              alt="Dr. Kunal Shet"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
