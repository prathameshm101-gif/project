import { useState } from "react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image section - displayed first on mobile */}
            <div className="order-1 lg:order-2 relative">
              <img
                src="/group-168.png"
                alt="Dr. Kunal Shet Portrait"
                className="w-full max-w-md mx-auto"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#0578b1]">
                  Dr. Kunal Shet
                </h3>
                <p className="text-sm text-[#0578b1]">
                  (BDS, MDS, Orthodontics & Dentofacial Orthopedics,
                  <br />
                  Implantologist (Masters in Cortical Implantology))
                </p>
              </div>
            </div>

            {/* Text section - displayed second on mobile */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1]">
                Meet Dr. Kunal Shet: The Smile Architect
              </h2>
              <div className="text-lg text-[#4a4a4a] space-y-4">
                <p>
                  Dr. Kunal Shet is a celebrated implantologist and a pioneer in
                  modern dentistry, renowned for transforming over 80,000 smiles
                  across India. With a BDS, a postgrad in Orthodontics and
                  Dentofacial Orthopedics, and a Master's in Cortical
                  Implantology from Italy, he brings unmatched expertise,
                  warmth, and visionary leadership to the field.
                </p>
                <p>
                  As the founder of Orthosquare Multispeciality Dental Clinic —
                  India's fastest-growing and award-winning dental network with
                  over 120 clinics across India — Dr. Shet is admired for his
                  precision, passion, and patient-first philosophy.
                </p>
              </div>
            </div>
          </div>
          {/* CTA Button */}
          <div className="w-full text-center">
            <Button className="mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 mx-auto hover:bg-[#046a9d] transition duration-200">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[20px] tracking-[-0.5px] leading-normal text-center p-3">
                Get In Touch With Dr. Shet via Video Call
              </span>
              <img
                className="w-[29px] h-[29px] ml-2"
                alt="Frame"
                src="/math.png"
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
