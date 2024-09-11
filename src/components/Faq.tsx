"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export const Faq = () => {
  const language = useSelector((state: any) => state.language.language);
  const faqdata = [
    {
      question:
        language === "eng"
          ? "What payment methods are supported for transactions?"
          : "ለግብይቶች ምን ዓይነት የመክፈያ ዘዴዎች ይደገፋሉ?",
      answer:
        language === "eng"
          ? "The platform supports ETB payments via Chapa and USD payments via Stripe for deposits, package purchases, and coin conversions."
          : "መድረኩ ለተቀማጭ ገንዘብ፣ ለጥቅል ግዢ እና ለሳንቲም ልወጣዎች በStripe በኩል የETB ክፍያዎችን በቻፓ እና የአሜሪካ ዶላር ይደግፋል።",
    },
    {
      question:
        language === "eng"
          ? "How does the referral system work for Investors?"
          : "የሪፈራል ስርዓቱ ለኢንቨስተሮች እንዴት ይሰራል?",
      answer:
        language === "eng"
          ? "Investors get unique referral links to share. When someone signs up through their link, they earn coins, which can be converted to currency."
          : "ባለሀብቶች ለማጋራት ልዩ የማጣቀሻ አገናኞችን ያገኛሉ። አንድ ሰው በአገናኝ መንገዱ ሲመዘገብ, ሳንቲሞች ያገኛሉ, ይህም ወደ ምንዛሪ ሊለወጥ ይችላል",
    },
    {
      question:
        language === "eng"
          ? "What is your refund policy?"
          : "የተመላሽ ገንዘብ ፖሊሲው እንዴት ነው?",
      answer:
        language === "eng"
          ? "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
          : "በማንኛውም ምክንያት በግዢዎ ደስተኛ ካልሆኑ በ90 ቀናት ውስጥ ኢሜይል ያድርጉልን እና ሙሉ ገንዘብ እንመልስልዎታለን፣ ምንም ጥያቄዎች አልተጠየቁም።",
    },
    {
      question:
        language === "eng"
          ? "Do you offer technical support?"
          : "የቴክኒክ ድጋፍ ይሰጣሉ?",
      answer:
        language === "eng"
          ? "Yes, we do offer technical support."
          : "አዎ, የቴክኒክ ድጋፍ እንሰጣለን",
    },
  ];

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};
