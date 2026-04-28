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

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-blue-600 text-[12px] font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-4 h-4" />
            Knowledge Base
          </div>
          <h1 className="text-[40px] md:text-[50px] font-bold text-[#0F1B3D] tracking-tight mb-4">
            Popular Driver <span className="text-blue-600">Guides</span>
          </h1>
          <p className="text-[#5B6478] text-[18px] max-w-2xl mx-auto font-medium leading-relaxed">
            Step-by-step articles and tutorials to help you troubleshoot and fix hardware communication problems effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidesData.map((guide, index) => (
            <Link 
              key={index}
              to={`/guide/${guide.slug}`}
              className="bg-white rounded-[32px] border border-[#E6ECF8] overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="w-full h-[240px] bg-[#EEF4FF] border-b border-[#E6ECF8] p-8 flex items-center justify-center overflow-hidden">
                <img 
                  src={guide.img} 
                  alt={guide.title} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4 text-[12px] font-bold text-[#5B6478] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    5 Min
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>Tutorial</span>
                </div>

                <h2 className="text-[22px] font-bold text-[#0F1B3D] mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {guide.title}
                </h2>

                <p className="text-[#5B6478] text-[15px] leading-relaxed font-medium mb-8 line-clamp-2">
                  {guide.desc}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[14px] font-bold text-blue-600 uppercase tracking-widest">
                  Read Full Guide
                  <ChevronRight className="w-4 h-4" />
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
