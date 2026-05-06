import React from "react";
import { Link } from "react-router-dom";

const DriverChallengeSection = () => {
    const points = [
        "Learn why WiFi, audio, display or printer driver data is important",
        "Understand missing driver, outdated driver and device recognition topics",
        "Explore simple driver guides to understand system settings",
    ];

    return (
        <section className="w-full bg-white py-20 px-4 font-['Poppins'] overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

                {/* Left Image */}
                <div className="relative flex justify-center">
                    <div className="absolute bottom-0 w-[480px] h-[480px] rounded-full bg-[#E5FBFF]" />

                    <picture className="relative z-10">
                        <source srcSet="/about/aboutmain.avif" type="image/avif" />
                        <source srcSet="/about/aboutmain.webp" type="image/webp" />
                        <img
                            src="/about/aboutmain.png"
                            alt="Learning about software drivers"
                            className="max-h-[620px] object-contain"
                        />
                    </picture>

                    <div className="absolute right-[12%] bottom-[22%] z-20">
                        <div className="w-0 h-0 border-t-[36px] border-t-transparent border-b-[36px] border-b-transparent border-l-[46px] border-l-[#063c8d]" />
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-[38px] md:text-[48px] font-extrabold leading-[1.15] text-[#063c8d] mb-7">
                        Understand Driver Topics <br />
                        for your Computer
                    </h2>

                    <p className="text-[16px] leading-[1.8] text-black max-w-[620px] mb-8">
                        Software drivers help your computer communicate with hardware like
                        sound, display, WiFi, USB devices and printers. Our guides explain
                        how these systems work and how they relate to your computer's performance.
                    </p>

                    <div className="space-y-7 mb-10">
                        {points.map((point, index) => (
                            <div key={index} className="relative flex gap-7">
                                <div className="relative pt-1">
                                    <span className="block w-[18px] h-[18px] rounded-full border-[3px] border-[#08AEEA] bg-white" />
                                    {index !== points.length - 1 && (
                                        <span className="absolute left-[8px] top-[22px] h-[46px] border-l border-dashed border-[#08AEEA]" />
                                    )}
                                </div>

                                <p className="text-[16px] leading-[1.65] text-black max-w-[560px]">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-gradient-to-r from-[#087dcc] to-[#071b85] text-white text-[16px] font-bold hover:shadow-lg transition"
                    >
                        Explore Guides
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DriverChallengeSection;