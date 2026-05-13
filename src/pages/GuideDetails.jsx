import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
  ArrowRight,
  Lightbulb,
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 font-[Poppins]">
        <h2 className="text-3xl font-semibold text-[#071B34]">
          Guide Not Found
        </h2>
        <p className="text-slate-500 mt-3 mb-8 text-center">
          The guide you are looking for does not exist.
        </p>
        <Link
          to="/guides"
          className="inline-flex items-center gap-2 bg-[#315BFF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Back to Guides <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  const otherGuides = guidesData.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>{guide.title} | Clear With Us Guide</title>
        <meta name="description" content={guide.desc} />
      </Helmet>

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 mb-10 uppercase tracking-widest">
            <Link to="/" className="hover:text-[#315BFF] transition">Home</Link>
            <ChevronRight size={12} strokeWidth={1.5} />
            <Link to="/guides" className="hover:text-[#315BFF] transition">Guides</Link>
            <ChevronRight size={12} strokeWidth={1.5} />
            <span className="text-[#315BFF] truncate max-w-[200px]">{guide.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-[#315BFF]"></span>
                <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Learning Article</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-semibold text-[#071B34] leading-[1.2] mb-8">
                {guide.title}
              </h1>

              <p className="text-[17px] text-slate-500 leading-relaxed max-w-[760px]">
                {guide.content.introduction}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <span className="inline-flex items-center gap-2 h-[40px] px-4 rounded-lg border border-slate-100 bg-white text-[#071B34] text-[13px] font-medium">
                  <Clock size={16} strokeWidth={1.5} className="text-[#315BFF]" />
                  5 Min Read
                </span>

                <span className="inline-flex items-center gap-2 h-[40px] px-4 rounded-lg border border-slate-100 bg-white text-[#071B34] text-[13px] font-medium">
                  <CheckCircle2 size={16} strokeWidth={1.5} className="text-[#315BFF]" />
                  Information Guide
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-50 rounded-xl transform translate-x-3 translate-y-3 -z-10"></div>
              <img
                src={guide.img}
                alt={guide.title}
                className="relative z-10 w-full h-[450px] object-contain rounded-xl border border-slate-100 bg-white p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1600px] mx-auto px-6 py-20 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          <main className="space-y-20">
            {/* Reasons */}
            <div>
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-[1px] bg-[#315BFF]"></span>
                  <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Common Reasons</span>
                </div>

                <h2 className="text-2xl md:text-4xl font-semibold text-[#071B34]">
                  Possible reasons to understand.
                </h2>
              </div>

              <div className="border-t border-slate-100">
                {guide.content.reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[48px_1fr] gap-5 py-6 border-b border-slate-100"
                  >
                    <span className="w-10 h-10 rounded-lg bg-slate-50 text-[#315BFF] flex items-center justify-center">
                      <AlertCircle size={18} strokeWidth={1.5} />
                    </span>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[11px] font-semibold text-[#315BFF]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="w-6 h-[1px] bg-slate-200" />
                        <span className="text-[11px] uppercase tracking-wider text-slate-400">
                          Reason
                        </span>
                      </div>

                      <p className="text-[15px] leading-relaxed text-slate-500">
                        {reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div>
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-[1px] bg-[#315BFF]"></span>
                  <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Helpful Steps</span>
                </div>

                <h2 className="text-2xl md:text-4xl font-semibold text-[#071B34]">
                  Simple steps you can read through.
                </h2>
              </div>

              <div className="space-y-10">
                {guide.content.steps.map((step, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[100px_1fr] items-center gap-8"
                  >
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-20 h-20 rounded-xl flex items-center justify-center ${i === 0
                          ? "bg-[#315BFF] text-white"
                          : "bg-slate-50 text-[#315BFF]"
                          }`}
                      >
                        <Lightbulb size={28} strokeWidth={1.5} />
                      </div>

                      <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#315BFF] text-white flex items-center justify-center text-[11px] font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="border-b border-slate-100 pb-8">
                      <h3 className="text-xl font-semibold text-[#071B34] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#071B34] rounded-xl px-8 md:px-12 py-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl -mr-32 -mt-32 rounded-full"></div>
              
              <h3 className="text-2xl md:text-4xl font-semibold text-white mb-5 relative z-10">
                Want to learn more driver topics?
              </h3>

              <p className="text-[16px] text-blue-100/60 max-w-[720px] mx-auto mb-9 relative z-10">
                Browse the full library of simple educational guides about
                computer drivers and device communication.
              </p>

              <Link
                to="/guides"
                className="inline-flex items-center gap-2 bg-[#315BFF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors relative z-10"
              >
                View All Guides <ArrowRight size={18} />
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-10 lg:sticky lg:top-28 self-start">
            <div className="border-t border-slate-100">
              <h3 className="text-xl font-semibold text-[#071B34] py-6 flex items-center gap-3 border-b border-slate-100">
                <BookOpen size={20} strokeWidth={1.5} className="text-[#315BFF]" />
                Related Reading
              </h3>

              {otherGuides.map((item, i) => (
                <Link
                  key={i}
                  to={`/guide/${item.slug}`}
                  className="group grid grid-cols-[56px_1fr_20px] gap-4 items-center py-5 border-b border-slate-100"
                >
                  <div className="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-50">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-w-[36px] max-h-[36px] object-contain group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div>
                    <h4 className="text-[13px] font-semibold text-[#071B34] leading-snug group-hover:text-[#315BFF] transition line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
                      Information Guide
                    </p>
                  </div>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-slate-300 group-hover:text-[#315BFF] group-hover:translate-x-1 transition"
                  />
                </Link>
              ))}
            </div>

            <div className="bg-blue-50/30 p-6 rounded-lg border border-blue-100/50 border-l-2 border-l-[#315BFF]">
              <h3 className="text-lg font-semibold text-[#071B34] mb-3">
                Educational driver learning
              </h3>

              <p className="text-[13px] leading-relaxed text-slate-500 mb-6">
                Clear With Us explains driver topics in simple language for
                everyday computer users. We do not provide repair, remote access,
                or technical support.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#315BFF] hover:gap-3 transition-all"
              >
                Back To Home <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default GuideDetails;