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
  ArrowUpRight,
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBFF] px-6">
        <h2 className="text-3xl font-black text-slate-950">
          Guide Not Found
        </h2>

        <p className="text-slate-500 mt-3 mb-8 text-center">
          The guide you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="bg-[#0C66E5] text-white px-7 py-4 font-black hover:bg-[#084db3] transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const otherGuides = guidesData
    .filter((g) => g.slug !== slug)
    .slice(0, 4);

  return (
    <div className="bg-[#F7FBFF] min-h-screen pt-24 pb-24 font-[Poppins] overflow-hidden">
      <Helmet>
        <title>{guide.title} | Lappy Learns Top Guide</title>
        <meta name="description" content={guide.desc} />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-white border-b border-blue-100 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-[30%] bg-[#0C66E5]" />
        <div className="absolute left-0 bottom-0 w-[280px] h-[280px] rounded-full bg-blue-100 blur-3xl" />

        <div className="relative z-10 max-w-[1450px] mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-black uppercase tracking-wider text-slate-500 mb-10">
            <Link to="/" className="hover:text-[#0C66E5] transition">
              Home
            </Link>

            <ChevronRight size={13} />

            <Link
              to="/guides"
              className="hover:text-[#0C66E5] transition"
            >
              Guides
            </Link>

            <ChevronRight size={13} />

            <span className="text-[#0C66E5] truncate">
              {guide.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-14 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 text-[#0C66E5] text-[11px] font-black uppercase tracking-[0.18em] mb-6">
                <BookOpen size={13} />
                Learning Documentation
              </div>

              <h1 className="text-[40px] md:text-[72px] font-black leading-[0.98] text-slate-950 mb-8">
                {guide.title}
              </h1>

              <p className="text-[16px] md:text-[18px] leading-[1.9] text-slate-600 max-w-[760px]">
                {guide.content.introduction}
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <div className="flex items-center gap-2 text-[13px] font-bold text-slate-600">
                  <Clock size={15} className="text-[#0C66E5]" />
                  5 Min Read
                </div>

                <div className="flex items-center gap-2 text-[13px] font-bold text-emerald-600">
                  <CheckCircle2 size={15} />
                  Educational Resource
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="bg-white border border-blue-100 p-10">
              <img
                src={guide.img}
                alt={guide.title}
                className="w-full h-[320px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="max-w-[1450px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-10">
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            {/* Causes */}
            <div className="bg-white border border-blue-100 p-8 md:p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0C66E5] mb-2">
                    Information
                  </p>

                  <h2 className="text-[34px] font-black text-slate-950">
                    Common Causes
                  </h2>
                </div>

                <div className="hidden md:flex text-[70px] font-black text-blue-50">
                  01
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {guide.content.reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 bg-[#F8FBFF] p-5 flex gap-4"
                  >
                    <div className="w-10 h-10 bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                      <AlertCircle size={18} />
                    </div>

                    <p className="text-[15px] leading-[1.8] text-slate-600 font-medium">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white border border-blue-100 p-8 md:p-10">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0C66E5] mb-2">
                    Learning Steps
                  </p>

                  <h2 className="text-[34px] font-black text-slate-950">
                    Documentation Details
                  </h2>
                </div>

                <div className="hidden md:flex text-[70px] font-black text-blue-50">
                  02
                </div>
              </div>

              <div className="space-y-8">
                {guide.content.steps.map((step, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[70px_1fr] gap-6 border border-slate-100 bg-[#F8FBFF] p-6"
                  >
                    <div className="w-14 h-14 bg-[#0C66E5] text-white flex items-center justify-center text-[18px] font-black">
                      {i + 1}
                    </div>

                    <div>
                      <h3 className="text-[22px] font-black text-slate-950 mb-3">
                        {step.title}
                      </h3>

                      <p className="text-[15px] leading-[1.9] text-slate-600 font-medium">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0C66E5] text-white p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-100 mb-3">
                  Continue Reading
                </p>

                <h3 className="text-[34px] font-black leading-tight mb-4">
                  Explore More Guides
                </h3>

                <p className="text-white/80 text-[15px] leading-[1.8] max-w-[620px]">
                  Browse additional educational topics related to hardware and
                  device communication.
                </p>
              </div>

              <Link
                to="/guides"
                className="bg-white text-[#0C66E5] px-8 py-4 text-[14px] font-black hover:bg-blue-50 transition inline-flex items-center gap-2"
              >
                View All Guides
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            {/* Related */}
            <div className="bg-white border border-blue-100 p-7">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0C66E5] mb-2">
                    More Reading
                  </p>

                  <h3 className="text-[24px] font-black text-slate-950">
                    Related Guides
                  </h3>
                </div>

                <div className="text-[50px] font-black text-blue-50">
                  +
                </div>
              </div>

              <div className="space-y-4">
                {otherGuides.map((item, i) => (
                  <Link
                    key={i}
                    to={`/guide/${item.slug}`}
                    className="group border border-slate-100 bg-[#F8FBFF] p-4 flex gap-4 hover:border-[#0C66E5] transition"
                  >
                    <div className="w-20 h-20 bg-white border border-slate-100 flex items-center justify-center shrink-0 p-2">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div>
                      <h4 className="text-[14px] font-black text-slate-950 leading-[1.5] group-hover:text-[#0C66E5] transition line-clamp-2">
                        {item.title}
                      </h4>

                      <p className="text-[11px] text-[#0C66E5] mt-2 font-black uppercase tracking-[0.14em]">
                        Read Guide
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Box */}
            <div className="bg-white border border-blue-100 p-8">
              <BookOpen
                size={30}
                className="text-[#0C66E5] mb-6"
              />

              <h3 className="text-[28px] font-black leading-tight text-slate-950 mb-5">
                Hardware Topics
              </h3>

              <p className="text-slate-600 text-[15px] leading-[1.9] mb-8">
                Browse our educational driver documentation and hardware
                communication topics.
              </p>

              <Link
                to="/drivers"
                className="inline-flex items-center gap-2 bg-[#0C66E5] text-white px-7 py-4 text-[14px] font-black hover:bg-[#084db3] transition"
              >
                Browse Topics
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default GuideDetails;