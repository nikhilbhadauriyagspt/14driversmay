import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import * as Icons from 'react-icons/fa';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      name: "Essential Drivers",
      desc: "Fundamental software required for basic computer operations and booting.",
      driverIds: [1, 2, 3, 4]
    },
    {
      name: "Hardware-Specific",
      desc: "Internal components that require specialized logic for high-speed performance.",
      driverIds: [5, 6, 7, 8]
    },
    {
      name: "Peripheral Drivers",
      desc: "Software bridges for external hardware connected via standard system ports.",
      driverIds: [9, 10, 11]
    },
    {
      name: "Advanced Systems",
      desc: "Low-level system protection, BIOS management, and firmware integrity.",
      driverIds: [12, 13, 14]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-poppins">
      {/* Dynamic Sub-Hero Section */}
      <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full mb-6">
              <Icons.FaShieldAlt className="text-blue-600 text-[10px]" />
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[2px]">Official Driver Index v4.2</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Full Guide <br />
              <span className="text-blue-600">For Your Driver</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
              Browse our comprehensive repository of hardware-software translators. We provide detailed specifications for every essential system layer.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                <Icons.FaCheck className="text-blue-600" /> 14 Categories Mapped
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                <Icons.FaCheck className="text-blue-600" /> Verified Protocols
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Categorized Library Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {categories.map((cat, catIdx) => (
              <div key={catIdx} className="relative" data-aos="fade-up">

                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-50 pb-6">
                  <div className="max-w-xl">
                    <span className="text-blue-600 text-[9px] font-black uppercase tracking-[4px] block mb-1.5">Technical Family 0{catIdx + 1}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{cat.name}</h2>
                    <p className="text-slate-400 text-xs font-medium mt-1.5">{cat.desc}</p>
                  </div>
                </div>

                {/* Driver Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {servicesData.filter(s => cat.driverIds.includes(s.id)).map((service, index) => {
                    const IconComponent = Icons[service.iconName] || Icons.FaCogs;
                    return (
                      <Link
                        key={service.id}
                        to={`/service/${service.slug}`}
                        className="group p-7 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-200 hover:shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col items-start"
                      >
                        <div className="w-11 h-11 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center text-lg mb-5 transition-all duration-500 border border-slate-50 group-hover:border-blue-600">
                          <IconComponent />
                        </div>

                        <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">{service.title}</h4>
                        <p className="text-slate-500 text-[12px] leading-relaxed mb-6 font-medium line-clamp-2">
                          {service.shortDesc}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                          Technical Specs <Icons.FaChevronRight size={7} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default ServicesPage;