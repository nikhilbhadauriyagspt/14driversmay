import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { guidesData } from "../data/guidesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PopularDriverGuides = () => {
    const guides = guidesData.slice(0, 9).map((guide) => ({
        ...guide,
        thumbImg: guide.img.includes("/images/")
            ? guide.img
            : guide.img.replace(".avif", "_thumb.avif"),
    }));

    return (
        <section className="w-full bg-[#F4F6FA] py-24 px-6 font-[Poppins] overflow-hidden">
            <div className="max-w-[1500px] mx-auto">
                {/* Header */}
                <div className="text-center max-w-[780px] mx-auto mb-14">
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-5">
                        <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                        Learning Resources
                    </p>

                    <h2 className="text-[34px] md:text-[52px] leading-tight font-semibold text-[#071B34]">
                        Explore the Latest Driver
                        <br />
                        <span className="text-[#315BFF]">Guides and Updates.</span>
                    </h2>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={28}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2800,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    }}
                    className="popularGuidesSwiper pb-14"
                >
                    {guides.map((guide, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                to={`/guide/${guide.slug}`}
                                className="group bg-white rounded-[18px] p-6 min-h-[260px] flex items-center gap-6 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)] transition-all duration-300"
                            >
                                {/* Left Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[14px] text-slate-500">
                                            Driver Guide
                                        </span>
                                        <span className="w-8 h-px bg-slate-400" />
                                    </div>

                                    <h3 className="text-[22px] leading-snug font-semibold text-[#071B34] group-hover:text-[#315BFF] transition">
                                        {guide.title}
                                    </h3>

                                    <p className="mt-3 text-[14px] leading-6 text-slate-500 line-clamp-2">
                                        {guide.desc}
                                    </p>

                                    <span className="mt-7 pr-2 inline-flex items-center gap-3 h-[48px] px-6 rounded-full bg-[#1018D7] text-white text-[14px] font-semibold">
                                        Read More
                                        <span className="w-8 h-8 rounded-full bg-white text-[#1018D7] flex items-center justify-center">
                                            <ArrowRight size={17} />
                                        </span>
                                    </span>
                                </div>

                                {/* Right Image */}
                                <div className="w-[170px] h-[170px] rounded-[12px] overflow-hidden shrink-0 bg-[#EEF4FF]">
                                    <img
                                        src={guide.thumbImg}
                                        alt={guide.title}
                                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </section>
    );
};

export default PopularDriverGuides;