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
  HelpCircle,
  ShieldCheck,
  Zap,
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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#315BFF]"></span>
              <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Our Mission</span>
            </div>

            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-[#071B34] leading-[1.2] mb-8">
              Helping you understand computer hardware <span className="text-[#315BFF]">without complexity.</span>
            </h1>

            <p className="text-[17px] text-slate-500 leading-relaxed mb-6">
              Clear With Us was started to make technology easier for everyone. We know that computer drivers can sound scary or complicated. That's why we write our guides using simple language that anyone can understand.
            </p>

            <p className="text-[17px] text-slate-500 leading-relaxed mb-10">
              Whether you are a student, a professional, or someone who just uses a computer for fun, our site is here to help you learn. We believe that when you understand how your machine works, you can use it better and feel more in control.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 bg-[#315BFF] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Browse Guides <ArrowRight size={18} />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 border border-slate-200 text-[#071B34] px-7 py-3.5 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                Common Questions
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-50 rounded-xl transform translate-x-3 translate-y-3 -z-10"></div>
            <img
              src="/about/abou.png"
              alt="People learning together"
              className="w-full h-[450px] object-cover rounded-xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 px-6 border-y border-slate-100 bg-slate-50/20">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-[#315BFF]"></span>
                <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">How We Help</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#071B34] leading-tight mb-6">
                We explain common topics in <span className="text-[#315BFF]">plain English.</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                We focus on the things you use every day. From the Wi-Fi card that connects you to the internet, to the printer that handles your documents, we explain it all. Our articles are written by people who love technology but hate technical jargon.
              </p>
            </div>
            <div className="lg:pt-12">
              <p className="text-slate-500 leading-relaxed mb-6">
                Every guide on our site follows a simple path. We start with what the device is, then explain what the driver does, and finally show you how to identify common issues. This step-by-step approach ensures that you never feel lost.
              </p>
              <div className="bg-white p-5 rounded-lg border border-slate-100 border-l-2 border-l-[#315BFF]">
                <p className="text-[13px] font-medium text-slate-600 italic">
                  Important Note: Clear With Us is a place for learning. We provide information to help you understand your computer. We do not offer repair services or one-on-one technical support.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen size={24} strokeWidth={1.5} />}
              title="Easy Guides"
              desc="Simple driver explanations written in clear everyday language."
            />
            <FeatureCard
              icon={<Search size={24} strokeWidth={1.5} />}
              title="Topic Discovery"
              desc="Find driver information by device type or common hardware category."
            />
            <FeatureCard
              icon={<CheckCircle size={24} strokeWidth={1.5} />}
              title="Clear Learning"
              desc="Understand common signs, terms, and driver-related concepts."
            />
            <FeatureCard
              icon={<HelpCircle size={24} strokeWidth={1.5} />}
              title="Beginner Friendly"
              desc="Made for users who want simple knowledge without complex jargon."
            />
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="w-6 h-[1px] bg-[#315BFF]"></span>
              <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">How To Use</span>
              <span className="w-6 h-[1px] bg-[#315BFF]"></span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-[#071B34] mb-4">
              Learn driver basics in <span className="text-[#315BFF]">3 simple steps.</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              Start with a topic, read the simple guide, and understand how device-driver communication works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepItem
              number="01"
              icon={<Zap size={28} strokeWidth={1.5} />}
              title="Choose a Topic"
              desc="Select a category such as WiFi, audio, graphics, USB, printer, Bluetooth, or chipset."
            />
            <StepItem
              number="02"
              icon={<Search size={28} strokeWidth={1.5} />}
              title="Read the Guide"
              desc="Go through simple explanations created for everyday computer users."
            />
            <StepItem
              number="03"
              icon={<CheckCircle size={28} strokeWidth={1.5} />}
              title="Understand basics"
              desc="Learn how drivers help hardware and system software communicate."
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 bg-[#315BFF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Explore All Guides <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-20 px-6 bg-[#071B34] text-white relative">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-blue-400">
                <span className="w-8 h-[1px] bg-blue-400"></span>
                <span className="text-xs font-semibold uppercase tracking-widest">Topics We Cover</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">
                Common driver categories <span className="text-blue-400">explained simply.</span>
              </h2>
            </div>
            <p className="text-blue-100/60 text-[16px] leading-relaxed lg:pb-1">
              Browse clear information about device-driver areas that affect everyday computer use. We break down the technical parts into easy bits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <TopicMiniCard icon={<Monitor size={22} strokeWidth={1.5} />} title="Graphics" />
            <TopicMiniCard icon={<Volume2 size={22} strokeWidth={1.5} />} title="Audio" />
            <TopicMiniCard icon={<Wifi size={22} strokeWidth={1.5} />} title="Network" />
            <TopicMiniCard icon={<Printer size={22} strokeWidth={1.5} />} title="Printer" />
            <TopicMiniCard icon={<Usb size={22} strokeWidth={1.5} />} title="USB" />
            <TopicMiniCard icon={<Cpu size={22} strokeWidth={1.5} />} title="Chipset" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1600px] mx-auto bg-blue-50/50 rounded-xl p-8 md:p-14 text-center border border-blue-100/50">
          <ShieldCheck size={40} strokeWidth={1.5} className="text-[#315BFF] mx-auto mb-6" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#071B34] mb-6">
            Ready to learn more about your devices?
          </h2>
          <p className="text-slate-500 text-[17px] mb-8 max-w-2xl mx-auto">
            Read educational guides created to help you understand computer drivers, device behavior, and hardware communication topics.
          </p>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 bg-[#315BFF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-100"
          >
            Start Exploring <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg border border-slate-100 hover:border-blue-100 transition-colors group">
    <div className="text-[#315BFF] mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-[#071B34] mb-2">{title}</h3>
    <p className="text-slate-400 text-[13px] leading-relaxed">{desc}</p>
  </div>
);

const StepItem = ({ number, icon, title, desc }) => (
  <div className="relative p-6 rounded-lg border border-slate-100 bg-white group hover:border-blue-100 transition-colors">
    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#315BFF] text-white rounded-md flex items-center justify-center font-semibold text-xs">
      {number}
    </div>
    <div className="text-[#315BFF] mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-[#071B34] mb-2">{title}</h3>
    <p className="text-slate-400 text-[13px] leading-relaxed">{desc}</p>
  </div>
);

const TopicMiniCard = ({ icon, title }) => (
  <div className="bg-white/5 border border-white/5 hover:bg-white/10 p-5 rounded-lg text-center transition-colors cursor-default">
    <div className="text-blue-400/80 mb-3 flex justify-center">
      {icon}
    </div>
    <span className="text-[13px] font-medium tracking-wide text-blue-100/80">{title}</span>
  </div>
);

export default About;