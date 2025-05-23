import { useState, useEffect, useRef } from 'react';

const ImplantsCounter = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  const targetCount = 150000;
  const duration = 3000; // 3 seconds
  const steps = 60;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const increment = targetCount / steps;
    const intervalTime = duration / steps;

    const counter = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        return newCount >= targetCount ? targetCount : newCount;
      });
    }, intervalTime);

    return () => clearInterval(counter);
  }, [hasAnimated]);

  const formatNumber = (num: number) => {
    return Math.round(num).toString().padStart(6, '0').split('');
  };

  return (
    <section ref={counterRef} className="py-8 md:py-12 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#4a4a4a]">
            Dr. Shet has completed
          </h2>
          <div className="flex">
            {formatNumber(count).map((digit, index) => (
              <div
                key={index}
                className="w-12 md:w-16 lg:w-20 h-16 md:h-20 lg:h-24 bg-[#ff7f50] text-white text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center mx-0.5 rounded"
              >
                {digit}
              </div>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#4a4a4a]">
            Successful Implants
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImplantsCounter;