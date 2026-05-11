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
        <title>About Us | Aura Learning - Driver Information Guides</title>
        <meta
          name="description"
          content="Learn about Aura Learning, an educational driver information website created to explain computer drivers, hardware topics, and device communication in simple language."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative px-6 bg-[#f7f9ff] overflow-hidden">
        <div className="absolute top-[-140px] right-[-120px] w-[420px] h-[420px] rounded-full bg-blue-100 blur-[80px]" />
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          <div className="relative min-h-[560px] flex items-center justify-center">
            <img
              src="/about/aboutmain_03.webp"
              alt="Driver learning"
              width="800"
              height="600"
              className="relative z-10 w-full  h-auto object-contain"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                <BookOpen size={18} />
              </span>
              <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                About Aura Learning
              </span>
            </div>

            <h1 className="text-[34px] md:text-[48px] font-semibold leading-tight text-[#202124] mb-6">
              Simple driver information for everyday computer users.
            </h1>

            <p className="text-[16px] leading-[1.9] text-slate-600 max-w-[720px] mb-9">
              Aura Learning is an educational website created to explain computer
              drivers, hardware categories, and device communication topics in a
              simple and beginner-friendly way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/guides"
                className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
              >
                Browse Guides <ArrowRight size={18} />
              </Link>

              <Link
                to="/faq"
                className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-white border border-slate-200 text-slate-700 text-[15px] font-semibold hover:border-[#2563eb] hover:text-[#2563eb] transition"
              >
                Common Questions
              </Link>
            </div>
          </div>


        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                <Cpu size={18} />
              </span>
              <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                What We Do
              </span>
            </div>

            <h2 className="text-[32px] md:text-[42px] font-semibold leading-tight text-[#202124] mb-6">
              We explain driver topics without technical confusion.
            </h2>

            <p className="text-[16px] leading-[1.9] text-slate-600 mb-8">
              Our content helps users understand how drivers connect hardware
              with the operating system. We cover topics like WiFi, audio,
              graphics, printer, USB, Bluetooth, chipset, webcam, scanner, and
              storage drivers.
            </p>

            <div className="inline-flex items-start gap-4 bg-[#f7f9ff] rounded-[24px] px-6 py-5 border border-[#e2e8ff]">
              <ShieldCheck className="text-[#2563eb] shrink-0 mt-1" size={24} />
              <p className="text-[15px] leading-relaxed text-slate-600">
                Aura Learning is an information-only learning website. We do not
                provide repair, remote access, or technical support services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InfoCard icon={<BookOpen />} title="Easy Guides" desc="Simple driver explanations written in clear everyday language." />
            <InfoCard icon={<Search />} title="Topic Discovery" desc="Find driver information by device type or common hardware category." />
            <InfoCard icon={<CheckCircle />} title="Clear Learning" desc="Understand common signs, terms, and driver-related concepts." />
            <InfoCard icon={<HelpCircle />} title="Beginner Friendly" desc="Made for users who want simple knowledge without complex jargon." />
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-24 px-6 bg-[#f7f9ff]">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
              How To Use
            </span>
            <h2 className="text-[32px] md:text-[42px] font-semibold text-[#202124] mt-4">
              Learn in 3 simple steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard number="01" title="Choose a Topic" desc="Select a driver category such as WiFi, audio, graphics, USB, printer, or Bluetooth." />
            <StepCard number="02" title="Read the Guide" desc="Go through simple explanations created for everyday computer users." />
            <StepCard number="03" title="Understand the Basics" desc="Learn how drivers help hardware and system software communicate." />
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
              Topics We Cover
            </span>
            <h2 className="text-[32px] md:text-[42px] font-semibold text-[#202124] leading-tight mt-4 mb-6">
              Common driver categories explained simply.
            </h2>
            <p className="text-[16px] leading-[1.9] text-slate-600">
              Browse clear information about common device-driver areas that
              affect everyday computer use.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: <Monitor />, text: "Graphics" },
              { icon: <Volume2 />, text: "Audio" },
              { icon: <Wifi />, text: "Network" },
              { icon: <Printer />, text: "Printer" },
              { icon: <Usb />, text: "USB" },
              { icon: <Cpu />, text: "Chipset" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-5 border-b border-slate-200"
              >
                <span className="w-11 h-11 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                  {React.cloneElement(item.icon, { size: 20 })}
                </span>
                <span className="text-[15px] font-semibold text-slate-800">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-[#f7f9ff] text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-[#202124] mb-6">
            Start exploring driver information today.
          </h2>

          <p className="text-[16px] leading-[1.8] text-slate-600 mb-10">
            Read simple guides created to help you understand computer drivers,
            device behavior, and hardware communication topics.
          </p>

          <Link
            to="/guides"
            className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
          >
            Explore All Guides <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, desc }) => (
  <div className="group py-7 border-b border-slate-200 hover:border-[#2563eb]/50 transition">
    <div className="w-12 h-12 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-5 group-hover:bg-[#2563eb] group-hover:text-white transition">
      {icon}
    </div>
    <h3 className="text-[20px] font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-[15px] leading-relaxed text-slate-500">{desc}</p>
  </div>
);

const StepCard = ({ number, title, desc }) => (
  <div className="bg-white rounded-[26px] p-8 border border-[#e2e8ff]">
    <span className="text-[14px] font-semibold text-[#2563eb]">{number}</span>
    <h3 className="text-[23px] font-semibold text-slate-900 mt-4 mb-3">
      {title}
    </h3>
    <p className="text-[15px] leading-relaxed text-slate-500">{desc}</p>
  </div>
);

export default About;