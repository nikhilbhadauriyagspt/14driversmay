import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      tag: "Simple Driver Learning Guides",
      title: "Learn About Computer Parts and How They Work",
      desc: "Read easy guides about WiFi, sound, printers, and other parts of your computer. Understand why they sometimes stop working in very simple language.",
    },
    {
      tag: "Easy Computer Information",
      title: "Understand Your Computer Better with Simple Guides",
      desc: "We explain how different parts of your computer talk to each other. Learn about computer settings and hardware in easy words that anyone can understand.",
    },
    {
      tag: "Helpful Knowledge Base",
      title: "Clear Information for Your Daily Computer Use",
      desc: "Explore our library of helpful guides. We help you learn about your laptop and desktop parts so you can use your computer without any confusion.",
    },
  ];

  return (
    <section className="relative w-full min-h-[720px] lg:min-h-[100vh] pt-16 overflow-hidden bg-[#050A33] font-[Poppins]">
      {/* Background Image (Static) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: "url('/banner/home-four-bg.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050A33]/60" />

      {/* Right Image Circle (Static) */}
      <div className="absolute right-[-80px] -top-10 w-[52%] h-[100%] hidden lg:block">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/banner/banner_01.png"
            alt="Driver learning banner"
            className="w-full h-full object-contain object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>

      {/* Content Slider */}
      <div className="relative z-10 max-w-[1200px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-0 min-h-[720px] lg:min-h-[90vh] flex items-center">
        <div className="max-w-[720px] w-full">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="hero-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="text-white py-10">

                  <h1 className="text-[30px] md:text-[50px] 2xl:text-[61px] leading-[1.20] font-[500] mb-7 max-w-[600px]">
                    {slide.title}
                  </h1>

                  <p className="text-white/90 text-base md:text-[20px] leading-[1.8] max-w-[680px] mb-10">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-6">
                    <Link
                      to="/guides"
                      className="inline-flex items-center justify-center px-10 py-3 rounded-full btn-gradient text-white text-md font-semibold transition-all"
                    >
                      Explore Guides
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Mobile Image (Static) */}
      <div className="relative z-10 lg:hidden px-6 pb-10 -mt-10">
        <div className="rounded-[36px] overflow-hidden shadow-2xl">
          <img
            src="/banner/banner_01.png"
            alt="Driver learning"
            className="w-full h-[280px] sm:h-[360px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
