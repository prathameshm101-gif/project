import React, { useState } from "react";

const BeforAfter = () => {
  const transformations = [
    {
      title: "Complete Smile Makeover",
      before:
        "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg",
      after:
        "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg",
      type: "Cosmetic Dentistry",
    },
    {
      title: "Dental Implants",
      before:
        "https://images.pexels.com/photos/6975475/pexels-photo-6975475.jpeg",
      after:
        "https://images.pexels.com/photos/5069438/pexels-photo-5069438.jpeg",
      type: "Implantology",
    },
    {
      title: "Teeth Whitening",
      before:
        "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
      after:
        "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg",
      type: "Cosmetic",
    },
    {
      title: "Orthodontic Treatment",
      before:
        "https://images.pexels.com/photos/4270365/pexels-photo-4270365.jpeg",
      after:
        "https://images.pexels.com/photos/4270366/pexels-photo-4270366.jpeg",
      type: "Orthodontics",
    },
    {
      title: "Veneers",
      before:
        "https://images.pexels.com/photos/4270367/pexels-photo-4270367.jpeg",
      after:
        "https://images.pexels.com/photos/4270368/pexels-photo-4270368.jpeg",
      type: "Cosmetic",
    },
    {
      title: "Full Mouth Rehabilitation",
      before:
        "https://images.pexels.com/photos/9158650/pexels-photo-9158650.jpeg",
      after:
        "https://images.pexels.com/photos/2531737/pexels-photo-2531737.jpeg",
      type: "Restorative",
    },
  ];

  const [sliderPositions, setSliderPositions] = useState<{
    [key: number]: number;
  }>(Object.fromEntries(transformations.map((_, index) => [index, 50])));
  const [isDragging, setIsDragging] = useState<{ [key: number]: boolean }>(
    Object.fromEntries(transformations.map((_, index) => [index, false]))
  );

  const handleMouseDown = (index: number) => {
    setIsDragging((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseUp = (index: number) => {
    setIsDragging((prev) => ({ ...prev, [index]: false }));
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (isDragging[index]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newPosition = (x / rect.width) * 100;
      setSliderPositions((prev) => ({
        ...prev,
        [index]: Math.min(Math.max(newPosition, 0), 100),
      }));
    }
  };

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPositions((prev) => ({
      ...prev,
      [index]: Math.min(Math.max(newPosition, 0), 100),
    }));
  };

  React.useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(
        Object.fromEntries(transformations.map((_, index) => [index, false]))
      );
    };

    document.addEventListener("mouseup", handleMouseUpGlobal);
    return () => {
      document.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, []);

  return (
    <section className="bg-[url(/rectangle-474.svg)] bg-cover bg-center py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-0">
        <div className="relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1] text-center mb-12 lg:mb-24">
            Dr. Kunal Shet's Transformation Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <div key={index} className="w-full">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-[#0578b1]">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </div>

                <div
                  className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-lg shadow-lg cursor-ew-resize touch-none"
                  onMouseDown={() => handleMouseDown(index)}
                  onMouseUp={() => handleMouseUp(index)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onTouchMove={(e) => handleTouchMove(e, index)}
                  onTouchStart={() => handleMouseDown(index)}
                  onTouchEnd={() => handleMouseUp(index)}
                >
                  {/* Before Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.before})` }}
                  />

                  {/* After Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.after})`,
                      width: `${sliderPositions[index]}%`,
                      clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                    }}
                  />

                  {/* Slider */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPositions[index]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#0578b1] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm">
                    Before
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm">
                    After
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforAfter;