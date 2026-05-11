import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import * as Icons from "react-icons/fa";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      name: "Essential Drivers",
      desc: "Fundamental software required for basic computer operations and booting.",
      driverIds: [1, 2, 3, 4],
    },
    {
      name: "Hardware-Specific",
      desc: "Internal components that require specialized logic for high-speed performance.",
      driverIds: [5, 6, 7, 8],
    },
    {
      name: "Peripheral Drivers",
      desc: "Software bridges for external hardware connected via standard system ports.",
      driverIds: [9, 10, 11],
    },
    {
      name: "Advanced Systems",
      desc: "Low-level system protection, BIOS management, and firmware integrity.",
      driverIds: [12, 13, 14],
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F7FBFF] font-[Poppins] overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-white">
        <div className="absolute right-0 top-0 h-full w-[32%] bg-[#0C66E5]" />
        <div className="absolute left-0 bottom-0 w-[280px] h-[280px] rounded-full bg-blue-100 blur-3xl" />

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#0C66E5] mb-7">
              <Icons.FaBookOpen size={12} />
              Driver Information Library
            </div>

            <h1 className="text-[42px] md:text-[70px] font-black leading-[0.98] text-slate-950 mb-8">
              Explore Device <br />
              Driver Guides
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[1.9] text-slate-600 max-w-[760px]">
              Browse educational information about hardware drivers, system
              communication and device-related software topics.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <div className="flex items-center gap-2 text-[13px] font-[500]text-slate-600">
                <Icons.FaCheckCircle className="text-[#0C66E5]" />
                14 Learning Categories
              </div>

              <div className="flex items-center gap-2 text-[13px] font-[500]text-slate-600">
                <Icons.FaCheckCircle className="text-[#0C66E5]" />
                Educational Information
              </div>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="bg-[#0C66E5] text-white p-10">
            <Icons.FaLayerGroup size={34} className="mb-6" />

            <h3 className="text-[34px] font-black leading-tight mb-5">
              Device Learning Topics
            </h3>

            <p className="text-white/85 text-[15px] leading-[1.9]">
              Understand audio, WiFi, USB, graphics, printers and other driver
              communication topics in a simple way.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 px-6">
        <div className="max-w-[1500px] mx-auto space-y-24">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                <div>
                  <span className="text-[#0C66E5] text-[11px] font-black uppercase tracking-[0.24em] block mb-3">
                    Category 0{catIdx + 1}
                  </span>

                  <h2 className="text-[34px] md:text-[46px] font-black text-slate-950 leading-tight">
                    {cat.name}
                  </h2>
                </div>

                <p className="max-w-[620px] text-[15px] leading-[1.8] text-slate-500">
                  {cat.desc}
                </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {servicesData
                  .filter((s) => cat.driverIds.includes(s.id))
                  .map((service) => {
                    const IconComponent =
                      Icons[service.iconName] || Icons.FaMicrochip;

                    return (
                      <Link
                        key={service.id}
                        to={`/driver/${service.slug}`}
                        className="group bg-white border border-blue-100 p-7 hover:border-[#0C66E5] transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-5 mb-8">
                          <div className="w-14 h-14 bg-[#F3F8FF] text-[#0C66E5] flex items-center justify-center text-[22px] group-hover:bg-[#0C66E5] group-hover:text-white transition">
                            <IconComponent />
                          </div>

                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Guide
                          </span>
                        </div>

                        <h4 className="text-[22px] font-black text-slate-950 leading-[1.2] mb-4 group-hover:text-[#0C66E5] transition">
                          {service.title}
                        </h4>

                        <p className="text-[14px] leading-[1.8] text-slate-500 line-clamp-3 mb-8">
                          {service.shortDesc}
                        </p>

                        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                          <span className="text-[12px] font-black uppercase tracking-[0.16em] text-[#0C66E5]">
                            Read Guide
                          </span>

                          <div className="w-9 h-9 border border-blue-100 flex items-center justify-center text-[#0C66E5] group-hover:bg-[#0C66E5] group-hover:text-white group-hover:border-[#0C66E5] transition">
                            <Icons.FaArrowRight size={12} />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;