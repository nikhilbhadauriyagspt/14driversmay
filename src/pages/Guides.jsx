import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Clock, ArrowRight } from "lucide-react";
import { guidesData } from "../data/guidesData";

const Guides = () => {
  return (
    <div className="bg-white min-h-screen pt-24 font-[Poppins]">
      <Helmet>
        <title>Our Driver Guides | Simple Information | Pix Circuit</title>
        <meta
          name="description"
          content="Browse our library of simple driver guides to understand printer, audio, wifi, and graphics topics on your computer."
        />
      </Helmet>

      {/* Header Section */}
      <section className="relative bg-[#F8FAFC] px-6 py-24 overflow-hidden">
        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#005DE0]/5 -skew-x-12 transform origin-top-right"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
              <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                Learning Library
              </span>
            </div>

            <h1 className="text-[30px] md:text-[40px] font-semibold text-slate-900 leading-[1.2] mb-6">
              Simple Guides To <br />
              Understand Your Computer
            </h1>

            <p className="text-slate-500 text-[16px] md:text-[18px] max-w-2xl leading-relaxed">
              We provide easy-to-read articles that help you understand how different parts of your computer talk to each other.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="px-6 lg:px-10 py-24 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidesData.map((guide, index) => (
              <Link
                key={index}
                to={`/guide/${guide.slug}`}
                className="group flex flex-col bg-white border border-slate-100 hover:border-[#005DE0]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 rounded-sm overflow-hidden"
              >
                {/* Image Container - Square & Minimal Radius */}
                <div className="bg-slate-50 p-8 flex items-center justify-center aspect-video border-b border-slate-50">
                  <img
                    src={guide.img}
                    alt={guide.title}
                    className="max-w-[160px] max-h-[120px] object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-semibold text-[#005DE0] uppercase tracking-widest">
                      Guide
                    </span>
                    <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Clock size={12} />
                      5 Min Read
                    </span>
                  </div>

                  <h2 className="text-[20px] font-semibold text-slate-900 mb-4 group-hover:text-[#005DE0] transition-colors leading-tight">
                    {guide.title}
                  </h2>

                  <p className="text-slate-500 text-[14px] leading-relaxed mb-8 line-clamp-2">
                    {guide.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-[13px] font-semibold text-[#005DE0] uppercase tracking-wider">
                    Read This Guide
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Need More Info Strip */}
      <section className="bg-[#050A33] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></div>
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-[24px] md:text-[30px] font-semibold text-white mb-2">Can't find what you need?</h2>
            <p className="text-white/60 text-[16px]">Explore our common questions for more help.</p>
          </div>
          <Link
            to="/faq"
            className="inline-flex items-center justify-center h-[56px] px-10 rounded-sm border border-white/20 text-white text-[15px] font-medium hover:bg-white hover:text-[#050A33] transition-all"
          >
            Read Common Questions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Guides;