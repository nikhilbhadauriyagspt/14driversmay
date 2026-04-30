import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Clock } from "lucide-react";
import { guidesData } from "../data/guidesData";

const Guides = () => {
  return (
    <div className="bg-[#F7FAFF] min-h-screen pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>Popular Driver Guides | Step-by-Step Fixes | DriverZenith</title>
        <meta name="description" content="Browse our library of popular driver guides to fix printer, audio, wifi, and graphics driver issues on your Windows PC." />
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[12px] font-semibold uppercase tracking-widest mb-6">
            <BookOpen className="w-4 h-4" />
            Information Library
          </div>
          <h1 className="text-[36px] md:text-[46px] font-bold text-[#07153A] tracking-tight mb-4">
            Browse All <span className="text-blue-600 font-bold">Guides</span>
          </h1>
          <p className="text-[#667085] text-[16px] max-w-2xl mx-auto font-medium leading-relaxed">
            Simple step-by-step articles to help you understand and resolve common hardware communication issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidesData.map((guide, index) => (
            <Link 
              key={index}
              to={`/guide/${guide.slug}`}
              className="bg-white rounded-[10px] border border-[#E6ECF8] overflow-hidden group hover:border-blue-400 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-full h-[220px] bg-white border-b border-[#F0F4FA] p-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={guide.img} 
                  alt={guide.title} 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 text-[11px] font-semibold text-[#667085] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    5 Min
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>Technical Guide</span>
                </div>

                <h2 className="text-[19px] font-bold text-[#07153A] mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {guide.title}
                </h2>

                <p className="text-[#667085] text-[14px] leading-relaxed font-medium mb-6 line-clamp-2">
                  {guide.desc}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[13px] font-bold text-blue-600 uppercase tracking-widest">
                  Read Article
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;
