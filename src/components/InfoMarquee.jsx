import React from "react";
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
    { text: "Graphics", sub: "Display & GPU basics", icon: MonitorOff },
    { text: "Audio", sub: "Sound device info", icon: Volume2 },
    { text: "Wi-Fi", sub: "Wireless connection", icon: Wifi },
    { text: "Printer", sub: "Print device topics", icon: Printer },
    { text: "USB", sub: "Port detection info", icon: Usb },
    { text: "Bluetooth", sub: "Pairing basics", icon: Bluetooth },
    { text: "Webcam", sub: "Camera input info", icon: Video },
    { text: "Scanner", sub: "Scan device basics", icon: Scan },
    { text: "Chipset", sub: "Core system bridge", icon: Cpu },
    { text: "Touchpad", sub: "Input gesture info", icon: MousePointer2 },
    { text: "Storage", sub: "SSD & HDD topics", icon: HardDrive },
    { text: "Keyboard", sub: "Key input basics", icon: Keyboard },
    { text: "BIOS / UEFI", sub: "Firmware basics", icon: ShieldCheck },
    { text: "Battery", sub: "Power management", icon: Zap },
    { text: "Display", sub: "Resolution topics", icon: Layout },
    { text: "Network", sub: "Ethernet & LAN", icon: Network },
  ];

  const brandColor = "#2563eb";

  return (
    <section className="w-full bg-white py-14 px-4 md:px-8 font-[Poppins] border-b border-slate-100">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {issues.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative min-h-[118px] flex flex-col items-center justify-center text-center rounded-[18px] bg-white hover:bg-[#f6f9ff] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-3 group-hover:bg-[#2563eb] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <h3 className="text-[14px] md:text-[15px] font-semibold text-slate-900 group-hover:text-[#2563eb] transition">
                  {item.text}
                </h3>

                <p className="text-[11px] leading-tight text-slate-400 mt-1 max-w-[120px]">
                  {item.sub}
                </p>

                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-10 transition-all duration-300"
                  style={{ backgroundColor: brandColor }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoMarquee;