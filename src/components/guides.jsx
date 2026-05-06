import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { guidesData } from "../data/guidesData";

export default function PopularDriverGuides() {
    const sliderRef = useRef(null);

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

    const slideLeft = () => {
        sliderRef.current?.scrollBy({ left: -420, behavior: "smooth" });
    };

    const slideRight = () => {
        sliderRef.current?.scrollBy({ left: 420, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-white py-20 px-6 font-['Poppins'] overflow-hidden">
            <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-16 items-end">

                {/* Left Person Area */}
                <div className="relative hidden lg:flex items-end justify-center min-h-full">
                    <picture className="relative z-10">
                        <source srcSet="/about/slider_lady.avif" type="image/avif" />
                        <source srcSet="/about/slider_lady.webp" type="image/webp" />
                        <img
                            src="/about/slider_lady.png"
                            alt="Driver guide learning"
                            className="max-h-[700px] object-cover"
                        />
                    </picture>
                </div>

                {/* Right Content */}
                <div>
                    <div className="flex items-end justify-between gap-6 mb-5">
                        <div>
                            <div className="flex items-center gap-2 mb-3 text-[#087dcc] font-bold text-[12px] uppercase tracking-widest">
                                <BookOpen className="w-4 h-4" />
                                Recommended Reading
                            </div>

                            <h2 className="text-[25px] md:text-[35px] font-extrabold leading-[1.08] text-[#063c8d]">
                                Driver Guides
                                we provide
                            </h2>


                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={slideLeft}
                                aria-label="Slide left"
                                className="w-12 h-12 rounded-full border border-[#087dcc] text-[#063c8d] flex items-center justify-center hover:bg-[#087dcc] hover:text-white transition"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <button
                                onClick={slideRight}
                                aria-label="Slide right"
                                className="w-12 h-12 rounded-full border border-[#087dcc] text-[#063c8d] flex items-center justify-center hover:bg-[#087dcc] hover:text-white transition"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Slider Cards - Converted to Marquee */}
                    <div className="relative overflow-hidden group py-4">
                        <div className="flex w-max animate-guideMarquee gap-8 px-4 group-hover:[animation-play-state:paused]">
                            {[...guides, ...guides].map((guide, index) => (
                                <Link
                                    key={index}
                                    to={`/guide/${guide.slug}`}
                                    className="group/card w-[330px] md:w-[370px] bg-[#E8FBFF] rounded-[8px] p-6 border border-blue-100 transition-all duration-300 hover:-translate-y-2 shrink-0 flex flex-col"
                                >
                                    <div className="h-[200px] rounded-[8px] overflow-hidden mb-6 bg-white">
                                        <picture>
                                            <source srcSet={guide.avifThumbImg} type="image/avif" />
                                            <source srcSet={guide.thumbImg} type="image/webp" />
                                            <img
                                                src={guide.pngFallback}
                                                alt={guide.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            />
                                        </picture>
                                    </div>

                                    <h3 className="text-center text-[18px] font-extrabold text-[#063c8d] mb-1 group-hover/card:text-[#087dcc] transition">
                                        {guide.title}
                                    </h3>

                                    <p className="text-center text-[12px] leading-[1.7] text-black line-clamp-3">
                                        {guide.desc}
                                    </p>

                                    <div className="mt-6 flex justify-center">
                                        <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#087dcc]">
                                            Read Guide <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        to="/guides"
                        className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-[#063c8d] hover:text-[#087dcc] border-b-2 border-[#063c8d] hover:border-[#087dcc] pb-1"
                    >
                        View All Guides <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <style>{`
        @keyframes guideMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-guideMarquee {
          animation: guideMarquee 40s linear infinite;
        }
      `}</style>
        </section>
    );
}