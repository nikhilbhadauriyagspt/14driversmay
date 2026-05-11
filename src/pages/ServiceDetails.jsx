import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  BookOpen,
  AlertCircle,
  Cpu,
  ArrowLeft,
  Clock,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { servicesData } from "../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBFF] p-6">
        <h2 className="text-2xl font-black text-slate-900">
          Resource not found
        </h2>

        <Link
          to="/"
          className="mt-5 inline-flex items-center gap-2 bg-[#0C66E5] text-white px-6 py-3 text-sm font-black hover:bg-[#084db3] transition"
        >
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F7FBFF] min-h-screen font-[Poppins] text-slate-900 overflow-hidden">
      <Helmet>
        <title>{service.title} Guide | Aura Learning</title>

        <meta
          name="description"
          content={`Information about ${service.title} and how it works.`}
        />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-white">
        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#0C66E5]" />
        <div className="absolute left-0 bottom-0 w-[260px] h-[260px] rounded-full bg-blue-100 blur-3xl" />

        <div className="relative z-10 max-w-[1450px] mx-auto px-6 pt-28 pb-20">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-slate-500 mb-10">
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

            <span className="text-slate-950">{service.title}</span>
          </div>

          {/* Main Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#0C66E5] mb-6">
                <Cpu size={13} />
                Driver Information
              </div>

              <h1 className="text-[40px] md:text-[70px] font-black leading-[0.98] text-slate-950 mb-8">
                {service.title}
              </h1>

              <p className="text-[16px] md:text-[18px] leading-[1.9] text-slate-600 max-w-[820px]">
                {service.shortDesc}
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <div className="flex items-center gap-2 text-[13px] font-[500]text-slate-600">
                  <Clock size={15} className="text-[#0C66E5]" />
                  Updated Recently
                </div>

                <div className="flex items-center gap-2 text-[13px] font-[500]text-emerald-600">
                  <CheckCircle2 size={15} />
                  Verified Information
                </div>
              </div>
            </div>

            {/* Side Box */}
            <div className="bg-[#0C66E5] text-white p-8">
              <BookOpen size={30} className="mb-6" />

              <h3 className="text-[28px] font-black leading-tight mb-5">
                Educational Resource
              </h3>

              <p className="text-[15px] leading-[1.9] text-white/85 mb-8">
                Learn how device communication works and understand common
                driver-related topics.
              </p>

              <Link
                to="/guides"
                className="inline-flex items-center gap-2 bg-white text-[#0C66E5] px-5 py-3 text-[13px] font-black hover:bg-blue-50 transition"
              >
                Browse Guides
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-[1450px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-10">
          {/* Main Column */}
          <article className="space-y-14">
            {/* What is it */}
            <section className="bg-white border border-blue-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#0C66E5] text-white flex items-center justify-center">
                  <BookOpen size={20} />
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0C66E5] mb-1">
                    Guide Overview
                  </p>

                  <h2 className="text-[32px] font-black text-slate-950">
                    What is it?
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-[16px] leading-[2] text-slate-600">
                <p>{service.longDesc}</p>

                <p>
                  This guide helps you understand how{" "}
                  <strong>{service.title}</strong> works and how it relates to
                  your computer hardware.
                </p>
              </div>
            </section>

            {/* Features */}
            <section className="bg-white border border-blue-100 p-8 md:p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0C66E5] mb-2">
                    Information
                  </p>

                  <h2 className="text-[32px] font-black text-slate-950">
                    Features
                  </h2>
                </div>

                <div className="hidden md:flex text-[70px] font-black text-blue-50">
                  01
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 bg-[#F8FBFF] p-5 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 bg-[#0C66E5] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} />
                    </div>

                    <p className="text-[15px] leading-[1.8] text-slate-700 font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Problems */}
            <section className="bg-white border border-blue-100 p-8 md:p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0C66E5] mb-2">
                    Learning Topics
                  </p>

                  <h2 className="text-[32px] font-black text-slate-950">
                    Common Problems
                  </h2>
                </div>

                <div className="hidden md:flex text-[70px] font-black text-blue-50">
                  02
                </div>
              </div>

              <div className="space-y-5">
                {service.issues.map((issue, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 bg-[#F8FBFF] p-6 flex gap-5"
                  >
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <AlertCircle size={20} />
                    </div>

                    <div>
                      <h4 className="text-[18px] font-black text-slate-950 mb-2">
                        {issue.problem}
                      </h4>

                      <p className="text-[15px] leading-[1.8] text-slate-600">
                        {issue.symptom}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Nav */}
            <div className="flex flex-wrap items-center justify-between gap-5 pt-2">
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 bg-[#0C66E5] text-white px-7 py-4 text-[14px] font-black hover:bg-[#084db3] transition"
              >
                <BookOpen size={16} />
                View More Guides
              </Link>

              <button className="text-[14px] font-[500]text-slate-500 hover:text-[#0C66E5] transition">
                Report a mistake
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-28 bg-white border border-blue-100 p-7">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0C66E5] mb-2">
                    More Topics
                  </p>

                  <h3 className="text-[24px] font-black text-slate-950">
                    Other Guides
                  </h3>
                </div>

                <div className="text-[44px] font-black text-blue-50">
                  +
                </div>
              </div>

              <nav className="space-y-3">
                {servicesData
                  .filter((s) => s.slug !== slug)
                  .slice(0, 8)
                  .map((s, i) => (
                    <Link
                      key={i}
                      to={`/driver/${s.slug}`}
                      className="group border border-slate-100 bg-[#F8FBFF] px-5 py-4 flex items-center justify-between hover:border-[#0C66E5] transition"
                    >
                      <span className="text-[14px] font-[500]text-slate-700 group-hover:text-[#0C66E5] transition leading-[1.5]">
                        {s.title}
                      </span>

                      <ChevronRight
                        size={16}
                        className="text-slate-300 group-hover:text-[#0C66E5] transition"
                      />
                    </Link>
                  ))}
              </nav>

              <div className="mt-8 bg-[#0C66E5] text-white p-6">
                <h4 className="text-[20px] font-black mb-4">
                  Explore More Guides
                </h4>

                <p className="text-[14px] leading-[1.8] text-white/80 mb-6">
                  Browse our full educational driver information library.
                </p>

                <Link
                  to="/guides"
                  className="inline-flex items-center gap-2 text-[13px] font-black text-white hover:text-blue-100 transition"
                >
                  All Guides
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetails;