import React from "react";
import { Helmet } from "react-helmet-async";
import {
  BookOpen,
  Search,
  CheckCircle,
  ArrowRight,
  Cpu,
  Monitor,
  Wifi,
  Volume2,
  Printer,
  Usb,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>Who We Are | Simple Driver Guides at Clear With Us</title>
        <meta
          name="description"
          content="Clear With Us is a website where you can learn about computer drivers in simple English. We help you understand how your devices connect and work."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-white px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              Our Mission
            </p>

            <h1 className="text-[38px] 2xl:text-[54px] leading-tight font-semibold text-[#071B34] mb-7">
              Helping you understand computer hardware{" "}
              <span className="text-[#315BFF]">without the hard words.</span>
            </h1>

            <p className="text-[17px] leading-8 text-slate-500 max-w-[720px] mb-6">
              Clear With Us was started to make technology easier for everyone. We know that computer drivers can sound scary or complicated. That's why we write our guides using simple language that anyone can understand.
            </p>

            <p className="text-[17px] leading-8 text-slate-500 max-w-[720px] mb-9">
              Whether you are a student, a professional, or someone who just uses a computer for fun, our site is here to help you learn. We believe that when you understand how your machine works, you can use it better and feel more in control.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/guides"
                className="inline-flex items-center gap-3 h-[54px] px-7 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
              >
                Browse Guides <ArrowRight size={18} />
              </Link>

              <Link
                to="/faq"
                className="inline-flex items-center gap-3 h-[54px] px-7 rounded-full border border-slate-200 text-[#071B34] text-[15px] font-semibold hover:border-[#315BFF] hover:text-[#315BFF] transition"
              >
                Common Questions
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 w-[90%] h-[90%] rounded-[28px] border-[4px] border-[#315BFF]" />
            <img
              src="/about/aboutmain_03.webp"
              alt="People learning together"
              width="760"
              height="620"
              className="relative z-10 w-full h-[560px] object-cover rounded-[28px]"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 bg-[#F4F7FB]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              How We Help
            </p>

            <h2 className="text-[36px] 2xl:text-[54px] leading-tight font-semibold text-[#071B34] mb-6">
              We explain common topics in{" "}
              <span className="text-[#315BFF]">plain English.</span>
            </h2>

            <p className="text-[16px] leading-8 text-slate-500 mb-8">
              We focus on the things you use every day. From the Wi-Fi card that connects you to the internet, to the printer that handles your documents, we explain it all. Our articles are written by people who love technology but hate technical jargon.
            </p>

            <p className="text-[16px] leading-8 text-slate-500 mb-8">
              Every guide on our site follows a simple path. We start with what the device is, then explain what the driver does, and finally show you how to identify common issues. This step-by-step approach ensures that you never feel lost.
            </p>

            <div className="border-l-4 border-[#315BFF] pl-5">
              <p className="text-[15px] leading-7 text-slate-600 font-medium italic">
                Important Note: Clear With Us is a place for learning. We provide information to help you understand your computer. We do not offer repair services or one-on-one technical support.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200">
            <InfoRow
              icon={<BookOpen />}
              number="01"
              title="Easy Guides"
              desc="Simple driver explanations written in clear everyday language."
            />
            <InfoRow
              icon={<Search />}
              number="02"
              title="Topic Discovery"
              desc="Find driver information by device type or common hardware category."
            />
            <InfoRow
              icon={<CheckCircle />}
              number="03"
              title="Clear Learning"
              desc="Understand common signs, terms, and driver-related concepts."
            />
            <InfoRow
              icon={<HelpCircle />}
              number="04"
              title="Beginner Friendly"
              desc="Made for users who want simple knowledge without complex jargon."
            />
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="relative py-24 px-6 bg-[#EAF0FF] overflow-hidden">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          <div className="space-y-12">
            <StepRow
              number="01"
              icon={<BookOpen />}
              title="Choose a Topic"
              desc="Select a category such as WiFi, audio, graphics, USB, printer, Bluetooth, or chipset."
              active
            />
            <StepRow
              number="02"
              icon={<Search />}
              title="Read the Guide"
              desc="Go through simple explanations created for everyday computer users."
            />
            <StepRow
              number="03"
              icon={<CheckCircle />}
              title="Understand the Basics"
              desc="Learn how drivers help hardware and system software communicate."
            />
          </div>

          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              How To Use
            </p>

            <h2 className="text-[38px] 2xl:text-[56px] leading-tight font-semibold text-[#071B34] mb-7">
              Learn driver basics in{" "}
              <span className="text-[#315BFF]">3 simple steps.</span>
            </h2>

            <p className="text-[17px] leading-8 text-slate-500 max-w-[560px] mb-9">
              Start with a topic, read the simple guide, and understand how
              device-driver communication works.
            </p>

            <Link
              to="/guides"
              className="inline-flex items-center gap-3 h-[54px] px-7 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
            >
              Explore Guides <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                Topics We Cover
              </p>

              <h2 className="text-[36px] 2xl:text-[54px] leading-tight font-semibold text-[#071B34]">
                Common driver categories{" "}
                <span className="text-[#315BFF]">explained simply.</span>
              </h2>
            </div>

            <p className="text-[16px] leading-8 text-slate-500 max-w-[520px]">
              Browse clear information about device-driver areas that affect
              everyday computer use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-slate-200">
            {[
              { icon: <Monitor />, text: "Graphics", sub: "Display & GPU basics" },
              { icon: <Volume2 />, text: "Audio", sub: "Sound device information" },
              { icon: <Wifi />, text: "Network", sub: "Wi-Fi and LAN topics" },
              { icon: <Printer />, text: "Printer", sub: "Print device communication" },
              { icon: <Usb />, text: "USB", sub: "Port detection basics" },
              { icon: <Cpu />, text: "Chipset", sub: "Core system bridge" },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-5 py-8 border-b border-slate-200 lg:px-6"
              >
                <span className="w-14 h-14 rounded-full bg-[#EEF4FF] text-[#315BFF] flex items-center justify-center group-hover:bg-[#315BFF] group-hover:text-white transition">
                  {React.cloneElement(item.icon, { size: 24 })}
                </span>

                <div>
                  <h3 className="text-[22px] font-semibold text-[#071B34]">
                    {item.text}
                  </h3>
                  <p className="text-[14px] text-slate-500 mt-1">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-[#071B34] text-center">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#8ED8FF] text-[13px] font-semibold uppercase tracking-[0.18em] mb-5">
            Start Learning
          </p>

          <h2 className="text-[36px] 2xl:text-[54px] leading-tight font-semibold text-white mb-6">
            Explore driver information in a clear and simple way.
          </h2>

          <p className="text-[16px] leading-8 text-white/65 mb-10">
            Read educational guides created to help you understand computer
            drivers, device behavior, and hardware communication topics.
          </p>

          <Link
            to="/guides"
            className="inline-flex items-center gap-3 h-[56px] px-8 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
          >
            Explore All Guides <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const InfoRow = ({ icon, number, title, desc }) => (
  <div className="grid grid-cols-[60px_1fr] gap-5 py-8 border-b border-slate-200">
    <span className="w-14 h-14 rounded-full bg-white text-[#315BFF] flex items-center justify-center">
      {React.cloneElement(icon, { size: 23 })}
    </span>

    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[12px] font-semibold text-[#315BFF]">
          {number}
        </span>
        <span className="w-8 h-px bg-slate-300" />
        <span className="text-[12px] uppercase tracking-wider text-slate-400">
          Learning Point
        </span>
      </div>

      <h3 className="text-[24px] font-semibold text-[#071B34] mb-2">
        {title}
      </h3>
      <p className="text-[15px] leading-7 text-slate-500">{desc}</p>
    </div>
  </div>
);

const StepRow = ({ number, icon, title, desc, active }) => (
  <div className="grid grid-cols-[120px_1fr] items-center gap-8">
    <div className="relative flex items-center justify-center">
      <div
        className={`w-[96px] h-[96px] rounded-full flex items-center justify-center ${active ? "bg-[#315BFF] text-white" : "bg-white text-[#315BFF]"
          }`}
      >
        {React.cloneElement(icon, { size: 38, strokeWidth: 1.6 })}
      </div>

      <span className="absolute left-[92px] top-1/2 w-[55px] border-t border-dashed border-[#315BFF]/40" />

      <span className="absolute -right-[38px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#315BFF] text-white flex items-center justify-center text-[13px] font-bold">
        {number}
      </span>
    </div>

    <div className="bg-white rounded-[12px] px-8 py-7">
      <h3 className="text-[24px] font-semibold text-[#071B34] mb-3">
        {title}
      </h3>
      <p className="text-[15px] leading-7 text-slate-500">{desc}</p>
    </div>
  </div>
);

export default About;