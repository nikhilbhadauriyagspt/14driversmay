import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Cpu,
  Monitor,
  Wifi,
  Printer,
  Usb,
  Volume2,
  Bluetooth,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3fb] pt-24 font-[Poppins]">
      {/* Background Shapes */}
      <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-[-100px] top-[-100px] w-[300px] h-[300px] rounded-full bg-violet-100/40 blur-3xl" />

      {/* Wave */}
      <img
        src="/shape/shape.png"
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-100 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-[650px] 2xl:min-h-[820px]">
          {/* LEFT CONTENT */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center rounded-full bg-white px-5 py-2 shadow-sm">
              <span className="text-[14px] font-medium text-[#26235C]">
                Learn Drivers Without Confusion
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-[40px] leading-[1.1] text-[#16113A]  2xl:text-[60px] font-light">
              Understand
              <span className="font-semibold"> Computer Drivers </span> For Better
              Device
              <span className="font-semibold"> Performance</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[720px] text-[16px] leading-8 text-[#6B6885] md:text-[18px]">
              Explore educational information about graphics, audio, Wi-Fi,
              Bluetooth, printer, USB, chipset, webcam, display, and other
              software driver categories in a simple and beginner-friendly way.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/guides"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-[15px] font-medium text-white transition hover:bg-[#111827]"
              >
                Explore Driver Guides
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <ArrowRight size={18} />
                </span>
              </Link>


            </div>


          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Main Woman Image */}
            <img
              src="/banner/banner_02.png"
              alt="Software drivers learning"
              className="relative z-10 w-full max-w-full  object-contain"
            />



          </div>
        </div>
      </div>
    </section>
  );
}