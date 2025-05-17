import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Clinics = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoIds = [
    "n8hpGs2bNXE",
    "79cVNtpbIRM",
    "35Sdpz7P-mo",
    "An_KT8UMZ_o",
    "5tTzEAI_Y84",
    "99lD6oMq1bo",
    "4Ob0OTUH73c"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoIds.length);
    }, 8000); // 8 seconds per video
    return () => clearInterval(interval);
  }, [videoIds.length]);

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videoIds.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoIds.length);
  };

  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-0">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0578b1] text-center mb-12">
            Explore Our Dental Tourism Location
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed">
                With over 117 state-of-the-art dental clinics across India, our network ensures seamless, modern, and personalized care for implants, aligners, cosmetic makeovers, and full smile rehabilitations. From vibrant cities like Mumbai, Pune, Bangalore, and Delhi to rapidly growing destinations in Ahmedabad, Hyderabad, Kochi, and beyond, high-quality dental care is never far away. For international patients, we offer a complete care experience, including premium treatments, transparent procedures, and dedicated travel support, ensuring a smooth journey from treatment planning to post-care.
              </p>

              <div className="relative rounded-lg overflow-hidden">
                <div className="relative h-[300px] md:h-[400px]">
                  {videoIds.map((id, index) => (
                    <iframe
                      key={index}
                      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                        currentVideoIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                      title={`Dental Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ))}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                    aria-label="Previous video"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#0578b1]" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                    aria-label="Next video"
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

          <Button className="w-full lg:w-[372px] h-12 mt-8 lg:mt-[100px] mx-auto block bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 hover:bg-[#046a9d] transition duration-200">
            <span className="font-['Poppins'] font-medium text-white text-lg lg:text-[23px] tracking-[-0.92px] leading-normal">
              Request a Virtual Consultation
            </span>
            <img className="w-[29px] h-[29px]" alt="Frame" src="/math.png" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Clinics;
