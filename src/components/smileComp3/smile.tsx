import { Button } from "../ui/button";

const CircularProgress = ({ percentageText, percentageBar, label }: any) => {
  const radius = 45;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const numericBar = parseInt(percentageBar.replace("%", ""));
  const strokeDashoffset = circumference - (numericBar / 100) * circumference;

  return (
    <div className="text-center w-full max-w-[100px] mx-auto">
      <svg height="100" width="100" className="mx-auto">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="50"
          cy="50"
        />
        <circle
          stroke="#0578B1"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="50"
          cy="50"
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontSize="16"
          fill="#0578B1"
          className="font-semibold"
        >
          {percentageText}
        </text>
      </svg>
      <p className="mt-2 text-[#0578b1] text-xs sm:text-sm font-medium">
        {label}
      </p>
    </div>
  );
};

const Smile = () => {
  const statistics = [
    { percentage: "95%", label: "Dental Satisfaction", percentagebar: "95%" },
    { percentage: "98%", label: "Success Rate", percentagebar: "80%" },
    { percentage: "98%", label: "Travel Satisfaction", percentagebar: "70%" },
  ];

  return (
    <div>
      <section className="relative bg-[url('/rectangle-473.svg')] bg-cover bg-no-repeat bg-center min-h-screen">
        <div className="container mx-auto max-w-7xl relative z-10 py-16 md:py-24 px-4 md:px-8">
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6 text-center">
            <h2 className="text-3xl font-semibold text-[#0578b1]">
              How Will My Smile Look?
            </h2>
            <p className="text-xl text-[#000000a6]">
              After my treatment with Dr. Kunal
            </p>
            <p className="text-lg text-[#4a4a4a]">
              Smile transformations are more than cosmetic — they change
              confidence, careers, and relationships. With Dr. Kunal Shet's
              advanced techniques, patients experience world-class aesthetic
              and functional results.
            </p>

            <div className="relative h-[300px] sm:h-[350px] m-0">
              <img
                src="/smileTransformationSection.png"
                alt="Smile Transformation"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain"
              />
            </div>

            <div className="flex justify-center gap-4 overflow-x-auto px-2">
              {statistics.map((stat, index) => (
                <CircularProgress
                  key={index}
                  percentageText={stat.percentage}
                  percentageBar={stat.percentagebar}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12">
            <div className="space-y-8 z-20">
              <h2 className="text-5xl font-semibold text-[#0578b1]">
                How Will My Smile Look?
              </h2>
              <p className="text-xl text-[#000000a6]">
                After my treatment with Dr. Kunal
              </p>
              <p className="text-lg text-[#4a4a4a]">
                Smile transformations are more than cosmetic — they change
                confidence, careers, and relationships. With Dr. Kunal Shet's
                advanced techniques, patients experience world-class aesthetic
                and functional results.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-full">
                {statistics.map((stat, index) => (
                  <CircularProgress
                    key={index}
                    percentageText={stat.percentage}
                    percentageBar={stat.percentagebar}
                    label={stat.label}
                  />
                ))}
              </div>

              <Button className="w-[372px] h-12 mt-[100px] bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 hover:bg-[#046a9d] transition duration-200">
                <span className="font-['Poppins'] font-medium text-white text-[23px] tracking-[-0.92px] mr-1">
                  Request a Virtual Consultation
                </span>
                <img
                  className="w-[20px] h-[20px]"
                  alt="Frame"
                  src="/math.png"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Right-side Image (only for desktop) */}
        <div className="absolute right-0 top-0 h-full w-1/2 z-10 hidden lg:block">
          <img
            src="/smileTransformationSection.png"
            alt="Smile Transformation"
            className="h-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Smile;