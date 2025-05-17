import { useState, useEffect, useRef } from 'react';

const ImplantsCounter = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  const targetCount = 100;
  const duration = 2000; // 2 seconds
  const steps = 50;

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

  return (
    <section ref={counterRef} className="py-16 bg-[#0578b1] text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {Math.round(count)}+
          </h2>
          <p className="text-xl md:text-2xl">Successful Implant Procedures</p>
        </div>
      </div>
    </section>
  );
};

export default ImplantsCounter;
