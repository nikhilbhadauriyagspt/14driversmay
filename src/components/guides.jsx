import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { guidesData } from "../data/guidesData";

export default function PopularDriverGuides() {
    const guides = guidesData.slice(0, 8).map((guide) => ({
        ...guide,
        thumbImg: guide.img.includes("/images/")
            ? guide.img
            : guide.img.replace(".webp", "_thumb.webp"),
        avifThumbImg: guide.img.includes("/images/")
            ? guide.img.replace(".webp", ".avif")
            : guide.img.replace(".webp", "_thumb.avif"),
        pngFallback: guide.img.includes("/images/")
            ? guide.img.replace(".webp", ".png")
            : guide.img.replace(".webp", ".png"),
    }));

    const featured = guides[0];
    const sideGuides = guides.slice(1, 5);
    const bottomGuides = guides.slice(5, 8);

    return (
        <section className="w-full bg-white py-24 px-4 sm:px-6 font-['Poppins'] overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-[#0675DB] text-[12px] font-bold uppercase tracking-[0.22em]">
                            <BookOpen className="w-4 h-4" />
                            Recommended Reading
                        </div>

                        <h2 className="text-[36px] md:text-[52px] font-black leading-[1.05] text-slate-950">
                            Popular Driver <br />
                            Learning Guides
                        </h2>
                    </div>

                    <p className="max-w-[520px] text-[15px] md:text-[16px] leading-[1.8] text-slate-600">
                        Explore simple educational guides about driver topics, device
                        information, connection basics and system settings.
                    </p>
                </div>

                {/* Main Magazine Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8">
                    {/* Featured Large Card */}
                    <Link
                        to={`/guide/${featured.slug}`}
                        className="group  border border-slate-200 bg-[#F7FBFF] overflow-hidden"
                    >
                        <div className="relative min-h-[360px] lg:min-h-[520px] overflow-hidden bg-slate-100">
                            <picture>
                                <source srcSet={featured.avifThumbImg} type="image/avif" />
                                <source srcSet={featured.thumbImg} type="image/webp" />
                                <img
                                    src={featured.pngFallback}
                                    alt={featured.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </picture>
                        </div>

                        <div className="p-8 md:p-10 flex flex-col justify-center">
                            <span className="w-fit bg-[#0675DB] text-white px-4 py-2 text-[11px] font-black uppercase tracking-widest mb-7">
                                Featured Guide
                            </span>

                            <h3 className="text-[32px] md:text-[46px] font-black leading-[1.08] text-slate-950 mb-5 group-hover:text-[#0675DB] transition">
                                {featured.title}
                            </h3>

                            <p className="text-[16px] leading-[1.8] text-slate-600 mb-8 line-clamp-4">
                                {featured.desc}
                            </p>

                            <div className="inline-flex items-center gap-3 text-[#045fb4] font-black text-[14px] uppercase tracking-wider">
                                Read Guide
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                            </div>
                        </div>
                    </Link>

                    {/* Side List */}
                    <div className="grid grid-cols-1 gap-4">
                        {sideGuides.map((guide, index) => (
                            <Link
                                key={index}
                                to={`/guide/${guide.slug}`}
                                className="group grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] border border-slate-200 bg-white hover:bg-[#F7FBFF] transition overflow-hidden"
                            >
                                <div className="h-[150px] md:h-full bg-slate-100 overflow-hidden">
                                    <picture>
                                        <source srcSet={guide.avifThumbImg} type="image/avif" />
                                        <source srcSet={guide.thumbImg} type="image/webp" />
                                        <img
                                            src={guide.pngFallback}
                                            alt={guide.title}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </picture>
                                </div>

                                <div className="p-5 md:p-6 flex flex-col justify-center">
                                    <span className="text-[11px] font-black uppercase tracking-widest text-[#0675DB] mb-3">
                                        Guide {index + 2}
                                    </span>

                                    <h3 className="text-[19px] md:text-[24px] font-black leading-tight text-slate-950 group-hover:text-[#0675DB] transition mb-3">
                                        {guide.title}
                                    </h3>

                                    <p className="text-[13px] md:text-[14px] leading-[1.6] text-slate-500 line-clamp-2">
                                        {guide.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Compact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                    {bottomGuides.map((guide, index) => (
                        <Link
                            key={index}
                            to={`/guide/${guide.slug}`}
                            className="group border border-slate-200 bg-white p-5 hover:bg-[#F7FBFF] transition"
                        >
                            <div className="flex gap-4">
                                <div className="w-[96px] h-[96px] shrink-0 overflow-hidden bg-slate-100">
                                    <picture>
                                        <source srcSet={guide.avifThumbImg} type="image/avif" />
                                        <source srcSet={guide.thumbImg} type="image/webp" />
                                        <img
                                            src={guide.pngFallback}
                                            alt={guide.title}
                                            className="w-full h-full object-contain  group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </picture>
                                </div>

                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0675DB]">
                                        More Topic
                                    </span>

                                    <h3 className="text-[18px] font-black leading-tight text-slate-950 mt-2 mb-2 group-hover:text-[#0675DB] transition">
                                        {guide.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-[#0675DB] text-[12px] font-black uppercase tracking-wide">
                                        Read
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 border border-[#0675DB] text-[#0675DB] px-9 py-4 font-black text-[14px] hover:bg-[#0675DB] hover:text-white transition"
                    >
                        View All Guides
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}