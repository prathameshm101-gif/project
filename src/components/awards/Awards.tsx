import  { useState, useEffect } from "react";

import { Button } from '../ui/button';
import { Card, CardContent } from "../../components/ui/card";



const Awards = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
  
    const awardCards = [
      {
        title: "Leading Dental Chain of the Year",
        description: "Honored for setting new benchmarks in patient-first dental care, welcoming smiles from India and around the globe.",
        year: "2024",
        image: "/aasiya--8--2.png"
      },
      {
        title: "Digital Dentistry Innovation",
        description: "Pioneering advanced digital solutions for precise, comfortable, and efficient dental care delivery.",
        year: "2024",
        image: "/aasiya--8--2.png"
      },
      {
        title: "All-on-4 Treatment Excellence",
        description: "Recognized for world-class All-on-4 implant solutions, trusted by patients across India and international clients seeking expert care.",
        year: "2023, 2024, 2025",
        image: "/aasiya--8--2.png"
      },
      {
        title: "Best Dental Tourism Provider",
        description: "Excellence in providing comprehensive dental care solutions to international patients.",
        year: "2024",
        image: "/aasiya--8--2.png"
      },
      {
        title: "Patient Safety Excellence",
        description: "Setting the highest standards in patient safety and care protocols across all clinics.",
        year: "2024",
        image: "/aasiya--8--2.png"
      },
      {
        title: "Healthcare Leadership Award",
        description: "Recognized for outstanding contribution to dental healthcare accessibility and innovation.",
        year: "2024",
        image: "/aasiya--8--2.png"
      },
      {
        title: "Best Multi-Specialty Dental Chain",
        description: "Awarded for comprehensive dental care excellence across multiple specialties.",
        year: "2024",
        image: "/aasiya--8--2.png"
      },
      {
        title: "Customer Service Excellence",
        description: "Recognized for exceptional patient experience and satisfaction across all clinics.",
        year: "2024",
        image: "/aasiya--8--2.png"
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % awardCards.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [awardCards.length]);
  
    const getVisibleCards = () => {
      const cards = [];
      for (let i = 0; i < 5; i++) {
        const index = (currentIndex - 2 + i + awardCards.length) % awardCards.length;
        cards.push({ ...awardCards[index], position: i });
      }
      return cards;
    };
  
    const getCardStyle = (position: number) => {
      const styles = {
        transform: 'scale(1)',
        zIndex: 1,
        opacity: 1
      };
  
      if (position === 2) {
        styles.transform = 'scale(1.1)';
        styles.zIndex = 3;
      } else if (position === 1 || position === 3) {
        styles.transform = 'scale(0.9)';
        styles.zIndex = 2;
      } else {
        styles.transform = 'scale(0.8)';
        styles.opacity = 0.6;
      }
  
      return styles;
    };
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-0">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1] text-center mb-12">
        Healthy Smiles,
        <br />
        <span className="font-bold">Recognized Globally</span>
      </h2>
      <div className="relative h-[500px] mt-12 lg:mt-[200px]">
        <div className="absolute w-full flex justify-center items-center">
          {getVisibleCards().map((award, index) => (
            <Card
              key={index}
              className="absolute transition-all duration-500"
              style={{
                ...getCardStyle(award.position),
                left: `${award.position * 20}%`
              }}
            >
              <CardContent className="w-[280px] p-6 bg-white rounded-lg shadow-lg">
                <div className="w-full h-[120px] bg-[#eaf8ff] mb-4">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-[#4a4a4a] font-semibold mb-2">
                  {award.year}
                </div>
                <h3 className="text-lg font-semibold text-[#0578b1] mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-[#4a4a4a]">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
    </div>
    <Button className="w-full lg:w-[372px] h-12 mt-8 lg:mt-[100px] mx-auto block bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5">
        <span className="font-['Poppins'] font-medium text-white text-lg lg:text-[23px] tracking-[-0.92px] leading-normal">
          Request a Virtual Quote
        </span>
        <img className="w-[29px] h-[29px]" alt="Frame" src="/math.png" />
      </Button>
  </section>

  )
}

export default Awards
