import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Clock } from "lucide-react";
import { guidesData } from "../data/guidesData";

const Guides = () => {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24 font-[Poppins]">
      <Helmet>
        <title>Popular Driver Documentation | Technical Guides | Lappy Learns Top</title>
        <meta
          name="description"
          content="Browse our library of technical driver guides to understand printer, audio, wifi, and graphics driver topics on your Windows PC."
        />
      </Helmet>

      {/* Header */}
      <section className="relative bg-[#F7FAFF] border-b border-blue-100 px-6 py-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-[32%] h-full bg-[#0C66E5]" />
        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 text-[#0C66E5] text-[12px] font-black uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4" />
              Information Library
            </div>

            <h1 className="text-[42px] md:text-[68px] font-black text-slate-950 leading-[1.02] mb-6">
              Technical <br />
              <span className="text-[#0C66E5]">Documentation</span>
            </h1>

            <p className="text-slate-600 text-[16px] md:text-[18px] max-w-2xl font-medium leading-relaxed">
              Simple step-by-step articles to help you understand common hardware communication topics.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {guidesData.map((guide, index) => (
            <Link
              key={index}
              to={`/guide/${guide.slug}`}
              className="group grid grid-cols-[120px_1fr] sm:grid-cols-[170px_1fr] bg-white border border-slate-200 hover:border-[#0C66E5] transition overflow-hidden"
            >
              <div className="bg-[#F7FAFF] border-r border-slate-200 p-4 flex items-center justify-center min-h-[190px]">
                <img
                  src={guide.img}
                  alt={guide.title}
                  className="max-w-full max-h-[135px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0C66E5]" />
                    5 Min
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>Technical Guide</span>
                </div>

                <h2 className="text-[19px] md:text-[21px] font-black text-slate-950 mb-3 group-hover:text-[#0C66E5] transition leading-snug">
                  {guide.title}
                </h2>

                <p className="text-slate-500 text-[14px] leading-relaxed font-medium mb-6 line-clamp-2">
                  {guide.desc}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-[12px] font-black text-[#0C66E5] uppercase tracking-widest">
                    Read Article
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#0C66E5] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Guides;