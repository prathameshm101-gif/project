import React from "react";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="relative min-h-[653px] bg-[url(/rectangle-469.svg)] bg-cover bg-center px-4 md:px-8 lg:px-0">
      <div className="container mx-auto max-w-7xl py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-[90px] font-black text-[#0578b1] leading-tight">
              Dr. Kunal Shet
            </h1>
            <div className="font-['Beau_Rivage'] text-3xl md:text-[45px] text-[#0578b1]">
              crafting confident smiles worldwide
            </div>
            <div className="text-base md:text-lg text-[#000000bf] font-medium">
              Award-Winning Implantologist | 80,000+ Smiles Delivered | Mentor
              to 400+ Dentists
            </div>
            <Button className="w-full lg:w-[372px] h-12 mt-8 lg:mt-[100px] mx-auto block bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5">
              <span className="font-['Poppins'] font-medium text-white text-lg lg:text-[23px] tracking-[-0.92px] leading-normal">
                Request a Virtual Quote
              </span>
              <img className="w-[29px] h-[29px]" alt="Frame" src="/math.png" />
            </Button>
          </div>
          <div className="relative hidden lg:block">
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
