import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full pt-16  overflow-hidden font-[Poppins]">
      {/* Background Image */}
      <img
        src="/banner/banner_01.avif"
        width="2000"
        height="850"
        fetchPriority="high"
        loading="eager"
        className="w-full h-[520px] md:h-[680px] lg:h-[850px]  object-cover"
        alt="Driver learning educational banner"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 pt-16 bg-black/65" />

      {/* Content */}
      <div className="absolute inset-0 pt-16 flex items-center justify-center text-center px-6">
        <div className="max-w-[900px] mx-auto text-white">
          <h1 className="text-[34px] md:text-[56px] lg:text-[68px] leading-[1.15] font-medium">
            Learn Computer Drivers in a Simple Way
          </h1>

          <p className="mt-6 text-[15px] md:text-[18px] leading-8 text-white/90 max-w-[760px] mx-auto">
            Explore easy educational guides about graphics, audio, Wi-Fi,
            printer, USB, Bluetooth, display, network, and other driver topics.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              to="/guides"
              className="inline-flex items-center gap-3 bg-white text-black px-7 pr-3 py-2 rounded-full text-[15px] font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Explore Driver Guides
              <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}