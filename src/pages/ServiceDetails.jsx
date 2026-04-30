import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ChevronRight, 
  BookOpen, 
  Info, 
  AlertCircle, 
  Cpu, 
  ArrowLeft,
  ExternalLink,
  Clock,
  CheckCircle2
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Resource not found</h2>
        <Link to="/" className="mt-4 text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 antialiased">
      <Helmet>
        <title>{service.title} Guide | Mister PC Driver</title>
        <meta name="description" content={`Information about ${service.title} and how it works.`} />
      </Helmet>

      {/* Breadcrumbs */}
      <nav className="pt-28 pb-6 px-6 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2 text-[13px] text-slate-500 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/guides" className="hover:text-blue-600 transition-colors">Guides</Link>
          <ChevronRight size={12} />
          <span className="text-slate-900">{service.title}</span>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
          
          {/* Main Content Column */}
          <article className="max-w-3xl">
            <header className="mb-12">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-[11px] uppercase tracking-wider mb-4">
                <Cpu size={14} /> Part Information
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                {service.title}
              </h1>
              <div className="flex items-center gap-6 text-[13px] text-slate-500 border-y border-slate-50 py-4">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} /> Updated Recently
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 size={14} /> Verified Information
                </div>
              </div>
            </header>

            <section className="prose prose-slate prose-lg max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.shortDesc}
              </p>
              
              <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4">What is it?</h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>{service.longDesc}</p>
                <p>
                  This guide helps you understand how <strong>{service.title}</strong> helps your computer work and what to do if you have problems.
                </p>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mt-12 mb-6">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100 text-[14px] font-medium text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-slate-900 mt-12 mb-6">Common Problems</h2>
              <div className="space-y-4 not-prose">
                {service.issues.map((issue, i) => (
                  <div key={i} className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm flex gap-4">
                    <div className="text-amber-500 shrink-0 mt-0.5">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-[15px] mb-1">{issue.problem}</h4>
                      <p className="text-slate-500 text-[14px] leading-relaxed">{issue.symptom}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
              <Link to="/guides" className="text-[13px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <BookOpen size={16} /> View more guides
              </Link>
              <button className="text-[13px] font-medium text-slate-400 flex items-center gap-1 hover:text-slate-600">
                <Info size={14} /> Report a mistake
              </button>
            </footer>
          </article>

          {/* Sidebar / Navigation */}
          <aside className="space-y-12">
            <div className="sticky top-32">
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-6 px-3">
                Other Guides
              </h3>
              <nav className="space-y-1">
                {servicesData.filter(s => s.slug !== slug).slice(0, 8).map((s, i) => (
                  <Link 
                    key={i} 
                    to={`/driver/${s.slug}`} 
                    className="flex items-center justify-between px-3 py-2.5 rounded-md text-[13px] font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all group"
                  >
                    {s.title}
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-400 transition-all" />
                  </Link>
                ))}
              </nav>

              <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white">
                <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="text-blue-400" /> Need help?
                </h4>
                <p className="text-[12px] text-slate-400 leading-relaxed mb-6">
                  Can't find what you're looking for? Look at our full list of guides.
                </p>
                <Link to="/guides" className="inline-flex items-center gap-2 text-[12px] font-bold text-blue-400 hover:text-blue-300 transition-colors">
                  All Guides <ExternalLink size={12} />
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
