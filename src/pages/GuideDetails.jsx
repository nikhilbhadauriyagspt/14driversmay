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
        <h2 className="text-[38px] font-semibold text-[#071B34]">
          Guide Not Found
        </h2>
        <p className="text-slate-500 mt-3 mb-8 text-center">
          The guide you are looking for does not exist.
        </p>
        <Link
          to="/guides"
          className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
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
      <section className="relative bg-[#EEF4FF] px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex items-center gap-3 text-[12px] font-medium text-slate-500 mb-10">
            <Link to="/" className="hover:text-[#315BFF] transition">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/guides" className="hover:text-[#315BFF] transition">
              Guides
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#315BFF] truncate">{guide.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                Learning Article
              </p>

              <h1 className="text-[38px] md:text-[62px] leading-tight font-semibold text-[#071B34] mb-7">
                {guide.title}
              </h1>

              <p className="text-[17px] leading-8 text-slate-600 max-w-[760px]">
                {guide.content.introduction}
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <span className="inline-flex items-center gap-2 h-[42px] px-5 rounded-full bg-white text-[#071B34] text-[14px] font-medium">
                  <Clock size={16} className="text-[#315BFF]" />
                  5 Min Read
                </span>

                <span className="inline-flex items-center gap-2 h-[42px] px-5 rounded-full bg-white text-[#071B34] text-[14px] font-medium">
                  <CheckCircle2 size={16} className="text-[#315BFF]" />
                  Information Guide
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 w-[90%] h-[90%] rounded-[28px] border-[4px] border-[#315BFF]" />
              <img
                src={guide.img}
                alt={guide.title}
                className="relative z-10 w-full h-[560px] object-contain rounded-[28px] bg-white p-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1500px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          <main className="space-y-24">
            {/* Reasons */}
            <div>
              <div className="mb-12">
                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                  Common Reasons
                </p>

                <h2 className="text-[34px] md:text-[48px] leading-tight font-semibold text-[#071B34]">
                  Possible reasons to understand.
                </h2>
              </div>

              <div className="border-t border-slate-200">
                {guide.content.reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[58px_1fr] gap-5 py-7 border-b border-slate-200"
                  >
                    <span className="w-12 h-12 rounded-full bg-[#EEF4FF] text-[#315BFF] flex items-center justify-center">
                      <AlertCircle size={20} />
                    </span>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[12px] font-semibold text-[#315BFF]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="w-8 h-px bg-slate-300" />
                        <span className="text-[12px] uppercase tracking-wider text-slate-400">
                          Reason
                        </span>
                      </div>

                      <p className="text-[16px] leading-8 text-slate-600">
                        {reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div>
              <div className="mb-12">
                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                  Helpful Steps
                </p>

                <h2 className="text-[34px] md:text-[48px] leading-tight font-semibold text-[#071B34]">
                  Simple steps you can read through.
                </h2>
              </div>

              <div className="space-y-12">
                {guide.content.steps.map((step, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[120px_1fr] items-center gap-8"
                  >
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-[96px] h-[96px] rounded-full flex items-center justify-center ${i === 0
                          ? "bg-[#315BFF] text-white"
                          : "bg-[#EEF4FF] text-[#315BFF]"
                          }`}
                      >
                        <Lightbulb size={36} strokeWidth={1.6} />
                      </div>

                      <span className="absolute left-[92px] top-1/2 w-[55px] border-t border-dashed border-[#315BFF]/40" />

                      <span className="absolute -right-[38px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#315BFF] text-white flex items-center justify-center text-[13px] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="border-b border-slate-200 pb-8">
                      <h3 className="text-[25px] font-semibold text-[#071B34] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[16px] leading-8 text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#071B34] rounded-[30px] px-8 md:px-12 py-14 text-center">
              <h3 className="text-[32px] md:text-[46px] leading-tight font-semibold text-white mb-5">
                Want to learn more driver topics?
              </h3>

              <p className="text-[16px] leading-8 text-white/65 max-w-[720px] mx-auto mb-9">
                Browse the full library of simple educational guides about
                computer drivers and device communication.
              </p>

              <Link
                to="/guides"
                className="inline-flex items-center gap-3 h-[56px] px-8 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
              >
                View All Guides <ArrowRight size={18} />
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-10 lg:sticky lg:top-28 self-start">
            <div className="border-t border-slate-200">
              <h3 className="text-[24px] font-semibold text-[#071B34] py-6 flex items-center gap-3 border-b border-slate-200">
                <BookOpen size={22} className="text-[#315BFF]" />
                Related Reading
              </h3>

              {otherGuides.map((item, i) => (
                <Link
                  key={i}
                  to={`/guide/${item.slug}`}
                  className="group grid grid-cols-[64px_1fr_24px] gap-4 items-center py-5 border-b border-slate-200"
                >
                  <div className="w-16 h-16 rounded-[16px] bg-[#F4F7FB] flex items-center justify-center overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-w-[44px] max-h-[44px] object-contain group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div>
                    <h4 className="text-[14px] font-semibold text-[#071B34] leading-snug group-hover:text-[#315BFF] transition line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-slate-500 mt-1">
                      Information Guide
                    </p>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-slate-300 group-hover:text-[#315BFF] group-hover:translate-x-1 transition"
                  />
                </Link>
              ))}
            </div>

            <div className="border-l-4 border-[#315BFF] pl-5">
              <h3 className="text-[24px] font-semibold text-[#071B34] mb-4">
                Educational driver learning
              </h3>

              <p className="text-[15px] leading-7 text-slate-500 mb-6">
                Clear With Us explains driver topics in simple language for
                everyday computer users. We do not provide repair, remote access,
                or technical support.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#315BFF] hover:gap-4 transition-all"
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