import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Clinics = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const clinicImages = [
    "/mapimg1.png",
    "/mapimg2.png",
    "/mapimg3.png",
    "/mapimg4.png",
    "/mapimg5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % clinicImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clinicImages.length]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? clinicImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % clinicImages.length);
  };

  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-0">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1] text-center mb-12">
            Explore Our Dental Tourism Location
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed">
                With over 117 state-of-the-art dental clinics across India, our network ensures seamless, modern, and personalized care for implants, aligners, cosmetic makeovers, and full smile rehabilitations. From vibrant cities like Mumbai, Pune, Bangalore, and Delhi to rapidly growing destinations in Ahmedabad, Hyderabad, Kochi, and beyond, high-quality dental care is never far away. For international patients, we offer a complete care experience, including premium treatments, transparent procedures, and dedicated travel support, ensuring a smooth journey from treatment planning to post-care.
              </p>
              <div className="relative rounded-lg overflow-hidden">
                <div className="relative h-[300px] md:h-[400px]">
                  {clinicImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Dental Clinic ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                        currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#0578b1]" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-[#0578b1]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/map.png"
                alt="India Dental Locations Map"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

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