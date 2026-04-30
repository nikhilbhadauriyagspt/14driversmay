import React from "react";
import { ArrowRight, ChevronRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { guidesData } from "../data/guidesData";

export default function PopularDriverGuides() {
    // Show first 11 guides on home page to perfectly fill 3 rows with 1 featured
    const guides = guidesData.slice(0, 11).map((guide, index) => ({
        ...guide,
        featured: index === 0, // Make the first one featured
        // Use thumb image if available (not in /images/ folder)
        thumbImg: guide.img.includes('/images/')
            ? guide.img
            : guide.img.replace('.webp', '_thumb.webp')
    }));

    return (
        <section className="bg-white px-6 py-20 font-sans">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3 text-blue-600 font-bold text-[12px] uppercase tracking-widest">
                            <BookOpen className="w-4 h-4" /> Recommended Reading
                        </div>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-slate-900 leading-tight">
                            Most Read <span className="text-blue-600">Information Guides</span>
                        </h2>
                    </div>
                    <Link
                        to="/guides"
                        className="flex items-center gap-2 text-[14px] font-bold text-slate-900 hover:text-blue-600 transition-colors border-b-2 border-slate-900 hover:border-blue-600 pb-1 w-fit"
                    >
                        View All Guides <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Modern Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {guides.map((guide, index) => (
                        <Link
                            key={index}
                            to={`/guide/${guide.slug}`}
                            className={`group relative bg-slate-50 border border-slate-200 rounded-[10px] overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 ${guide.featured ? 'md:col-span-2' : ''}`}
                        >
                            <div className="relative h-[240px] overflow-hidden">
                                <img
                                    src={guide.thumbImg}
                                    alt={guide.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {guide.title}
                                    </h3>
                                    <p className="text-slate-200 text-[13px] leading-snug line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {guide.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-white flex justify-between items-center border-t border-slate-100">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Guide Article</span>
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}