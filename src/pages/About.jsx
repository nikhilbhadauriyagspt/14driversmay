import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBook,
  FaSearch,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>
          About Us | Pix Circuit - Educational Driver Documentation
        </title>

        <meta
          name="description"
          content="Learn how Pix Circuit provides hardware driver information with easy-to-follow documentation and guides."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
              <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                Educational Resource
              </span>
            </div>

            <h1 className="text-[30px] md:text-[40px] font-semibold leading-[1.2] text-slate-900 mb-8">
              Helping You Understand <br />
              Computer Parts Easily
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[1.8] text-slate-500 max-w-[680px] mb-10">
              Pix Circuit is a collection of simple information guides designed
              to help you understand hardware driver data and device
              communication topics in a clear way.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/guides"
                className="inline-flex items-center justify-center h-[56px] px-10 rounded-full btn-gradient text-white text-[15px] font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Browse Our Guides
                <FaArrowRight size={14} className="ml-2" />
              </Link>

              <Link
                to="/faq"
                className="inline-flex items-center justify-center h-[56px] px-10 rounded-full border border-slate-200 bg-white text-slate-700 text-[15px] font-medium hover:border-[#005DE0] hover:text-[#005DE0] transition-all"
              >
                Common Questions
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/about/aboutmain.avif"
                alt="Driver learning"
                width="520"
                height="520"
                className="w-full h-auto object-contain bg-white p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFO BLOCKS - Minimal Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Header */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                  What We Do
                </span>
              </div>

              <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight text-slate-900 mb-8">
                Educational Information For Everyone
              </h2>

              <p className="text-[16px] leading-[1.8] text-slate-500 mb-10 max-w-[500px]">
                We provide clear educational information about hardware drivers,
                device communication and system settings in simple language.
              </p>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 border-l-4 border-l-[#005DE0]">
                <p className="text-[14px] font-bold text-slate-900 uppercase tracking-widest mb-3">
                  Important Note
                </p>
                <p className="text-[15px] leading-[1.7] text-slate-600">
                  We are an educational documentation website and do not provide
                  technical support or repair services.
                </p>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard
                icon={<FaBook />}
                title="Easy Guides"
                desc="Simple information guides written in clear language."
              />

              <InfoCard
                icon={<FaSearch />}
                title="Easy Learning"
                desc="Learn how to identify common hardware topics."
              />

              <InfoCard
                icon={<FaTools />}
                title="Simple Topics"
                desc="Printer, WiFi, audio, graphics and more."
              />

              <InfoCard
                icon={<FaCheckCircle />}
                title="Free To Read"
                desc="All educational information is free to read."
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION - Clean Steps */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
              <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                Why Use Our Guides
              </span>
            </div>

            <h2 className="text-[30px] md:text-[40px] font-semibold text-slate-900 mb-6">
              Simple Learning Experience
            </h2>

            <p className="text-[16px] leading-[1.8] text-slate-500">
              We focus on making technical information easy for everyday users
              to understand without any confusion or complex language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <WhyCard
              number="01"
              title="Step-by-Step"
              desc="Information broken into small and easy learning sections."
            />

            <WhyCard
              number="02"
              title="Simple Data"
              desc="We research all information before publishing our guides."
            />

            <WhyCard
              number="03"
              title="Clear Topics"
              desc="Understand how settings relate to your hardware."
            />
          </div>
        </div>
      </section>

      {/* PROCESS - Steps Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
              <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                How To Use
              </span>
            </div>

            <h2 className="text-[30px] md:text-[40px] font-semibold text-slate-900">
              Learn In 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Search Your Topic"
              desc="Find your hardware or driver information topic."
            />

            <StepCard
              number="2"
              title="Read The Guide"
              desc="Follow easy educational documentation and examples."
            />

            <StepCard
              number="3"
              title="Understand Parts"
              desc="Learn how computer hardware communication works."
            />
          </div>
        </div>
      </section>

      {/* DEVICE LIST SECTION - Modern Minimal */}
      <section className="bg-[#050A33] py-24 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-white/20"></span>
              <span className="text-[12px] font-semibold text-white/50 uppercase tracking-[0.25em]">
                Topics We Cover
              </span>
            </div>

            <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight mb-10">
              Common Guides For <br />
              Everyday Computer Use
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Printer & Scanners",
                "WiFi & Bluetooth",
                "Audio & Sound",
                "Graphics & Display",
                "USB & Keyboards",
                "Webcams & Mice",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 border border-white/10 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-[#005DE0]"></div>
                  <span className="text-[15px] font-medium text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 p-12 rounded-[32px] backdrop-blur-sm relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#005DE0] rounded-full flex items-center justify-center text-2xl font-serif text-white">“</div>
              <p className="text-[18px] md:text-[22px] leading-relaxed font-medium text-white/90">
                Our documentation is designed for everyone — from beginners to
                everyday computer users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
            <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
              Start Learning
            </span>
          </div>

          <h2 className="text-[30px] md:text-[40px] font-semibold text-slate-900 mb-8">
            Understand Your Computer Better Today
          </h2>

          <p className="max-w-[700px] mx-auto text-[16px] leading-[1.8] text-slate-500 mb-12">
            Browse our library of simple guides created to help you understand hardware,
            system settings and how your computer parts talk to each other.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/guides"
              className="inline-flex items-center justify-center h-[56px] px-12 rounded-full btn-gradient text-white text-[15px] font-medium shadow-lg transition-all"
            >
              Explore All Guides
            </Link>

            <Link
              to="/faq"
              className="inline-flex items-center justify-center h-[56px] px-12 rounded-full border border-slate-200 bg-white text-slate-700 text-[15px] font-medium hover:border-[#005DE0] hover:text-[#005DE0] transition-all"
            >
              Read Common Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, desc }) => (
  <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[#005DE0]/30 transition-all group">
    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-[#005DE0] text-[24px] mb-6 group-hover:bg-blue-50 transition-colors">
      {icon}
    </div>

    <h3 className="text-[20px] font-semibold text-slate-900 mb-3">
      {title}
    </h3>

    <p className="text-[15px] leading-[1.7] text-slate-500">
      {desc}
    </p>
  </div>
);

const WhyCard = ({ number, title, desc }) => (
  <div className="p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <span className="text-[14px] font-bold text-[#005DE0] uppercase tracking-widest">
      Step {number}
    </span>

    <h3 className="text-[24px] font-semibold text-slate-900 mt-4 mb-4">
      {title}
    </h3>

    <p className="text-[15px] leading-[1.8] text-slate-500">
      {desc}
    </p>
  </div>
);

const StepCard = ({ number, title, desc }) => (
  <div className="bg-slate-50 p-10 rounded-[32px] relative group hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 border border-transparent hover:border-slate-100">
    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[18px] font-bold text-[#005DE0] mb-8 group-hover:bg-[#005DE0] group-hover:text-white transition-all">
      {number}
    </div>

    <h3 className="text-[24px] font-semibold text-slate-900 mb-4">
      {title}
    </h3>

    <p className="text-[15px] leading-[1.8] text-slate-500">
      {desc}
    </p>
  </div>
);

export default About;