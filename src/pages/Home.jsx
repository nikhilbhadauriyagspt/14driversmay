import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FAQ from '../components/Faqs';
import CommonProblems from '../components/commanissue';
import WhenNeedDrivers from '../components/needdrivers';
import Driverfixisuue from '../components/driverfixissue';
import Guides from '../components/guides';
import Stats from '../components/stact';
import DriverCategoryMarquee from '../components/drivercategorymarquee';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fix Driver Issues | WiFi, Audio, USB & Printer Solutions</title>
        <meta name="description" content="Technical repository for hardware specifications, driver-level architectural data, and system optimization documentation for the global technical community." />
        <link rel="canonical" href="https://www.misterpcdriver.com" />
      </Helmet>

      <h1 className="sr-only">Fix Driver Issues with Step-by-Step Information Guides</h1>
      <Hero />
      <DriverCategoryMarquee />
      <CommonProblems />
      <WhenNeedDrivers />
      <Driverfixisuue />
      <Guides />
      <Stats />
      <FAQ />

      {/* New Substantive Information Section for SEO */}
      <section className="bg-slate-50 py-20 px-6 font-sans border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Computer's Hardware Communication</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Your computer is a complex assembly of various hardware components, each requiring a specific bridge to communicate with the operating system. These bridges are known as "Drivers." Without the correct information and installation guides, your PC might struggle to recognize new devices or experience performance lags. Our mission is to provide clear, easy-to-follow technical documentation that simplifies this process for everyone.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you are dealing with a printer that won't respond, a WiFi connection that keeps dropping, or a graphics card that isn't rendering correctly, our resource library is designed to help you identify the root cause. We focus on providing verified information that covers chipset architecture, input-output protocols, and system firmware updates.
              </p>
              <div className="flex gap-4">
                <Link to="/about" className="bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition shadow-sm">
                  Learn About Our Mission
                </Link>
                <Link to="/guides" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                  Browse All Guides
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Technical Guides Matter</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">System Stability</p>
                    <p className="text-sm text-slate-500">Correct hardware information prevents random system crashes and blue screen errors by ensuring all parts talk correctly.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Performance Optimization</p>
                    <p className="text-sm text-slate-500">Learn how firmware and chipset updates can unlock the full speed of your processor and data storage devices.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Security & Integrity</p>
                    <p className="text-sm text-slate-500">Our guides emphasize using official sources to protect your system from malicious software disguised as legitimate updates.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;