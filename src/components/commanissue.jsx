import React from "react";
import {
  Wifi,
  Volume2,
  Monitor,
  Printer,
  Usb,
  Download,
  Bluetooth,
  Video,
  Keyboard,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommonProblems() {
  const categories = [
    {
      title: "Audio not working properly?",
      desc: "Understand how audio drivers relate to speakers, headphones, and microphone sound.",
      icon: <Volume2 />,
      slug: "understand-audio-driver-topics",
      image: "/guide/guide-audio-driver.avif",
    },
    {
      title: "Wi-Fi keeps disconnecting?",
      desc: "Learn about wireless, network adapters, and connection-related driver topics.",
      icon: <Wifi />,
      slug: "understand-wifi-network-topics",
      image: "/guide/guide-network-driver.avif",
    },
    {
      title: "Display looks stretched?",
      desc: "Explore graphics, screen resolution, display adapters, and visual driver basics.",
      icon: <Monitor />,
      slug: "understand-graphics-driver-topics",
      image: "/guide/guide-graphics-driver.avif",
    },
    {
      title: "Printer not responding?",
      desc: "Read simple printer driver information and how devices communicate with computers.",
      icon: <Printer />,
      slug: "understand-printer-driver-topics",
      image: "/guide/guide-printer-driver.avif",
    },
    {
      title: "USB device not detected?",
      desc: "Learn about USB ports, external devices, and recognition-related driver topics.",
      icon: <Usb />,
      slug: "understand-usb-driver-topics",
      image: "/guide/guide-usb-driver.avif",
    },
    {
      title: "Driver file seems missing?",
      desc: "Understand why devices may appear unknown or incomplete in system information.",
      icon: <Download />,
      slug: "understand-driver-not-installed",
      image: "/guide/guide-driver-not-installed.avif",
    },
    {
      title: "Bluetooth pairing confusing?",
      desc: "Learn how Bluetooth drivers support wireless keyboards, headphones, and devices.",
      icon: <Bluetooth />,
      slug: "understand-bluetooth-driver-topics",
      image: "/needdriver/need-new-device.avif",
    },
    {
      title: "Webcam image looks unclear?",
      desc: "Explore camera input, video device behavior, and webcam driver learning topics.",
      icon: <Video />,
      slug: "understand-webcam-driver-topics",
      image: "/guide/webcam-drivers.avif",
    },
    {
      title: "Keyboard typing feels delayed?",
      desc: "Learn how keyboard input and related driver topics can affect typing response.",
      icon: <Keyboard />,
      slug: "understand-input-latency-drivers",
      image: "/guide/keyboard-input.avif",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 font-[Poppins]">
      <div className="absolute left-0 top-20 h-[340px] w-[340px] rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-orange-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[780px] text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Common Driver Topics
          </span>

          <h2 className="text-[34px] font-medium leading-tight text-[#071B34] md:text-[50px]">
            Explore device issues people often notice
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-8 text-slate-500">
            Simple educational guides about sound, Wi-Fi, display, printer,
            USB, Bluetooth, webcam, and other driver-related topics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={`/guide/${item.slug}`}
              className="group rounded-[24px] border border-slate-200 bg-white p-4 transition hover:border-blue-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[210px] w-full rounded-[18px] object-cover"
              />

              <div className="mt-5 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  {React.cloneElement(item.icon, {
                    size: 22,
                    strokeWidth: 1.8,
                  })}
                </span>

                <div>
                  <h3 className="text-[20px] font-medium text-[#071B34]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}