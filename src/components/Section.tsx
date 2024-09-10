import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Benefits } from "./Benefits";
import { Video } from "./Video";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Cta } from "./Cta";
import { benefitOne, benefitTwo } from "./data";

const Section = () => {
  return (
    <div>
      <SectionTitle
        preTitle="Why Choose Our Platform?"
        title="The Ultimate Advertising Solution"
      >
        Our advertising platform is designed with distinct roles for Investors,
        Earners, and System Administrators, providing tailored features for each
        user type. Built using the latest technologies, it ensures performance,
        security, and an exceptional user experience.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="See Our Platform in Action"
        title="Learn How Our Platform Works"
      >
        Watch this video to understand how our platform can help you achieve
        your advertising goals, whether you're an Investor looking to boost
        social media presence or an Earner completing tasks for rewards.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle preTitle="What Our Users Say" title="Customer Testimonials">
        Hear from our users about how the platform has transformed their
        advertising strategies and helped them achieve tangible results.
      </SectionTitle>

      <Testimonials />

      <SectionTitle
        preTitle="Have Questions?"
        title="Frequently Asked Questions"
      >
        Get answers to common questions about our platform's features, pricing,
        and more. This section is designed to address any concerns you might
        have and guide you through the process.
      </SectionTitle>

      <Faq />
      <Cta />
    </div>
  );
};

export default Section;
