import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBook, FaShieldAlt, FaLightbulb, FaTools, FaCheckCircle, FaSearch
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>About Us | Mister PC Driver - Step-by-Step Fix Guides</title>
        <meta name="description" content="Learn how Mister PC Driver helps you solve hardware driver issues with easy-to-follow manuals and guides." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#F8FAFC] text-center border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-6">
            Self-Help Resource
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Helping You Fix <br />
            <span className="text-blue-600">Driver Issues</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            Mister PC Driver is a collection of simple, step-by-step guides designed to help you 
            troubleshoot and install hardware drivers on your own.
          </p>
        </div>
      </section>

      {/* Core Mission */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                What We Do
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Many people struggle with hardware like printers, WiFi, or sound not working 
                correctly because of driver problems. We provide clear instructions to help 
                you identify the issue and find the right solution yourself.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                <p className="text-blue-900 font-bold text-sm">
                  Important Note:
                </p>
                <p className="text-blue-800 text-sm mt-1">
                  We are a documentation site. We provide guides and manuals only. 
                  We do not provide direct technical support or remote assistance.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SimpleCard 
                icon={<FaBook className="text-blue-600" />}
                title="Easy Guides"
                desc="Simple steps for installing and updating drivers."
              />
              <SimpleCard 
                icon={<FaSearch className="text-blue-600" />}
                title="Problem Solving"
                desc="Guides to help you fix common hardware errors."
              />
              <SimpleCard 
                icon={<FaTools className="text-blue-600" />}
                title="Universal Fixes"
                desc="Covers printers, audio, graphics, and more."
              />
              <SimpleCard 
                icon={<FaCheckCircle className="text-blue-600" />}
                title="Free Access"
                desc="All our fix manuals are free to read and follow."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Our Guides */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why Follow Our Manuals?</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">We focus on making technical tasks easy for everyone, regardless of their computer skills.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueItem 
              title="Step-by-Step"
              desc="Our guides are broken down into small, manageable steps so you don't get lost."
            />
            <ValueItem 
              title="Verified Steps"
              desc="We research the most effective ways to solve driver issues before writing our guides."
            />
            <ValueItem 
              title="No Hidden Steps"
              desc="We show you exactly where to go and what to click to get your hardware working."
            />
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">How to Use This Site</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepItem 
              number="01"
              title="Search Your Issue"
              desc="Type your hardware name or the error you're seeing into our search bar."
            />
            <StepItem 
              number="02"
              title="Read the Guide"
              desc="Follow our easy, step-by-step instructions written in plain language."
            />
            <StepItem 
              number="03"
              title="Fix Your Device"
              desc="Apply the steps to your computer and get your hardware back to work."
            />
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Simple Goal</h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            We believe that you shouldn't need to be a computer expert to fix basic hardware problems. 
            Our goal is to give every user the confidence to manage their own PC drivers 
            without needing to pay for expensive technical support.
          </p>
        </div>
      </section>

      {/* Device Coverage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Common Guides We Offer</h2>
              <p className="text-slate-600 mb-8">We are constantly adding new manuals to our archive. Here are the most common hardware issues we help people fix:</p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Printer & Scanners
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  WiFi & Bluetooth
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Audio & Sound
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Graphics & Display
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  USB & Keyboards
                </li>
                <li className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Webcams & Mice
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <p className="text-slate-500 italic text-center">
                "Our guides are designed to be used by anyone, from students to seniors. 
                We keep it simple so you can get things done."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-[#071A3D] rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Need to fix a driver issue?
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
              Browse our archive of guides to find the fix for your specific device.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/guides" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                View All Guides
              </Link>
              <Link to="/faq" className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition">
                Common Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SimpleCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <div className="text-xl mb-3">{icon}</div>
    <h4 className="font-bold text-slate-900 mb-1 text-sm uppercase tracking-wide">{title}</h4>
    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const ValueItem = ({ title, desc }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center">
    <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StepItem = ({ number, title, desc }) => (
  <div className="relative p-8 rounded-2xl border border-slate-100 bg-slate-50/50">
    <span className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-200">
      {number}
    </span>
    <h4 className="text-lg font-bold text-slate-900 mb-3 mt-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;
