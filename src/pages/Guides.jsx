import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { guidesData } from "../data/guidesData";

const Guides = () => {
  return (
    <div className="bg-white min-h-screen  font-[Poppins]">
      <Helmet>
        <title>Our Driver Guides | Simple Information | Aura Learning</title>
        <meta
          name="description"
          content="Browse simple driver guides about printer, audio, WiFi, graphics, USB, Bluetooth, and computer hardware topics."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#f7f9ff] px-6 py-24 overflow-hidden">
        <div className="absolute top-[-140px] right-[-120px] w-[420px] h-[420px] rounded-full bg-blue-100 blur-[80px]" />
        <div className="absolute bottom-[-180px] left-[-120px] w-[420px] h-[420px] rounded-full bg-indigo-100 blur-[90px]" />

        <div className="relative z-10 max-w-[1500px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
              <BookOpen size={18} />
            </span>
            <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
              Learning Library
            </span>
          </div>

          <h1 className="text-[34px] md:text-[48px] font-semibold text-[#202124] leading-tight mb-6">
            Simple driver guides for everyday users.
          </h1>

          <p className="text-slate-600 text-[16px] leading-[1.8] max-w-[760px] mx-auto">
            Browse easy-to-read information about WiFi, audio, printer,
            graphics, USB, Bluetooth, chipset, and other computer driver topics.
          </p>
        </div>
      </section>

      {/* Guides List */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {guidesData.map((guide, index) => (
              <Link
                key={index}
                to={`/guide/${guide.slug}`}
                className="group flex items-center gap-6 py-6 border-b border-slate-200/70 hover:border-[#2563eb]/50 transition-all duration-300"
              >
                <div className="w-[120px] h-[92px] shrink-0 rounded-[22px] bg-[#f7f9ff] flex items-center justify-center overflow-hidden">
                  <img
                    src={guide.img}
                    alt={guide.title}
                    className="max-w-[90px] max-h-[70px] object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[#2563eb] uppercase tracking-[0.18em]">
                      Guide
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-[11px] font-medium text-slate-600 uppercase tracking-[0.18em] inline-flex items-center gap-1">
                      <Clock size={12} />
                      5 Min Read
                    </span>
                  </div>

                  <h2 className="text-[18px] md:text-[20px] font-semibold text-slate-900 mb-2 group-hover:text-[#2563eb] transition-colors leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-2">
                    {guide.desc}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#f8fbff] text-slate-300 flex items-center justify-center shrink-0 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f7f9ff] py-20 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#202124] mb-4">
            Want to understand driver topics better?
          </h2>

          <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
            Read common questions to learn basic terms, signs, and device-driver
            information in simple language.
          </p>

          <Link
            to="/faq"
            className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
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