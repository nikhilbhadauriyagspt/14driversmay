import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { guidesData } from "../data/guidesData";

const GuideCard = ({ guide, large = false }) => (
    <Link
        to={`/guide/${guide.slug}`}
        className={`group block overflow-hidden rounded-xl border border-slate-100 bg-white p-2 transition hover:border-blue-100 ${large ? "md:col-span-2" : ""
            }`}
    >
        <div className={`relative overflow-hidden rounded-lg ${large ? "h-[260px]" : "h-[190px]"}`}>
            <img
                src={guide.thumbImg}
                alt={guide.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <span className="absolute bottom-[56px] left-4 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#071B34] uppercase tracking-wider">
                Guide Article
            </span>

            <h3 className="absolute bottom-4 left-4 right-4 text-[17px] font-semibold leading-snug text-white">
                {guide.title}
            </h3>
        </div>

        <div className="flex items-center justify-between gap-4 px-2 py-4">
            <p className="line-clamp-2 text-[13px] leading-relaxed text-slate-500">
                {guide.desc}
            </p>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-100 text-[#071B34] transition group-hover:border-[#315BFF] group-hover:text-[#315BFF]">
                <ArrowRight size={14} strokeWidth={1.5} />
            </span>
        </div>
    </Link>
);

const PopularDriverGuides = () => {
    const guides = guidesData.slice(0, 11).map((guide) => ({
        ...guide,
        thumbImg: guide.img.includes("/images/")
            ? guide.img
            : guide.img.replace(".avif", "_thumb.avif"),
    }));

    const mainGuide = guides[0];
    const smallGuides = guides.slice(1);

    return (
        <section className="w-full bg-white px-6 py-20 font-[Poppins]">
            <div className="mx-auto max-w-[1600px]">
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[1px] bg-[#315BFF]"></span>
                            <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Recommended Reading</span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-[#071B34]">
                            Most Read Information Guides
                        </h2>
                    </div>

                    <div className="max-w-[430px] text-left md:text-right">
                        <p className="mb-6 text-[14px] leading-relaxed text-slate-500">
                            Explore simple driver guide articles for common WiFi, audio,
                            printer, USB, graphics, and device-related issues.
                        </p>

                        <Link
                            to="/guides"
                            className="inline-flex items-center gap-2 bg-[#071B34] text-white px-7 py-3 rounded-lg text-[13px] font-medium transition hover:bg-blue-700"
                        >
                            View All Guides
                            <ArrowRight size={15} strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <GuideCard guide={mainGuide} large />

                    {smallGuides.map((guide, index) => (
                        <GuideCard key={index} guide={guide} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDriverGuides;