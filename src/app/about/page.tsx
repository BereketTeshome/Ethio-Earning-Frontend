"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Language } from "@/store/LanguageSlice";

const About: React.FC = () => {
  const language = useSelector(
    (state: { language: { language: Language } }) => state.language.language
  );

  const title = language === "eng" ? "About Us" : "ስለ እኛ";
  const description =
    language === "eng"
      ? "Our advertising platform offers a suite of dynamic features designed to suit the needs of every business, from small startups to established enterprises."
      : "የእኛ የማስታወቂያ መድረክ ከትናንሽ ጅምሮች እስከ የተቋቋሙ ኢንተርፕራይዞች የእያንዳንዱን ንግድ ፍላጎት ለማሟላት የተነደፉ ተለዋዋጭ ባህሪያትን ያቀርባል";

  const features = [
    {
      title: language === "eng" ? "Customizable User Roles" : "የተለያዩ ተጠቃሚ ሚናዎች",
      description:
        language === "eng"
          ? "Tailor user roles to match the unique needs of your team, ensuring smooth operations."
          : "ስራዎችን በማረጋገጥ የቡድንዎን ልዩ ፍላጎቶች ለማዛመድ የተጠቃሚ ሚናዎችን ያስተካክላሉ",
      icon: "🛠️",
    },
    {
      title:
        language === "eng"
          ? "Advanced Analytics & Reporting"
          : "የላቀ ትንታኔ እና ሪፖርት ማድረግ",
      description:
        language === "eng"
          ? "Make data-driven decisions with detailed reports and analytics that help you monitor performance."
          : "አፈጻጸምን ለመከታተል በሚረዱ ዝርዝር ሪፖርቶች እና ትንታኔዎች በመረጃ ላይ የተመሰረቱ ውሳኔዎችን ያድርጉ",
      icon: "✔️",
    },
    {
      title: language === "eng" ? "24/7 Customer Support" : "24/7 ደንበኛ ድጋፍ",
      description:
        language === "eng"
          ? "Access our support team anytime, anywhere for immediate assistance with any issue."
          : "ለማንኛውም ጉዳይ አፋጣኝ እርዳታ ለማግኘት በማንኛውም ጊዜ የድጋፍ ቡድናችንን ያግኙ",
      icon: "☎️",
    },
    {
      title:
        language === "eng"
          ? "Scalable Solutions for Every Business"
          : "ለማንኛውም ትንሽ እና ትልቅ ቢዝነስ ምርጥ መፍትሔዎች",
      description:
        language === "eng"
          ? "Whether you're a startup or an established enterprise, our solutions grow with you."
          : "ትንሽ እና ትልቅ ቢዝነሶችን በማገናዘብ ምርጥ መፍትሔዎችን ያግኙ።",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b bg-white dark:bg-[#171717] text-neutral-800 dark:text-white py-12 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-center lg:text-left mb-6 text-gray-700 dark:text-gray-300">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h2 className="text-2xl font-semibold mb-2 text-indigo-500 dark:text-purple-300">
                  {feature.title}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image on the right side */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/img/about.png"
            alt="About Us"
            className="rounded-xl w-full max-w-lg object-cover animate-scaleUpDown"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
