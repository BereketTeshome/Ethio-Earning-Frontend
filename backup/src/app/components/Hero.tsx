import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="lg:pb-40 lg:pt-56 py-32 relative" id="home">
      <div className="overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/daiyj7fxl/image/upload/v1685001401/components/airfocus-lTWC_5OjyYc-unsplash_1_cxaswx_e25jxz.webp"
          alt="build your website"
          layout="fill" // Allows the image to fill its parent container
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2026] to-[#000000] opacity-90"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="lg:w-2/3 text-center relative">
            <div className="space-y-6 mb-10">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight capitalize font-bold">
                Simplify Your Business Operation
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                Streamline your workflows with our powerful software solutions.
              </p>

              <button
                type="button"
                className="inline-block px-6 py-2.5 rounded text-base font-medium cursor-pointer select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 hover:-translate-y-1.5 bg-[#f0b90b] text-[#1e2026] border-[#f0b90b] hover:bg-[#f0b90b]"
              >
                Watch Now{" "}
                <span className="mdi mdi-play-circle text-xl align-middle ml-2"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/daiyj7fxl/image/upload/v1677745724/components/bg-pattern-light_sadr33.png"
          alt="build your website"
          layout="fill" // Allows the image to fill its parent container
        />
      </div>
    </section>
  );
};

export default Hero;
