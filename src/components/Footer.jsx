import React from "react";
import { Mail, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#F7FBFF] font-['Poppins']">
      {/* Top CTA Strip */}
      <div className="bg-[#045fb4] px-6 py-10">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-white mb-3">
              Driver Learning Resource
            </p>
            <h2 className="text-[28px] md:text-[38px] font-black text-white leading-tight">
              Learn driver topics in simple words
            </h2>
          </div>

          <Link
            to="/guides"
            className="inline-flex w-fit items-center gap-3 bg-white text-[#0675DB] px-7 py-4 rounded-[6px] text-[14px] font-black hover:bg-blue-50 transition"
          >
            Browse Guides
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14">
          {/* Brand Box */}
          <div className="bg-white border border-blue-100 rounded-[10px] p-8">
            <Link to="/" className="inline-flex items-center mb-6">
              <img
                src="/logo/logo.avif"
                alt="Lappy Learns Top"
                width="210"
                height="48"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-[15px] leading-7 text-slate-600 max-w-[320px]">
              Your resource for understanding hardware drivers and device
              communication.
            </p>

            <div className="mt-8 pt-7 border-t border-slate-100">
              <h3 className="text-[18px] font-black text-slate-950 mb-4">
                Email Us
              </h3>

              <a
                href="mailto:info@lappylearnstop.co"
                className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#0675DB] hover:text-[#045fb4] transition"
              >
                <span className="w-10 h-10 rounded-[6px] bg-blue-50 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </span>
                info@lappylearnstop.co
              </a>
            </div>
          </div>

          {/* Links Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            <FooterColumn
              title="Quick Links"
              links={[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Guides", path: "/guides" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
              ]}
            />

            <FooterColumn
              title="Guides"
              links={[
                { name: "Information Guides", path: "/guide/understand-driver-not-installed" },
                { name: "Update Topics", path: "/guide/understand-driver-update-topics" },
                { name: "Scanner Topics", path: "/guide/understand-scanner-driver-topics" },
                { name: "Webcam Topics", path: "/guide/understand-webcam-driver-topics" },
                { name: "BIOS & Firmware", path: "/guide/guide-bios-firmware-updates" },
                { name: "Chipset Guide", path: "/guide/guide-chipset-drivers" },
              ]}
            />

            <FooterColumn
              title="Driver Topics"
              links={[
                { name: "Printer Information", path: "/guide/understand-printer-driver-topics" },
                { name: "Network Information", path: "/guide/understand-wifi-network-topics" },
                { name: "Audio Information", path: "/guide/understand-audio-driver-topics" },
                { name: "Graphics Information", path: "/guide/understand-graphics-driver-topics" },
                { name: "Bluetooth Information", path: "/guide/understand-bluetooth-driver-topics" },
                { name: "USB Information", path: "/guide/understand-usb-driver-topics" },
              ]}
            />

            <FooterColumn
              title="Policies"
              links={[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Cookie Policy", path: "/cookie-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
              ]}
            />
          </div>
        </div>

        {/* Notice */}
        <div className="mt-14 border border-blue-100 bg-white rounded-[8px] px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-[6px] bg-blue-50 text-[#0675DB] flex items-center justify-center">
              <BookOpen size={18} />
            </span>
            <p className="text-[14px] text-slate-600">
              All information is created for educational driver learning only.
            </p>
          </div>

          <Link
            to="/guides"
            className="text-[14px] font-black text-[#0675DB] inline-flex items-center gap-2"
          >
            View Guide Library
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#063c8d] py-6 px-6 text-center">
        <p className="text-[14px] text-white">
          © {currentYear} Lappy Learns Top. All information is for educational
          purposes.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[18px] font-black text-slate-950 mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="group inline-flex items-center gap-2 text-[15px] text-slate-600 hover:text-[#0675DB] transition"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-[#0675DB] transition" />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}