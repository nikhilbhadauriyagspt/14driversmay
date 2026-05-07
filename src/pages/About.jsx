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
    <div className="bg-[#F7FBFF] min-h-screen font-[Poppins] overflow-hidden">
      <Helmet>
        <title>
          About Us | Lappy Learns Top - Educational Driver Documentation
        </title>

        <meta
          name="description"
          content="Learn how Lappy Learns Top provides hardware driver information with easy-to-follow documentation and guides."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[35%] h-full bg-white" />
          <div className="absolute right-0 top-0 w-[28%] h-full bg-[#0675DB]" />
        </div>

        <div className="relative z-10 max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-100 bg-white text-[#0675DB] text-[12px] font-black uppercase tracking-[0.18em] mb-7">
              Educational Resource
            </div>

            <h1 className="text-[42px] md:text-[72px] font-black leading-[0.98] text-slate-950 mb-8">
              Helping You <br />
              Understand <span className="text-[#0675DB]">Driver Topics</span>
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[1.9] text-slate-600 max-w-[760px] mb-10">
              Lappy Learns Top is a collection of simple information guides designed
              to help you understand hardware driver data and device
              communication topics in a clear way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/guides"
                className="inline-flex items-center gap-3 bg-[#0675DB] text-white px-8 py-4 text-[14px] font-black hover:bg-[#045fb4] transition"
              >
                Browse Guides
                <FaArrowRight className="text-[13px]" />
              </Link>

              <Link
                to="/faq"
                className="inline-flex items-center gap-3 border border-slate-300 bg-white text-slate-800 px-8 py-4 text-[14px] font-black hover:border-[#0675DB] hover:text-[#0675DB] transition"
              >
                Common Questions
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute bottom-0 w-[420px] h-[420px] bg-[#DDEEFF]" />

            <img
              src="/about/aboutmain.png"
              alt="Driver learning"
              className="relative z-10 max-h-[700px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* INFO BLOCKS */}
      <section className="px-6 pb-24">
        <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10">
          {/* Left Panel */}
          <div className="bg-[#0675DB] text-white p-10 h-fit">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-blue-100 mb-5">
              What We Do
            </p>

            <h2 className="text-[38px] font-black leading-[1.08] mb-6">
              Educational Documentation
            </h2>

            <p className="text-[15px] leading-[1.9] text-white/85 mb-10">
              We provide clear educational information about hardware drivers,
              device communication and system settings in simple language.
            </p>

            <div className="border border-white/15 p-6">
              <p className="text-[14px] font-black uppercase mb-2">
                Important Note
              </p>

              <p className="text-[14px] leading-[1.8] text-white/80">
                We are an educational documentation website and do not provide
                technical support or repair services.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InfoCard
              icon={<FaBook />}
              title="Easy Documentation"
              desc="Simple information guides written in clear language."
            />

            <InfoCard
              icon={<FaSearch />}
              title="Topic Identification"
              desc="Learn how to identify common hardware topics."
            />

            <InfoCard
              icon={<FaTools />}
              title="Universal Topics"
              desc="Printer, WiFi, audio, graphics and more."
            />

            <InfoCard
              icon={<FaCheckCircle />}
              title="Free Learning"
              desc="All educational information is free to read."
            />
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#0675DB] mb-4">
                Why Use Our Guides
              </p>

              <h2 className="text-[38px] md:text-[58px] font-black leading-[1.05] text-slate-950">
                Simple Learning <br />
                Experience
              </h2>
            </div>

            <p className="max-w-[620px] text-[16px] leading-[1.9] text-slate-600">
              We focus on making technical information easy for everyday users
              to understand without complex language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200">
            <WhyCard
              number="01"
              title="Step-by-Step"
              desc="Information broken into small and easy learning sections."
            />

            <WhyCard
              number="02"
              title="Verified Data"
              desc="We research technical information before publishing guides."
            />

            <WhyCard
              number="03"
              title="Clear Topics"
              desc="Understand how settings relate to your hardware."
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6">
        <div className="max-w-[1450px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#0675DB] mb-4">
              How To Use
            </p>

            <h2 className="text-[38px] md:text-[58px] font-black leading-[1.05] text-slate-950">
              Learn In 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Search Your Topic"
              desc="Find your hardware or driver information topic."
            />

            <StepCard
              number="02"
              title="Read The Guide"
              desc="Follow easy educational documentation and examples."
            />

            <StepCard
              number="03"
              title="Understand Devices"
              desc="Learn how computer hardware communication works."
            />
          </div>
        </div>
      </section>

      {/* DEVICE SECTION */}
      <section className="bg-[#0675DB] py-24 px-6 text-white">
        <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-blue-100 mb-4">
              Device Topics
            </p>

            <h2 className="text-[40px] md:text-[62px] font-black leading-[1.02] mb-8">
              Common Guides <br />
              We Cover
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
                  className="border border-white/15 px-5 py-5 text-[15px] font-semibold bg-white/[0.04]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white text-slate-700 p-10">
            <p className="text-[20px] leading-[1.9] font-medium">
              “Our documentation is designed for everyone — from beginners to
              everyday computer users.”
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#0675DB] mb-4">
            Explore More
          </p>

          <h2 className="text-[38px] md:text-[60px] font-black leading-[1.05] text-slate-950 mb-8">
            Learn More About <br />
            Driver Topics
          </h2>

          <p className="max-w-[760px] mx-auto text-[16px] leading-[1.9] text-slate-600 mb-10">
            Browse educational guides created to help you understand hardware,
            system settings and device communication.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/guides"
              className="bg-[#0675DB] text-white px-9 py-4 text-[14px] font-black hover:bg-[#045fb4] transition"
            >
              View All Guides
            </Link>

            <Link
              to="/faq"
              className="border border-slate-300 text-slate-800 px-9 py-4 text-[14px] font-black hover:border-[#0675DB] hover:text-[#0675DB] transition"
            >
              Common Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, desc }) => (
  <div className="bg-white border border-slate-200 p-8 hover:border-[#0675DB] transition">
    <div className="text-[#0675DB] text-[28px] mb-5">{icon}</div>

    <h3 className="text-[20px] font-black text-slate-950 mb-3">
      {title}
    </h3>

    <p className="text-[15px] leading-[1.8] text-slate-600">
      {desc}
    </p>
  </div>
);

const WhyCard = ({ number, title, desc }) => (
  <div className="border-r border-slate-200 last:border-r-0 p-10 bg-white">
    <span className="text-[14px] font-black text-[#0675DB]">
      {number}
    </span>

    <h3 className="text-[28px] font-black text-slate-950 mt-5 mb-4">
      {title}
    </h3>

    <p className="text-[15px] leading-[1.9] text-slate-600">
      {desc}
    </p>
  </div>
);

const StepCard = ({ number, title, desc }) => (
  <div className="bg-white border border-slate-200 p-10 relative">
    <span className="absolute top-0 right-0 bg-[#0675DB] text-white px-5 py-3 text-[14px] font-black">
      {number}
    </span>

    <h3 className="text-[30px] font-black text-slate-950 mb-5 mt-8">
      {title}
    </h3>

    <p className="text-[15px] leading-[1.9] text-slate-600">
      {desc}
    </p>
  </div>
);

export default About;