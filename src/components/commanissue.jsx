import React from "react";
import {
  Wifi, Volume2, Monitor, Printer, Usb, Download, Bluetooth,
  Video, Scan, Cpu, BookOpen, MousePointer2, HardDrive,
  Keyboard, ShieldCheck, Zap, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommonProblems() {
  const categories = [
    { title: "WiFi & Network", count: "Network Guides", desc: "Wireless connectivity and local network basics.", icon: <Wifi />, slug: "understand-wifi-network-topics", image: "/guide/guide-network-driver.avif" },
    { title: "Audio & Sound", count: "Audio Guides", desc: "Sound output, speaker, and microphone information.", icon: <Volume2 />, slug: "understand-audio-driver-topics", image: "/guide/guide-audio-driver.avif" },
    { title: "Graphics & Display", count: "Display Guides", desc: "GPU, screen resolution, and display topics.", icon: <Monitor />, slug: "understand-graphics-driver-topics", image: "/guide/guide-graphics-driver.avif" },
    { title: "Printer Drivers", count: "Printer Guides", desc: "Printer connection and device response basics.", icon: <Printer />, slug: "understand-printer-driver-topics", image: "/guide/guide-printer-driver.avif" },
    { title: "USB Recognition", count: "USB Guides", desc: "USB ports and external device detection topics.", icon: <Usb />, slug: "understand-usb-driver-topics", image: "/guide/guide-usb-driver.avif" },
    { title: "Missing Drivers", count: "Device Guides", desc: "Unknown device and driver status information.", icon: <Download />, slug: "understand-driver-not-installed", image: "/guide/guide-driver-not-installed.avif" },
    { title: "Bluetooth Topics", count: "Bluetooth Guides", desc: "Pairing, visibility, and wireless device basics.", icon: <Bluetooth />, slug: "understand-bluetooth-driver-topics", image: "/needdriver/need-new-device.avif" },
    { title: "Webcam Drivers", count: "Camera Guides", desc: "Camera input and video device information.", icon: <Video />, slug: "understand-webcam-driver-topics", image: "/guide/webcam-drivers.avif" },
    { title: "Scanner Drivers", count: "Scanner Guides", desc: "Scanner hardware and scan device basics.", icon: <Scan />, slug: "understand-scanner-driver-topics", image: "/needdriver/need-printer-scanner.avif" },
    { title: "Chipset Info", count: "System Guides", desc: "Core system bridge and hardware communication.", icon: <Cpu />, slug: "guide-chipset-drivers", image: "/guide/chipset-info.avif" },
    { title: "Touchpad Data", count: "Input Guides", desc: "Touchpad gestures and input recognition basics.", icon: <MousePointer2 />, slug: "understand-input-latency-drivers", image: "/guide/touchpad-data.avif" },
    { title: "Storage Drives", count: "Drive Guides", desc: "SSD, HDD, and storage controller topics.", icon: <HardDrive />, slug: "understand-device-not-detected", image: "/guide/storage-drives.avif" },
    { title: "Keyboard Input", count: "Input Guides", desc: "Keyboard mapping and key input basics.", icon: <Keyboard />, slug: "understand-input-latency-drivers", image: "/guide/keyboard-input.avif" },
    { title: "BIOS Firmware", count: "Firmware Guides", desc: "Firmware and boot-level system information.", icon: <ShieldCheck />, slug: "guide-bios-firmware-updates", image: "/needdriver/need-hardware-stop.avif" },
    { title: "Battery Logic", count: "Power Guides", desc: "Battery and power management basics.", icon: <Zap />, slug: "understand-driver-update-topics", image: "/needdriver/need-windows-update.avif" },
  ];

  return (
    <section className="relative bg-[#050738] py-24 px-6 font-[Poppins] overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#1DA7F2,transparent_35%)]" />

      <div className="relative max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF]/50 text-[#315BFF] text-[13px] font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              Learning Directory
            </p>

            <h2 className="text-[34px] 2xl:text-[54px] leading-tight font-semibold text-white max-w-[760px]">
              Browse simple driver topics designed for{" "}
              <span className="text-[#315BFF]">clear learning.</span>
            </h2>
          </div>

          <Link
            to="/guides"
            className="w-fit h-[54px] px-7 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold flex items-center gap-3 hover:bg-[#1DA7F2] transition"
          >
            View More Guides
            <span className="w-8 h-8 rounded-full bg-white text-[#315BFF] flex items-center justify-center">
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>

        <div className="border-t border-white/10 max-h-[950px] overflow-y-auto pr-4 custom-scrollbar">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={`/guide/${item.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-[90px_1fr_260px] gap-8 items-center py-9 border-b border-white/10"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-[#315BFF] text-white flex items-center justify-center">
                {React.cloneElement(item.icon, { size: 34, strokeWidth: 1.8 })}
              </div>

              <div>
                <h3 className="text-[24px] font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-7 text-white/65 max-w-[760px]">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-white text-[13px]">
                    {item.count}
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-white text-[13px]">
                    Driver Info
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-white text-[13px]">
                    Learning
                  </span>
                </div>
              </div>

              <div className="h-[170px] rounded-[14px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}