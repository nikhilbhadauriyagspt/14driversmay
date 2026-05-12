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
        <title>About Us | Clear With Us - Driver Information Guides</title>
        <meta
          name="description"
          content="Learn about Clear With Us, an educational driver information website created to explain computer drivers, hardware topics, and device communication in simple language."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-white px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              About Clear With Us
            </p>

            <h1 className="text-[38px] 2xl:text-[62px] leading-tight font-semibold text-[#071B34] mb-7">
              Driver knowledge made{" "}
              <span className="text-[#315BFF]">simple to understand.</span>
            </h1>

            <p className="text-[17px] leading-8 text-slate-500 max-w-[720px] mb-9">
              Clear With Us explains computer drivers, device categories, and
              hardware communication in clear everyday language. Our goal is to
              help users learn driver basics without technical confusion.
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
              alt="Clear With Us educational driver illustration"
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
              What We Do
            </p>

            <h2 className="text-[36px] 2xl:text-[54px] leading-tight font-semibold text-[#071B34] mb-6">
              We explain driver topics without{" "}
              <span className="text-[#315BFF]">support claims.</span>
            </h2>

            <p className="text-[16px] leading-8 text-slate-500 mb-8">
              Our content helps users understand how drivers connect hardware
              with the operating system. We cover WiFi, audio, graphics,
              printer, USB, Bluetooth, chipset, webcam, scanner, and storage
              topics.
            </p>

            <div className="border-l-4 border-[#315BFF] pl-5">
              <p className="text-[15px] leading-7 text-slate-600 font-medium">
                Clear With Us is an information-only website. We do not provide
                repair, remote access, installation, or technical support
                services.
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