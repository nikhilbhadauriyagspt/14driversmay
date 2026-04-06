import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import * as Icons from 'react-icons/fa';

const Services = () => {
  // Grouping services by their category logic
  const categories = [
    {
      name: "Essential Drivers",
      desc: "Core System Requirements for booting and basic communication.",
      driverIds: [1, 2, 3, 4]
    },
    {
      name: "Hardware-Specific",
      desc: "Internal Component Control for optimization and speed.",
      driverIds: [5, 6, 7, 8]
    },
    {
      name: "Peripheral Drivers",
      desc: "External Device Integration for connectivity and capture.",
      driverIds: [9, 10, 11]
    },
    {
      name: "Advanced Systems",
      desc: "Low-level Firmware & Security for system integrity.",
      driverIds: [12, 13, 14]
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins" id="services">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Main Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20" data-aos="fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <Icons.FaDatabase className="text-blue-600 text-[10px]" />
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">Driver Library</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              System <span className="text-blue-600">Hardware Index</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Every computer requires a specific set of drivers to function. Our database covers all essential hardware communication layers and system requirements.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <img
              src="/projects/service-main.jpg"
              alt="Service Main"
              className="w-full h-[300px] rounded-3xl object-cover shadow-2xl shadow-blue-600/10"
            />
          </div>
        </div>

        {/* Grouped Category Layout */}
        <div className="space-y-20">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="relative" data-aos="fade-up">

              {/* Category Header */}
              <div className="flex items-center gap-5 mb-10 border-b border-slate-50 pb-6">
                <div className="flex-shrink-0 w-1 h-8 bg-blue-600 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cat.name}</h3>
                  <p className="text-slate-400 text-xs font-medium">{cat.desc}</p>
                </div>
              </div>

              {/* Driver Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {servicesData.filter(s => cat.driverIds.includes(s.id)).map((service, index) => {
                  const IconComponent = Icons[service.iconName] || Icons.FaCogs;
                  return (
                    <div
                      key={service.id}
                      className="group p-7 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-200 hover:shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col items-start"
                    >
                      <div className="w-11 h-11 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center text-lg mb-5 transition-all duration-500 border border-slate-50 group-hover:border-blue-600 shadow-sm">
                        <IconComponent />
                      </div>

                      <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">{service.title}</h4>
                      <p className="text-slate-500 text-[12px] leading-relaxed mb-6 font-medium line-clamp-2">
                        {service.shortDesc}
                      </p>

                      <Link
                        to={`/service/${service.slug}`}
                        className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors"
                      >
                        Technical Specs <Icons.FaChevronRight size={7} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Global Support Callout - Refined */}
        <div className="mt-24 p-1 bg-slate-900 rounded-[1rem] relative overflow-hidden text-center shadow-sm">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>
          <div className="relative z-10">
            {/* <h4 className="text-white text-xl md:text-2xl font-bold mb-4">Experience Hardware Problems?</h4>
            <p className="text-slate-400 text-sm font-medium max-w-xl mx-auto mb-8">Our technical team specializes in resolving driver conflicts and hardware-software communication errors.</p>
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all text-xs inline-flex items-center gap-3 active:scale-95 shadow-md shadow-blue-600/10">
              <Icons.FaWrench size={14} /> Request Diagnostic Support
            </Link> */}


            <img src="/projects/device-driver.png" className=' rounded-[1rem] w-full h-full' alt="" />

          </div>
        </div>


      </div>

    </section>
  );
};

export default Services;