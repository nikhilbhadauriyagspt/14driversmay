import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 font-[Poppins]">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="py-20 grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-7">
              <img
                src="/logo/logo.avif"
                alt="Aura Learning - Driver Information Guides"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-[15px] leading-relaxed text-slate-500 max-w-[390px] mb-6">
              An educational resource to learn about computer drivers and hardware communication.

            </p>

            <a
              href="mailto:info@auralearning.co"
              className="inline-flex items-center gap-3 text-[15px] font-medium text-slate-700 hover:text-[#2563eb] transition"
            >
              <span className="w-11 h-11 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                <Mail size={18} />
              </span>
              info@auralearning.co
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <FooterColumn
              title="Quick Links"
              links={[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Guides", path: "/guides" },
                { name: "Common Questions", path: "/faq" },
                { name: "Contact Us", path: "/contact" },
              ]}
            />

            <FooterColumn
              title="Easy Guides"
              links={[
                { name: "Missing Drivers", path: "/guide/understand-driver-not-installed" },
                { name: "Update Topics", path: "/guide/understand-driver-update-topics" },
                { name: "Scanner Info", path: "/guide/understand-scanner-driver-topics" },
                { name: "Webcam Info", path: "/guide/understand-webcam-driver-topics" },
                { name: "BIOS Guides", path: "/guide/guide-bios-firmware-updates" },
              ]}
            />

            <FooterColumn
              title="Core Drivers"
              links={[
                { name: "Printer Info", path: "/guide/understand-printer-driver-topics" },
                { name: "Internet & WiFi", path: "/guide/understand-wifi-network-topics" },
                { name: "Sound & Audio", path: "/guide/understand-audio-driver-topics" },
                { name: "Screen & Video", path: "/guide/understand-graphics-driver-topics" },
                { name: "USB Ports", path: "/guide/understand-usb-driver-topics" },
              ]}
            />

            <FooterColumn
              title="Our Policies"
              links={[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Use", path: "/terms-of-service" },
                { name: "Cookie Policy", path: "/cookie-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
              ]}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="py-7 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-slate-500 text-[14px]">
            © {currentYear}{" "}
            <span className="text-slate-900 font-medium">Aura Learning</span>.
            Simple Computer Learning Site.
          </p>

          <Link
            to="/guides"
            className="text-[14px] font-medium text-[#2563eb] inline-flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All Guides <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900 mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-[14px] text-slate-500 hover:text-[#2563eb] transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}