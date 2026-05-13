import React from "react";
import { Link } from "react-router-dom";
import {
  MonitorOff,
  Volume2,
  Wifi,
  Printer,
  Usb,
  Bluetooth,
  Video,
  Scan,
  Cpu,
  MousePointer2,
  HardDrive,
  Keyboard,
  ShieldCheck,
  Zap,
  Layout,
  Network,
} from "lucide-react";

const InfoMarquee = () => {
  const issues = [
    {
      text: "Audio feels low or unclear?",
      icon: Volume2,
      slug: "understand-audio-driver-topics",
    },
    {
      text: "Wi-Fi keeps dropping?",
      icon: Wifi,
      slug: "understand-wifi-network-topics",
    },
    {
      text: "Screen looks stretched?",
      icon: MonitorOff,
      slug: "understand-graphics-driver-topics",
    },
    {
      text: "Printer not responding?",
      icon: Printer,
      slug: "understand-printer-driver-topics",
    },
    {
      text: "USB device not detected?",
      icon: Usb,
      slug: "understand-usb-driver-topics",
    },
    {
      text: "Bluetooth pairing confusing?",
      icon: Bluetooth,
      slug: "understand-bluetooth-driver-topics",
    },
    {
      text: "Webcam image looks unclear?",
      icon: Video,
      slug: "understand-webcam-driver-topics",
    },
    {
      text: "Scanner not showing up?",
      icon: Scan,
      slug: "understand-scanner-driver-topics",
    },
    {
      text: "Laptop touchpad acting slow?",
      icon: MousePointer2,
      slug: "understand-input-latency-drivers",
    },
    {
      text: "Keyboard input feels delayed?",
      icon: Keyboard,
      slug: "understand-input-latency-drivers",
    },
    {
      text: "Storage drive not visible?",
      icon: HardDrive,
      slug: "understand-device-not-detected",
    },
    {
      text: "Battery drains too fast?",
      icon: Zap,
      slug: "understand-driver-update-topics",
    },
    {
      text: "Display resolution looks wrong?",
      icon: Layout,
      slug: "understand-graphics-driver-topics",
    },
    {
      text: "Ethernet connection unstable?",
      icon: Network,
      slug: "understand-wifi-network-topics",
    },
    {
      text: "Need to understand chipset role?",
      icon: Cpu,
      slug: "guide-chipset-drivers",
    },
    {
      text: "BIOS or firmware sounds confusing?",
      icon: ShieldCheck,
      slug: "guide-bios-firmware-updates",
    },
  ];

  return (
    <section className="relative z-30 bg-white px-6 py-20 font-[Poppins] border-b border-slate-200">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Driver Topics
          </p>

          <h2 className="text-[34px] font-medium leading-tight text-[#111827] md:text-[44px]">
            Simple Driver Learning Categories
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-8 text-slate-500">
            Learn about common computer driver topics like graphics, audio,
            Wi-Fi, printer, USB, Bluetooth, chipset, display, and more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
          {issues.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                to={`/guide/${item.slug}`}
                className="group inline-flex items-center gap-3 border-b border-slate-200 pb-3 transition hover:border-blue-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <span className="text-[15px] font-medium text-slate-800 transition group-hover:text-blue-600">
                  {item.text}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoMarquee;