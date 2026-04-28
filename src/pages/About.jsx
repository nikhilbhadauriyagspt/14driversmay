import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  FaRocket, FaShieldAlt, FaUsers, FaGlobe, FaAward, 
  FaChevronRight, FaCogs, FaCheckCircle, FaLaptopCode
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-[Poppins]">
      <Helmet>
        <title>About Us | DriverZenith - Technical Hardware Registry</title>
        <meta name="description" content="Learn about DriverZenith, your global repository for hardware specifications and technical documentation since 2018." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#071A3D] overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[12px] font-bold uppercase tracking-widest mb-8">
             Technical Knowledge Base
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Mapping Global <br />
            <span className="text-blue-500">Hardware Protocols</span>
          </h1>
          <p className="text-white/70 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            DriverZenith is a comprehensive technical repository providing architectural documentation 
            and hardware-software interaction data for the global technical community.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-[1400px] mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-[32px] p-10 shadow-xl border border-slate-100">
          <StatItem label="Daily Users" value="5M+" />
          <StatItem label="Hardware Indexed" value="500K+" />
          <StatItem label="Technical Docs" value="12M+" />
          <StatItem label="Data Updates" value="24/7" />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[40px] rotate-3" />
              <img 
                src="/projects/service-main.jpg" 
                alt="Our Workspace" 
                className="rounded-[32px] shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-10 -right-10 hidden md:block bg-white p-6 rounded-2xl shadow-xl border border-slate-50 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    <FaAward />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Information Leader</h4>
                    <p className="text-xs text-slate-500">Since 2018</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Why the Technical Community Trusts <br />
                <span className="text-blue-600 font-extrabold">DriverWiki</span>
              </h2>
              <div className="space-y-8">
                <FeatureRow 
                  icon={<FaShieldAlt />} 
                  title="Verified Technical Data" 
                  desc="Every specification in our database is cross-referenced with official manufacturer documentation for accuracy."
                />
                <FeatureRow 
                  icon={<FaRocket />} 
                  title="Architectural Insights" 
                  desc="We provide deep technical data on hardware-software communication to enhance system stability."
                />
                <FeatureRow 
                  icon={<FaUsers />} 
                  title="Community Contribution" 
                  desc="A global network of technical contributors sharing verified hardware IDs and registry data."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
            <p className="text-slate-500 font-medium">Transparency, Technical Accuracy, and Data Integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<FaGlobe />} 
              title="Global Documentation" 
              desc="Providing multilingual hardware databases for users across 150+ countries."
            />
            <ValueCard 
              icon={<FaLaptopCode />} 
              title="Technical Innovation" 
              desc="Constantly updating our diagnostic repository to identify the newest hardware protocols."
            />
            <ValueCard 
              icon={<FaCogs />} 
              title="System Integrity" 
              desc="Focusing on verified data cycles to ensure that system stability is never compromised."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#071A3D] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10 leading-tight">
              Ready to Explore <br /> Our Database?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link to="/guides" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-600/20">
                Explore Documentation
              </Link>
              <Link to="/services" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition">
                Hardware Index
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div className="text-center">
    <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">{value}</h3>
    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{label}</p>
  </div>
);

const FeatureRow = ({ icon, title, desc }) => (
  <div className="flex gap-6 items-start">
    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ValueCard = ({ icon, title, desc }) => (
  <div className="p-10 rounded-[32px] bg-[#F8FAFC] border border-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group">
    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl text-blue-600 mb-8 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-2xl font-bold text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-500 font-medium leading-relaxed mb-6">{desc}</p>
    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest">
      Technical Details <FaChevronRight size={10} />
    </div>
  </div>
);

export default About;

