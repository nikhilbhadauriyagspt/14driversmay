import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { guidesData } from "../data/guidesData";

const GuideDetails = () => {
  const { slug } = useParams();
  const guide = guidesData.find((g) => g.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!guide) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h2 className="text-[30px] md:text-[40px] font-semibold text-slate-900">
          Guide Not Found
        </h2>

        <p className="text-slate-500 mt-3 mb-8 text-center">
          The guide you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center h-[56px] px-10 rounded-full btn-gradient text-white text-[15px] font-medium shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const otherGuides = guidesData
    .filter((g) => g.slug !== slug)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-24 pb-24 font-[Poppins]">
      <Helmet>
        <title>{guide.title} | Pix Circuit Guide</title>
        <meta name="description" content={guide.desc} />
      </Helmet>

      {/* HERO SECTION - Simple & Informative */}
      <section className="relative bg-[#F8FAFC] py-20 px-6 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#005DE0]/5 -skew-x-12 transform origin-top-right"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          {/* Breadcrumb - Clean & Simple */}
          <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-[#005DE0] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-300" />
            <Link to="/guides" className="hover:text-[#005DE0] transition-colors">Guides</Link>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-[#005DE0] truncate">{guide.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                  Learning Article
                </span>
              </div>

              <h1 className="text-[30px] md:text-[40px] font-semibold leading-[1.2] text-slate-900 mb-8">
                {guide.title}
              </h1>

              <p className="text-[16px] md:text-[18px] leading-[1.8] text-slate-500 max-w-[700px]">
                {guide.content.introduction}
              </p>

              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-[14px] font-medium text-slate-600">
                  <Clock size={16} className="text-[#005DE0]" />
                  5 Min Read
                </div>

                <div className="flex items-center gap-2 text-[14px] font-medium text-[#10B981]">
                  <CheckCircle2 size={16} />
                  Verified Guide
                </div>
              </div>
            </div>

            {/* Right Side Image - Clean Frame */}
            <div className="lg:col-span-5">
              <div className="bg-white p-10 rounded-sm border border-slate-100 shadow-xl shadow-blue-900/5">
                <img
                  src={guide.img}
                  alt={guide.title}
                  className="w-full h-auto max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="max-w-[1600px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-20">

            {/* Reasons Section */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3">
                <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                <h2 className="text-[24px] md:text-[30px] font-semibold text-slate-900">
                  Common Reasons
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guide.content.reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-sm bg-slate-50 border border-slate-100 flex gap-4 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#005DE0]/10 text-[#005DE0] flex items-center justify-center shrink-0">
                      <AlertCircle size={20} />
                    </div>
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps Section */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3">
                <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                <h2 className="text-[24px] md:text-[30px] font-semibold text-slate-900">
                  Helpful Steps To Take
                </h2>
              </div>

              <div className="space-y-6">
                {guide.content.steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row gap-8 p-10 rounded-sm bg-white border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#005DE0] text-white flex items-center justify-center text-[20px] font-bold shrink-0">
                      {i + 1}
                    </div>

                    <div>
                      <h3 className="text-[22px] font-semibold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-[16px] leading-[1.8] text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Strip */}
            <div className="bg-[#050A33] p-12 rounded-sm relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left">
                  <h3 className="text-[24px] md:text-[30px] font-semibold mb-4">
                    Want to learn more?
                  </h3>
                  <p className="text-white/60 text-[16px] max-w-[450px]">
                    Browse our full library of simple guides to understand your computer better.
                  </p>
                </div>

                <Link
                  to="/guides"
                  className="inline-flex items-center justify-center h-[56px] px-10 rounded-sm btn-gradient text-white text-[15px] font-medium shadow-lg"
                >
                  View All Guides
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* SIDEBAR AREA */}
          <aside className="lg:col-span-4 space-y-10">

            {/* Related Guides List */}
            <div className="p-8 rounded-sm bg-slate-50 border border-slate-100">
              <h3 className="text-[20px] font-semibold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#005DE0]"></div>
                Related Reading
              </h3>

              <div className="space-y-5">
                {otherGuides.map((item, i) => (
                  <Link
                    key={i}
                    to={`/guide/${item.slug}`}
                    className="group flex gap-4 items-center p-3 rounded-sm hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100"
                  >
                    <div className="w-16 h-16 rounded-sm bg-white p-2 border border-slate-50 flex items-center justify-center shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-[14px] font-semibold text-slate-900 leading-tight group-hover:text-[#005DE0] transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Simple Info Box */}
            <div className="p-10 rounded-sm bg-[#050A33] text-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></div>

              <BookOpen size={40} className="text-[#005DE0] mb-8 group-hover:scale-110 transition-transform duration-500" />

              <h3 className="text-[24px] font-semibold mb-6">
                Easy Computer Learning
              </h3>

              <p className="text-white/60 text-[15px] leading-relaxed mb-10">
                A simple place to learn about computer parts and how they work.
              </p>

              <Link
                to="/"
                className="text-[13px] font-semibold uppercase tracking-widest text-[#005DE0] flex items-center gap-2 group/link"
              >
                Back To Home <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
};

export default GuideDetails;