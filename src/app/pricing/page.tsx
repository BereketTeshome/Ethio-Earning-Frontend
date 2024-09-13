"use client";
import { Language } from "@/store/LanguageSlice";
import React from "react";
import { useSelector } from "react-redux";

interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor: string;
  buttonColor: string;
  borderColor: string;
  shadow: string;
}

const Pricing: React.FC = () => {
  const language = useSelector(
    (state: { language: { language: Language } }) => state.language.language
  );

  const plans: Plan[] =
    language === "amh"
      ? [
          {
            title: "ጀማሪ ጥቅል",
            price: "$100",
            description: "ለአነስተኛ ደረጃ ኩባንያዎች የማህበራዊ ሚዲያ ተከታይ ለማሳደግ ተስማሚ",
            features: [
              "እስከ 5,000 የማህበራዊ ሚዲያ ተከታይ",
              "መሰረታዊ የተቋማት ክትትል",
              "የኢሜል ድጋፍ",
            ],
            bgColor: "bg-white",
            textColor: "text-neutral-600",
            buttonColor: "text-blue-600",
            borderColor: "border-white",
            shadow: "shadow-lg",
          },
          {
            title: "እድገት ጥቅል",
            price: "$250",
            description: "ከፍተኛ የተሳትፎ መጨመር ለሚፈልጉ ንግዶች",
            features: [
              "እስከ 20,000 የማህበራዊ ሚዲያ ተከታይ",
              "የላቀ የሂሳብ አያያዝ አስተዳዳሪ",
              "የላቀ የተቋማት ክትትል",
              "ቅድሚያ የኢሜል ድጋፍ",
            ],
            bgColor: "bg-blue-600",
            textColor: "text-white",
            buttonColor: "text-blue-600",
            borderColor: "border-white",
            shadow: "shadow-lg",
          },
          {
            title: "የድርጅት ጥቅል",
            price: "$500",
            description: "ሰፊ ድጋፍ ላላቸው ትላልቅ ኩባንያዎች አጠቃላይ ጥቅል",
            features: [
              "ያልተገደበ የማህበራዊ ሚዲያ ተሳትፎ",
              "ሙሉ የትንታኔ ስብስብ ከ ሪፖርቶች ጋር",
              "24/7 ፕሪሚየም ድጋፍ",
              "የላቀ የሂሳብ አያያዝ አስተዳዳሪ",
              "ብጁ ኩባንያ ስልቶች",
            ],
            bgColor: "bg-white",
            textColor: "text-neutral-600",
            buttonColor: "text-blue-600",
            borderColor: "border-white",
            shadow: "shadow-lg",
          },
        ]
      : [
          {
            title: "Starter Package",
            price: "$100",
            description:
              "Ideal for small-scale companies to boost your social media engagement and presence.",
            features: [
              "Up to 5,000 social media engagements",
              "Basic analytics tracking",
              "Email support",
            ],
            bgColor: "bg-white",
            textColor: "text-neutral-600",
            buttonColor: "text-blue-600",
            borderColor: "border-white",
            shadow: "shadow-lg",
          },
          {
            title: "Growth Package",
            price: "$250",
            description:
              "Perfect for growing businesses aiming for a substantial increase in engagement.",
            features: [
              "Up to 20,000 social media engagements",
              "Advanced analytics tracking",
              "Priority email support",
              "Dedicated account manager",
            ],
            bgColor: "bg-blue-600",
            textColor: "text-white",
            buttonColor: "text-blue-600",
            borderColor: "border-white",
            shadow: "shadow-lg",
          },
          {
            title: "Enterprise Package",
            price: "$500",
            description:
              "Comprehensive package for large-scale companies with extensive support.",
            features: [
              "Unlimited social media engagements",
              "Full analytics suite with custom reports",
              "24/7 premium support",
              "Dedicated account manager",
              "Custom campaign strategies",
            ],
            bgColor: "bg-white",
            textColor: "text-neutral-600",
            buttonColor: "text-blue-600",
            borderColor: "border-white",
            shadow: "shadow-lg",
          },
        ];

  return (
    <section>
      <h1 className="text-4xl md:text-6xl text-center my-10 ">
        {language === "eng" ? "Packages" : "ጥቅሎች"}
      </h1>
      <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col p-8 ${plan.bgColor}  ${plan.shadow} rounded-2xl`}
            >
              <div className="flex-1">
                <h3 className={`text-xl font-semibold ${plan.textColor}`}>
                  {plan.title}
                </h3>
                <p className={`flex items-baseline mt-4 ${plan.textColor}`}>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    /{language === "eng" ? "month" : "በወር"}
                  </span>
                </p>
                <p className={`mt-6 ${plan.textColor}`}>{plan.description}</p>
                <ul role="list" className="pt-4 mt-4 space-y-6 border-t">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className={`ml-3 ${plan.textColor}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-lg">
                <a
                  href="#"
                  className={`w-full items-center block px-10 py-3.5 text-base font-medium text-center ${plan.buttonColor} transition duration-500 ease-in-out transform ${plan.borderColor} shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white`}
                >
                  {language === "eng" ? "Get Started" : "ጀምር"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
