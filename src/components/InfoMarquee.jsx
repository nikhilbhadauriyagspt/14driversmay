import React from "react";
import { Link } from "react-router-dom";
import {
  MonitorOff, Volume2, Wifi, Printer, Usb, Bluetooth, Video, Scan,
  Cpu, MousePointer2, HardDrive, Keyboard, ShieldCheck, Zap, Layout, Network,
} from "lucide-react";

const InfoMarquee = () => {
  const issues = [
    { text: "Graphics", sub: "Display & GPU basics", icon: MonitorOff, slug: "understand-graphics-driver-topics" },
    { text: "Audio", sub: "Sound device info", icon: Volume2, slug: "understand-audio-driver-topics" },
    { text: "Wi-Fi", sub: "Wireless connection", icon: Wifi, slug: "understand-wifi-network-topics" },
    { text: "Printer", sub: "Print device topics", icon: Printer, slug: "understand-printer-driver-topics" },
    { text: "USB", sub: "Port detection info", icon: Usb, slug: "understand-usb-driver-topics" },
    { text: "Bluetooth", sub: "Pairing basics", icon: Bluetooth, slug: "understand-bluetooth-driver-topics" },
    { text: "Webcam", sub: "Camera input info", icon: Video, slug: "understand-webcam-driver-topics" },
    { text: "Scanner", sub: "Scan device basics", icon: Scan, slug: "understand-scanner-driver-topics" },
    { text: "Chipset", sub: "Core system bridge", icon: Cpu, slug: "guide-chipset-drivers" },
    { text: "Touchpad", sub: "Input gesture info", icon: MousePointer2, slug: "understand-input-latency-drivers" },
    { text: "Storage", sub: "SSD & HDD topics", icon: HardDrive, slug: "understand-device-not-detected" },
    { text: "Keyboard", sub: "Key input basics", icon: Keyboard, slug: "understand-input-latency-drivers" },
    { text: "BIOS / UEFI", sub: "Firmware basics", icon: ShieldCheck, slug: "guide-bios-firmware-updates" },
    { text: "Battery", sub: "Power management", icon: Zap, slug: "understand-driver-update-topics" },
    { text: "Display", sub: "Resolution topics", icon: Layout, slug: "understand-graphics-driver-topics" },
    { text: "Network", sub: "Ethernet & LAN", icon: Network, slug: "understand-wifi-network-topics" },
  ];

  return (
    <section className="relative bg-white w-full px-4 md:px-8 pb-14 font-[Poppins] z-30">
      <div className="mx-auto max-w-[1400px] z-50 bg-white absolute -top-16 right-0 left-0 h-40 w-full rounded-tl-[20px] rounded-tr-[20px] px-6 md:px-12 pt-10">
        {/* Left Concave Shoulder */}
        <div className="absolute top-[40px] right-full w-6 h-6 text-white hidden lg:block">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <path
              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Right Concave Shoulder */}
        <div className="absolute top-[40px] left-full w-6 h-6 text-white hidden lg:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            className="scale-x-[-1]"
          >
            <path
              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

          <div className="max-w-[620px] mx-auto text-center">
            <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#315BFF]/50 text-[#315BFF] text-[13px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              Driver Topics
            </p>

            <h2 className="text-[20px] md:text-[35px] leading-tight font-semibold text-black max-w-[760px]">
              Explore Device Categories for Simple{" "}
              <span className="text-[#315BFF]">Driver Learning.</span>
            </h2>
          </div>


        </div>
      </div>

      {/* Main content overlaps banner with radius on all corners */}
      <div className="relative mx-auto max-w-[1500px] pt-24 bg-white overflow-hidden">
        <div className="px-6 py-10 md:py-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {issues.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  to={`/guide/${item.slug}`}
                  className={`group flex items-center gap-3 min-w-[210px] rounded-full border border-slate-200 bg-white px-5 py-3.5 lg:px-4 lg:py-3 2xl:px-5 2xl:py-3.5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:border-[#2563eb] hover:bg-[#eff6ff] transition-all duration-300 ${index === 15 ? 'hidden 2xl:flex' : 'flex'}`}
                >
                  <span className="w-11 h-11 lg:w-10 lg:h-10 2xl:w-11 2xl:h-11 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition">
                    <Icon size={21} className="lg:scale-90 2xl:scale-100" strokeWidth={1.8} />
                  </span>

                  <span>
                    <h3 className="text-[15px] 2xl:text-[16px] font-semibold text-slate-900 leading-tight">
                      {item.text}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {item.sub}
                    </p>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMarquee;