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
        <title>Our Driver Guides | Simple Information | Fanny Learn Hub</title>
        <meta
          name="description"
          content="Browse simple driver guides about printer, audio, WiFi, graphics, USB, Bluetooth, and computer hardware topics."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#315BFF]"></span>
              <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Learning Library</span>
            </div>

            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-[#071B34] leading-[1.2] mb-8">
              Explore simple guides about <span className="text-[#315BFF]">computer drivers.</span>
            </h1>

            <p className="text-[17px] text-slate-500 leading-relaxed max-w-[720px] mb-10">
              Read easy educational information about WiFi, graphics, printer,
              USB, audio, Bluetooth, chipset, storage, and other common
              driver-related topics.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Wifi size={16} strokeWidth={1.5} />, text: "WiFi" },
                { icon: <Volume2 size={16} strokeWidth={1.5} />, text: "Audio" },
                { icon: <Monitor size={16} strokeWidth={1.5} />, text: "Graphics" },
                { icon: <Printer size={16} strokeWidth={1.5} />, text: "Printer" },
                { icon: <Usb size={16} strokeWidth={1.5} />, text: "USB" },
                { icon: <Bluetooth size={16} strokeWidth={1.5} />, text: "Bluetooth" },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 h-[40px] px-4 rounded-lg border border-slate-100 bg-white text-[#071B34] text-[13px] font-medium"
                >
                  <span className="text-[#315BFF]">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-50 rounded-xl transform translate-x-3 translate-y-3 -z-10"></div>
            <img
              src="/about/guides.png"
              alt="Driver learning guides"
              className="relative z-10 w-full h-[450px] object-cover rounded-xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-[#315BFF]"></span>
                <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Driver Topics</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-semibold text-[#071B34]">
                Read clear educational <span className="text-[#315BFF]">driver guides.</span>
              </h2>
            </div>

            <p className="text-[15px] leading-relaxed text-slate-500 max-w-[520px]">
              Browse simple reading material created for users who want to
              understand driver communication and hardware categories.
            </p>
          </div>

          <div className="border-t border-slate-100">
            {guidesData.map((guide, index) => (
              <Link
                key={index}
                to={`/guide/${guide.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-[140px_1fr_60px] gap-8 items-center py-8 border-b border-slate-100"
              >
                {/* Image */}
                <div className="w-full lg:w-[140px] h-[110px] rounded-xl overflow-hidden bg-slate-50/50 border border-slate-50">
                  <img
                    src={guide.img}
                    alt={guide.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-[11px] font-semibold text-[#315BFF] uppercase tracking-[0.1em]">
                      Driver Guide
                    </span>

                    <span className="w-1 h-[1px] bg-slate-200" />

                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 uppercase tracking-[0.1em]">
                      <Clock size={12} strokeWidth={1.5} />
                      5 Min Read
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-semibold text-[#071B34] group-hover:text-[#315BFF] transition leading-snug mb-3">
                    {guide.title}
                  </h2>

                  <p className="text-[14px] leading-relaxed text-slate-500 max-w-[850px]">
                    {guide.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-11 h-11 rounded-lg border border-slate-100 text-slate-300 flex items-center justify-center group-hover:border-[#315BFF] group-hover:text-[#315BFF] transition">
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1600px] mx-auto bg-[#071B34] rounded-xl py-16 px-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl -mr-32 -mt-32 rounded-full"></div>

          <p className="text-blue-400/80 text-xs font-semibold uppercase tracking-widest mb-5 relative z-10">
            Learning Questions
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 relative z-10">
            Continue learning through common driver questions.
          </h2>

          <p className="text-[16px] text-blue-100/60 max-w-[760px] mx-auto mb-10 relative z-10">
            Explore simple answers about hardware communication, driver basics,
            and common computer-device terminology.
          </p>

          <Link
            to="/faq"
            className="inline-flex items-center gap-2 bg-[#315BFF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors relative z-10"
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