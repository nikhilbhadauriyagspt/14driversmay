import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Clock,
  ArrowRight,
  BookOpen,
  Wifi,
  Volume2,
  Monitor,
  Printer,
  Usb,
  Bluetooth,
} from "lucide-react";
import { guidesData } from "../data/guidesData";

const Guides = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>Our Driver Guides | Simple Information | Clear With Us</title>
        <meta
          name="description"
          content="Browse simple driver guides about printer, audio, WiFi, graphics, USB, Bluetooth, and computer hardware topics."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-[#EEF4FF] px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              Learning Library
            </p>

            <h1 className="text-[38px] 2xl:text-[64px] leading-tight font-semibold text-[#071B34] mb-7">
              Explore simple guides about{" "}
              <span className="text-[#315BFF]">computer drivers.</span>
            </h1>

            <p className="text-[17px] leading-8 text-slate-600 max-w-[720px] mb-10">
              Read easy educational information about WiFi, graphics, printer,
              USB, audio, Bluetooth, chipset, storage, and other common
              driver-related topics.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Wifi size={16} />, text: "WiFi" },
                { icon: <Volume2 size={16} />, text: "Audio" },
                { icon: <Monitor size={16} />, text: "Graphics" },
                { icon: <Printer size={16} />, text: "Printer" },
                { icon: <Usb size={16} />, text: "USB" },
                { icon: <Bluetooth size={16} />, text: "Bluetooth" },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 h-[42px] px-5 rounded-full bg-white text-[#071B34] text-[14px] font-medium"
                >
                  <span className="text-[#315BFF]">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -left-6 top-8 w-[90%] h-[90%] rounded-[28px] border-[4px] border-[#315BFF]" />

            <img
              src="/about/aboutmain_02.webp"
              alt="Driver learning guides"
              className="relative z-10 w-full h-[560px] object-cover rounded-[28px]"
            />
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                Driver Topics
              </p>

              <h2 className="text-[36px] 2xl:text-[56px] leading-tight font-semibold text-[#071B34]">
                Read clear educational{" "}
                <span className="text-[#315BFF]">driver guides.</span>
              </h2>
            </div>

            <p className="text-[16px] leading-8 text-slate-500 max-w-[520px]">
              Browse simple reading material created for users who want to
              understand driver communication and hardware categories.
            </p>
          </div>

          <div className="border-t border-slate-200">
            {guidesData.map((guide, index) => (
              <Link
                key={index}
                to={`/guide/${guide.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-[140px_1fr_60px] gap-8 items-center py-8 border-b border-slate-200"
              >
                {/* Image */}
                <div className="w-full lg:w-[140px] h-[110px] rounded-[20px] overflow-hidden bg-[#F4F7FB]">
                  <img
                    src={guide.img}
                    alt={guide.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-[12px] font-semibold text-[#315BFF] uppercase tracking-[0.16em]">
                      Driver Guide
                    </span>

                    <span className="w-1 h-1 rounded-full bg-slate-300" />

                    <span className="inline-flex items-center gap-1 text-[12px] text-slate-500 uppercase tracking-[0.16em]">
                      <Clock size={12} />
                      5 Min Read
                    </span>
                  </div>

                  <h2 className="text-[24px] md:text-[30px] font-semibold text-[#071B34] group-hover:text-[#315BFF] transition leading-snug mb-3">
                    {guide.title}
                  </h2>

                  <p className="text-[15px] leading-7 text-slate-500 max-w-[850px]">
                    {guide.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-12 h-12 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center group-hover:border-[#315BFF] group-hover:text-[#315BFF] transition">
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071B34] py-24 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[#8ED8FF] text-[13px] font-semibold uppercase tracking-[0.18em] mb-5">
            Learning Questions
          </p>

          <h2 className="text-[36px] md:text-[54px] leading-tight font-semibold text-white mb-6">
            Continue learning through common driver questions.
          </h2>

          <p className="text-[16px] leading-8 text-white/65 max-w-[760px] mx-auto mb-10">
            Explore simple answers about hardware communication, driver basics,
            and common computer-device terminology.
          </p>

          <Link
            to="/faq"
            className="inline-flex items-center gap-3 h-[56px] px-8 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
          >
            Read Common Questions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Guides;