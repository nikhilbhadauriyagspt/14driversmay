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
        <h2 className="text-[34px] md:text-[44px] font-semibold text-slate-900">
          Guide Not Found
        </h2>
        <p className="text-slate-500 mt-3 mb-8 text-center">
          The guide you are looking for does not exist.
        </p>
        <Link
          to="/guides"
          className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
        >
          Back to Guides <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  const otherGuides = guidesData.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <div className="bg-white min-h-screen pt-0 pb-20 font-[Poppins]">
      <Helmet>
        <title>{guide.title} | Aura Learning Guide</title>
        <meta name="description" content={guide.desc} />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-[#f7f9ff] py-24 px-6 overflow-hidden">
        <div className="absolute top-[-140px] right-[-120px] w-[420px] h-[420px] rounded-full bg-blue-100 blur-[80px]" />
        <div className="absolute bottom-[-170px] left-[-120px] w-[420px] h-[420px] rounded-full bg-indigo-100 blur-[90px]" />

        <div className="relative z-10 max-w-[1500px] mx-auto">
          <div className="flex items-center gap-3 text-[12px] font-medium text-slate-500 mb-10">
            <Link to="/" className="hover:text-[#2563eb] transition">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/guides" className="hover:text-[#2563eb] transition">
              Guides
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#2563eb] truncate">{guide.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                  <BookOpen size={18} />
                </span>
                <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                  Learning Article
                </span>
              </div>

              <h1 className="text-[34px] md:text-[48px] font-semibold leading-tight text-[#202124] mb-7">
                {guide.title}
              </h1>

              <p className="text-[16px] leading-[1.9] text-slate-600 max-w-[760px]">
                {guide.content.introduction}
              </p>

              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-[14px] font-medium text-slate-500">
                  <Clock size={16} className="text-[#2563eb]" />
                  5 Min Read
                </div>

                <div className="flex items-center gap-2 text-[14px] font-medium text-[#10b981]">
                  <CheckCircle2 size={16} />
                  Information Guide
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center min-h-[500px]">
              <div className="absolute w-[430px] h-[430px] rounded-full bg-[#eaf4ff]" />
              <div className="absolute top-12 right-8 w-20 h-20 rounded-full border border-dashed border-[#2563eb]/40" />
              <div className="absolute bottom-16 left-10 w-24 h-24 rounded-full bg-white/70" />

              <img
                src={guide.img}
                alt={guide.title}
                className="relative z-10 w-full max-w-[430px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1500px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* Main */}
          <main className="space-y-20">
            {/* Common Reasons */}
            <div>
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                    <AlertCircle size={18} />
                  </span>
                  <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                    Common Reasons
                  </span>
                </div>

                <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124]">
                  Possible reasons to understand.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {guide.content.reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 p-6 rounded-[26px] bg-[#f8fbff] border border-[#e2e8ff] hover:border-[#2563eb]/40 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-full bg-white text-[#2563eb] flex items-center justify-center shrink-0 group-hover:bg-[#2563eb] group-hover:text-white transition">
                      <AlertCircle size={19} />
                    </div>

                    <p className="text-[15px] leading-relaxed text-slate-600">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                    <Lightbulb size={18} />
                  </span>
                  <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                    Helpful Steps
                  </span>
                </div>

                <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124]">
                  Simple steps you can read through.
                </h2>
              </div>

              <div className="divide-y divide-slate-200">
                {guide.content.steps.map((step, i) => (
                  <div key={i} className="group flex gap-6 py-8">
                    <div className="w-12 h-12 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center text-[16px] font-semibold shrink-0 group-hover:bg-[#2563eb] group-hover:text-white transition">
                      {i + 1}
                    </div>

                    <div>
                      <h3 className="text-[22px] font-semibold text-slate-900 mb-3 group-hover:text-[#2563eb] transition">
                        {step.title}
                      </h3>
                      <p className="text-[16px] leading-[1.85] text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="relative bg-[#f7f9ff] rounded-[36px] px-8 md:px-12 py-12 overflow-hidden text-center border border-[#e2e8ff]">
              <div className="absolute right-[-80px] top-[-80px] w-[220px] h-[220px] bg-blue-100 rounded-full blur-[50px]" />

              <div className="relative z-10 max-w-[720px] mx-auto">
                <h3 className="text-[28px] md:text-[38px] font-semibold text-[#202124] mb-4">
                  Want to learn more driver topics?
                </h3>

                <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
                  Browse our full library of simple information guides about
                  computer drivers and device communication.
                </p>

                <Link
                  to="/guides"
                  className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
                >
                  View All Guides
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 self-start">
            <div className="bg-[#f8fbff] rounded-[30px] border border-[#e2e8ff] p-7">
              <h3 className="text-[22px] font-semibold text-slate-900 mb-7 flex items-center gap-3">
                <BookOpen size={21} className="text-[#2563eb]" />
                Related Reading
              </h3>

              <div className="space-y-4">
                {otherGuides.map((item, i) => (
                  <Link
                    key={i}
                    to={`/guide/${item.slug}`}
                    className="group flex gap-4 items-center py-4 border-b border-slate-200/70 last:border-b-0"
                  >
                    <div className="w-16 h-16 rounded-[18px] bg-white flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="max-w-[46px] max-h-[46px] object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-[14px] font-semibold text-slate-900 leading-snug group-hover:text-[#2563eb] transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-slate-500 mt-1">
                        Information Guide
                      </p>
                    </div>

                    <ArrowRight
                      size={15}
                      className="text-slate-300 group-hover:text-[#2563eb] group-hover:translate-x-1 transition"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[30px] border border-slate-200 p-7">
              <div className="w-14 h-14 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-6">
                <BookOpen size={26} />
              </div>

              <h3 className="text-[24px] font-semibold text-slate-900 mb-4">
                Easy driver learning
              </h3>

              <p className="text-[15px] leading-relaxed text-slate-500 mb-7">
                Aura Learning explains driver topics in simple language for
                everyday computer users.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2563eb] hover:gap-4 transition-all"
              >
                Back To Home <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default GuideDetails;