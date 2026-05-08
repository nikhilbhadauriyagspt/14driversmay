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
        <section className="w-full bg-white py-24 px-6 ">
            <div className="max-w-[1600px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-[700px]">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                            <span className="text-[12px] font-[500] text-slate-400 uppercase tracking-[0.25em]">
                                Learning Resources
                            </span>
                        </div>

                        <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight text-slate-900 ">
                            Latest Knowledge <br />
                            Information Guides
                        </h2>
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-2 text-[14px] font-[500]text-[#005DE0] uppercase tracking-widest border-b-2 border-blue-50 pb-2 hover:border-[#005DE0] transition-all"
                    >
                        View Full Library <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Clean Horizontal List Layout (No Large Boxes) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {guides.map((guide, index) => (
                        <Link
                            key={index}
                            to={`/guide/${guide.slug}`}
                            className="group flex items-center gap-6 border-b border-slate-100 pb-10 transition-all hover:border-[#CF00FE]/40"
                        >
                            <div className="flex-shrink-0 relative w-[150px]  flex items-center justify-center ">
                                <img
                                    src={guide.thumbImg}
                                    alt={guide.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-[500]text-[#005DE0] uppercase tracking-widest">
                                        Guide
                                    </span>
                                    <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                                    <span className="text-[10px] font-[500] text-slate-400 uppercase tracking-widest">
                                        5 Min Read
                                    </span>
                                </div>

                                <h3 className="text-[18px] font-semibold text-slate-800 mb-2 group-hover:text-[#005DE0] transition-colors leading-tight">
                                    {guide.title}
                                </h3>

                                <p className="text-[13px] leading-relaxed text-slate-500 line-clamp-1">
                                    {guide.desc}
                                </p>
                            </div>

                            <div className="flex-shrink-0 text-slate-300 group-hover:text-[#005DE0] transition-colors">
                                <ChevronRight size={20} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <Link
                        to="/guides"
                        className="inline-flex items-center justify-center h-[56px] px-12 rounded-full btn-gradient text-white text-[15px] font-[500]shadow-lg"
                    >
                        Browse All Information Topics
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularDriverGuides;