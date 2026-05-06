import React from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#06468fe8] text-white ">
      {/* BG Shape */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/footer/footer-shape.png')" }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 pt-28 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 ">
          {/* Brand Section */}
          <div >
            <Link to="/" className="inline-flex items-center mb-6">
              <img
                src="/logo/logo.avif"
                alt="Charmliora"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-[15px] leading-7 text-white max-w-[320px]">
              Your resource for understanding hardware drivers and device
              communication.
            </p>
            <div className="mt-10">
              <h3 className="text-[22px] font-extrabold mb-5">Email Us</h3>
              <a
                href="mailto:info@misterpcdriver.com"
                className="flex items-center gap-2 text-[15px] text-white hover:text-cyan-200 transition"
              >
                <Mail className="w-4 h-4" />
                info@misterpcdriver.com
              </a>
            </div>
          </div>

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
              { name: "Installation Guides", path: "/guide/fix-driver-not-installed" },
              { name: "Update Information", path: "/guide/fix-driver-not-installed" },
              { name: "Hardware Connection", path: "/guide/fix-usb-driver-issues" },
              { name: "Audio Problems", path: "/guide/fix-audio-driver-problems" },
              { name: "WiFi & Network", path: "/guide/fix-wifi-network-issues" },
              { name: "Graphics & Display", path: "/guide/fix-graphics-driver-issues" },
            ]}
          />

          <div>
            <FooterColumn
              title="Driver Topics"
              links={[
                { name: "Printer Drivers", path: "/driver/printer-drivers" },
                { name: "Network Drivers", path: "/driver/network-drivers" },
                { name: "Audio Drivers", path: "/driver/audio-drivers" },
                { name: "Graphics Drivers", path: "/driver/graphics-drivers" },
                { name: "Bluetooth Drivers", path: "/driver/bluetooth-drivers" },
                { name: "USB Support", path: "/driver/usb-support" },
              ]}
            />


          </div>
          {/* Policies */}
          <div className="">
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


      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#073d7d] py-6 px-6 text-center">
        <p className="text-[15px] text-white">
          © {currentYear} Charmliora. All information is for educational
          purposes.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, horizontal = false }) {
  return (
    <div>
      <h3 className="text-[22px] font-extrabold mb-5">{title}</h3>

      <ul
        className={
          horizontal
            ? "flex flex-wrap gap-x-8 gap-y-3"
            : "space-y-4"
        }
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-[15px] text-white hover:text-cyan-200 transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}