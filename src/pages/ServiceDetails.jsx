import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  FaCogs, FaDownload, FaShieldAlt, FaHistory, 
  FaChevronRight, FaCheckCircle, FaExclamationTriangle,
  FaTools, FaQuestionCircle, FaArrowLeft
} from "react-icons/fa";
import { BookOpen } from "lucide-react";
import { servicesData } from "../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFF] p-6">
        <h2 className="text-2xl font-bold text-[#0F1B3D]">Service Not Found</h2>
        <Link to="/" className="mt-4 text-blue-600 font-bold hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F7FAFF] min-h-screen font-[Poppins]">
      <Helmet>
        <title>{service.title} | Technical Documentation & Hardware Guide | DriverZenith</title>
        <meta name="description" content={`Technical specifications and installation documentation for ${service.title}. Learn about hardware requirements and system compatibility.`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#071A3D] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[12px] font-bold uppercase tracking-widest mb-8">
                <FaCogs /> Technical Wiki & Database
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                {service.title} <span className="text-blue-500">Documentation</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
                Detailed technical analysis and configuration data for {service.title}. Optimized for Windows 10 & 11 hardware architectures.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/guides" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center gap-3">
                  <BookOpen className="w-4 h-4" /> View Installation Guides
                </Link>
                <Link to="/faq" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition flex items-center gap-3">
                  <FaQuestionCircle /> Technical FAQ
                </Link>
              </div>
            </div>
            
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center text-8xl text-white shadow-2xl rotate-3 relative border border-white/10">
                  <FaCogs className="animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            
            {/* Main Content */}
            <div className="space-y-12">
              <div className="bg-white rounded-[32px] border border-[#E6ECF8] p-8 md:p-12 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F1B3D] mb-8 flex items-center gap-4">
                  <FaShieldAlt className="text-blue-600" /> Technical Overview
                </h2>
                <div className="prose prose-lg max-w-none text-[#5B6478] font-medium leading-relaxed">
                  <p className="mb-6">
                    The <strong>{service.title}</strong> serves as a critical translation layer between the Windows operating system and your physical hardware components. Understanding its function is key to maintaining system stability and performance.
                  </p>
                  <p>
                    This documentation repository provides data on verified software configurations and architectural requirements. We index technical information for multiple hardware versions to ensure broad compatibility across modern computing environments.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6ECF8]">
                    <FaCheckCircle className="text-emerald-500 text-2xl mb-4" />
                    <h4 className="font-bold text-[#0F1B3D] mb-2">Verified Data</h4>
                    <p className="text-[12px] text-[#5B6478]">Specifications cross-referenced with manufacturer data.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6ECF8]">
                    <FaHistory className="text-blue-500 text-2xl mb-4" />
                    <h4 className="font-bold text-[#0F1B3D] mb-2">Version History</h4>
                    <p className="text-[12px] text-[#5B6478]">Information on legacy and modern architecture support.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6ECF8]">
                    <FaQuestionCircle className="text-orange-500 text-2xl mb-4" />
                    <h4 className="font-bold text-[#0F1B3D] mb-2">Technical Insight</h4>
                    <p className="text-[12px] text-[#5B6478]">Documentation for resolving common hardware conflicts.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[32px] border border-[#E6ECF8] p-8 md:p-12 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F1B3D] mb-8">Installation Troubleshooting</h2>
                <div className="space-y-6">
                  {[
                    { t: "Automatic Detection", d: "Use our cloud-based tool to automatically identify your hardware ID." },
                    { t: "Manual Update Path", d: "Guide on using Windows Device Manager to force driver synchronization." },
                    { t: "Rollback Procedures", d: "How to safely revert to a previous driver version if issues arise." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-blue-50 transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0F1B3D] text-lg mb-1">{step.t}</h4>
                        <p className="text-[#5B6478] text-[14px] font-medium">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-[#071A3D] rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-900/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl" />
                <BookOpen className="text-blue-400 text-4xl mb-6" />
                <h3 className="text-2xl font-bold mb-4">Need More Info?</h3>
                <p className="text-white/60 text-sm font-medium mb-8 leading-relaxed">
                  Explore our comprehensive library of technical guides to better understand hardware-software interactions and system optimization.
                </p>
                <Link to="/guides" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  Browse Guides <FaChevronRight />
                </Link>
              </div>

              <div className="bg-white rounded-[32px] border border-[#E6ECF8] p-8 shadow-sm">
                <h4 className="text-[18px] font-bold text-[#0F1B3D] mb-6">Technical Topics</h4>
                <div className="space-y-4">
                  {servicesData.filter(s => s.slug !== slug).slice(0, 5).map((s, i) => (
                    <Link key={i} to={`/service/${s.slug}`} className="flex items-center justify-between group p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                      <span className="text-[#5B6478] text-[13px] font-bold group-hover:text-blue-600 transition-colors truncate pr-4">
                        {s.title} Specs
                      </span>
                      <FaChevronRight className="text-gray-300 text-[10px] group-hover:text-blue-600 transition-all group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />
    </div>
  );
};

export default ServiceDetails;