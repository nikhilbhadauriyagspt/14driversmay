import React from "react";
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { guidesData } from "../data/guidesData";

const PopularDriverGuides = () => {
    const guides = guidesData.slice(0, 6).map((guide) => ({
        ...guide,
        thumbImg: guide.img.includes("/images/")
            ? guide.img
            : guide.img.replace(".avif", "_thumb.avif"),
    }));

    return (
        <section className="w-full bg-[#fbfcff] py-24 px-6 font-[Poppins] overflow-hidden">
            <div className="max-w-[1500px] mx-auto">
                {/* Header */}
                <div className="text-center max-w-[760px] mx-auto mb-16">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                            <BookOpen size={18} />
                        </span>
                        <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                            Learning Resources
                        </span>
                    </div>

                    <h2 className="text-[32px] md:text-[42px] font-semibold leading-tight text-[#202124]">
                        Latest driver information guides
                    </h2>

                    <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
                        Browse simple reading topics about driver basics, device connection,
                        and hardware communication.
                    </p>

                    <div className="w-[180px] h-[2px] bg-[#2563eb] mx-auto mt-7 rounded-full"></div>
                </div>

                {/* Guides */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8">
                    {guides.map((guide, index) => (
                        <Link
                            key={index}
                            to={`/guide/${guide.slug}`}
                            className="group relative flex items-center gap-6 py-6 border-b border-slate-200/70 hover:border-[#2563eb]/40 transition-all duration-300"
                        >
                            <div className="relative w-[118px] h-[92px] shrink-0 rounded-[22px] bg-white overflow-hidden flex items-center justify-center shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                                <img
                                    src={guide.thumbImg}
                                    alt={guide.title}
                                    width="118"
                                    height="92"
                                    className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[11px] font-semibold text-[#2563eb] uppercase tracking-[0.18em]">
                                        Guide
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.18em]">
                                        5 Min Read
                                    </span>
                                </div>

                                <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900 mb-2 group-hover:text-[#2563eb] transition-colors leading-snug">
                                    {guide.title}
                                </h3>

                                <p className="text-[14px] leading-relaxed text-slate-500 line-clamp-2">
                                    {guide.desc}
                                </p>
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white text-slate-300 flex items-center justify-center shadow-[0_10px_25px_rgba(15,23,42,0.04)] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                                <ChevronRight size={19} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
                    >
                        Browse All Information Topics
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularDriverGuides;