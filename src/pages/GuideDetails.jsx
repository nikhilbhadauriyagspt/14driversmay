import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFF] px-6">
        <h2 className="text-xl font-bold text-[#07153A]">Guide Not Found</h2>
        <p className="text-[#667085] mt-2 mb-6">The guide you are looking for does not exist.</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-[10px] font-semibold hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const otherGuides = guidesData.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <div className="bg-[#F7FAFF] min-h-screen pt-24 pb-20 font-[Poppins]">
      <Helmet>
        <title>{guide.title} | DriverZenith Guide</title>
        <meta name="description" content={guide.desc} />
      </Helmet>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#667085] mb-10 uppercase tracking-wider">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <ChevronRight size={14} className="text-slate-300" />
          <Link to="/guides" className="hover:text-blue-600 transition">Guides</Link>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-blue-600 truncate">{guide.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          {/* Main Content */}
          <article className="bg-white rounded-[10px] border border-[#E6ECF8] overflow-hidden">
            {/* Header Image */}
            <div className="w-full h-[280px] md:h-[350px] bg-white flex items-center justify-center p-8 border-b border-[#F0F4FA]">
              <img
                src={guide.img}
                alt={guide.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-6 mb-8 text-[12px] font-bold text-[#667085] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>5 Min Read</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Tutorial</span>
                </div>
              </div>

              <h1 className="text-[30px] md:text-[38px] font-bold text-[#07153A] leading-tight mb-8">
                {guide.title}
              </h1>

              <div className="text-[16px] leading-relaxed text-[#5B6478] font-medium mb-12 p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-[10px]">
                {guide.content.introduction}
              </div>

              {/* Reasons Section */}
              <div className="mb-14">
                <h2 className="text-[22px] font-bold text-[#07153A] mb-6 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Common Causes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guide.content.reasons.map((reason, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-white rounded-[10px] border border-[#F0F4FA]">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <p className="text-[14px] text-[#667085] font-medium leading-relaxed">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Section */}
              <div>
                <h2 className="text-[22px] font-bold text-[#07153A] mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  How to Fix
                </h2>
                <div className="space-y-10">
                  {guide.content.steps.map((step, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[14px]">
                        {i + 1}
                      </div>
                      <h3 className="text-[18px] font-bold text-[#07153A] mb-3">{step.title}</h3>
                      <p className="text-[15px] leading-relaxed text-[#5B6478] font-medium">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple Footer CTA */}
              <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-[14px] text-[#667085] font-medium text-center md:text-left">
                   Want to learn more? Check out our other helpful guides.
                </p>
                <Link
                  to="/guides"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-[10px] font-bold hover:bg-blue-700 transition"
                >
                  View All Guides
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </article>

          {/* Simple Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-[10px] border border-[#E6ECF8] p-6">
              <h3 className="text-[16px] font-bold text-[#07153A] mb-6 uppercase tracking-wider">Related Guides</h3>
              <div className="space-y-5">
                {otherGuides.map((item, i) => (
                  <Link
                    key={i}
                    to={`/guide/${item.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-16 h-16 rounded-[10px] bg-white border border-[#F0F4FA] overflow-hidden shrink-0 flex items-center justify-center p-2">
                      <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#07153A] leading-snug group-hover:text-blue-600 transition line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-blue-600 mt-1 font-bold uppercase tracking-widest">Read Now</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#07153A] rounded-[10px] p-8 text-white">
              <h3 className="text-[20px] font-bold mb-4">Hardware Topics</h3>
              <p className="text-white/60 text-[14px] leading-relaxed mb-6 font-medium">
                Browse our registry of hardware communication and installation protocols.
              </p>
              <Link to="/drivers" className="block w-full bg-blue-600 text-white py-3 rounded-[10px] font-bold text-[14px] hover:bg-blue-700 transition text-center shadow-lg shadow-blue-600/20">
                Browse Topics
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;
