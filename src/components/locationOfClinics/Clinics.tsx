import { Button } from "../ui/button";
import { useState } from "react";

const Clinics = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-0">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1] text-center mb-12">
            Explore Our Dental Tourism Location
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="relative">
                <p
                  className={`text-lg leading-relaxed md:max-w-3xl ${
                    expanded ? "" : "line-clamp-3"
                  } md:line-clamp-none`}
                >
                  With over 117 state-of-the-art dental clinics across India,
                  our network ensures seamless, modern, and personalized care
                  for implants, aligners, cosmetic makeovers, and full smile
                  rehabilitations. From vibrant cities like Mumbai, Pune,
                  Bangalore, and Delhi to rapidly growing destinations in
                  Ahmedabad, Hyderabad, Kochi, and beyond, high-quality dental
                  care is never far away. For international patients, we offer a
                  complete care experience, including premium treatments,
                  transparent procedures, and dedicated travel support, ensuring
                  a smooth journey from treatment planning to post-care.
                </p>

                {/* View More / Less - only on mobile */}
                <button
                  className="mt-2 text-[#0578b1] font-medium md:hidden"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  {expanded ? "View Less" : "View More"}
                </button>
              </div>
              <div>
                <img
                  src="/mapimg1.png"
                  alt="Dental Clinic"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex items-center justify-center">
              <img
                src="/map.png"
                alt="India Dental Locations Map"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* CTA Button */}
          <Button className="w-full lg:w-[372px] h-12 mt-8 lg:mt-[100px] mx-auto block bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5">
            <span className="font-['Poppins'] font-medium text-white text-lg lg:text-[23px] tracking-[-0.92px] leading-normal">
              Request a Virtual Quote
            </span>
            <img className="w-[29px] h-[29px]" alt="Frame" src="/math.png" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Clinics;
