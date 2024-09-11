"use client";
import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Benefits } from "./Benefits";
import { Video } from "./Video";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Cta } from "./Cta";
import { benefitOne, benefitTwo } from "../utils/data";
import { useSelector } from "react-redux";

const Section = () => {
  const language = useSelector((state: any) => state.language.language);
  return (
    <div>
      <SectionTitle
        preTitle={
          language === "eng"
            ? "Why Choose Our Platform?"
            : "የእኛን መድረክ ለምን ይመርጣሉ?"
        }
        title={
          language === "eng"
            ? "The Ultimate Advertising Solution"
            : "የመጨረሻው የማስታወቂያ መፍትሄ።"
        }
      >
        {language === "eng"
          ? "Our advertising platform is designed with distinct roles for Investors, Earners, and System Administrators, providing tailored features for each user type. Built using the latest technologies, it ensures performance, security, and an exceptional user experience."
          : "የእኛ የማስታወቂያ መድረክ ለባለሀብቶች፣ ገቢዎች እና የስርዓት አስተዳዳሪዎች በተለየ ሚናዎች የተነደፈ ነው፣ ይህም ለእያንዳንዱ የተጠቃሚ አይነት የተበጁ ባህሪያትን ይሰጣል። አዳዲስ ቴክኖሎጂዎችን በመጠቀም የተገነባው አፈጻጸም፣ ደህንነት እና ልዩ የተጠቃሚ ተሞክሮ ያረጋግጣል።"}
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle={
          language === "eng"
            ? "See Our Platform in Action"
            : "የኛን መድረክ በተግባር ይመልከቱ"
        }
        title={
          language === "eng"
            ? "Learn How Our Platform Works"
            : "የእኛ መድረክ እንዴት እንደሚሰራ ይወቁ"
        }
      >
        {language === "eng"
          ? "Watch this video to understand how our platform can help you achieve your advertising goals, whether you're an Investor looking to boost social media presence or an Earner completing tasks for rewards."
          : "የማህበራዊ ሚዲያ መገኘትን ለማሳደግ የሚፈልግ ባለሀብትም ሆነ ለሽልማት ስራዎችን የሚያጠናቅቅ ገቢ ፈጣሪ ሆንክ የእኛ መድረክ የማስታወቂያ ግቦችህን እንድታሳካ እንዴት እንደሚረዳህ ለመረዳት ይህን ቪዲዮ ይመልከቱ"}
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle={
          language === "eng" ? "What Our Users Say" : "ተጠቃሚዎቻችን የሚሉትን ነው"
        }
        title={language === "eng" ? "Customer Testimonials" : "የደንበኛ ምስክርነቶች"}
      >
        {language === "eng"
          ? "Hear from our users about how the platform has transformed their advertising strategies and helped them achieve tangible results."
          : "መድረኩ የማስታወቂያ ስልቶቻቸውን እንዴት እንደለወጠው እና ተጨባጭ ውጤቶችን እንዲያገኙ እንደረዳቸው ከተጠቃሚዎቻችን ይስሙ"}
      </SectionTitle>

      <Testimonials />

      <SectionTitle
        preTitle={language === "eng" ? "Have Questions?" : "ጥያቄዎች አሉዎት?"}
        title={
          language === "eng"
            ? "Frequently Asked Questions"
            : "በተደጋጋሚ የሚጠየቁ ጥያቄዎች"
        }
      >
        {language === "eng"
          ? "Get answers to common questions about our platform's features, pricing, and more. This section is designed to address any concerns you might have and guide you through the process."
          : "ስለእኛ መድረክ ባህሪያት፣ ዋጋ አሰጣጥ እና ሌሎችም ለተለመዱ ጥያቄዎች መልስ ያግኙ። ይህ ክፍል እርስዎ ሊኖሩዎት የሚችሉትን ማንኛውንም ስጋቶች ለመፍታት እና በሂደቱ ውስጥ እርስዎን ለመምራት የተነደፈ ነው"}
      </SectionTitle>

      <Faq />
      <Cta />
    </div>
  );
};

export default Section;
