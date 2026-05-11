import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaMicrochip,
  FaDesktop,
  FaVolumeUp,
  FaWifi,
  FaUsb,
  FaBluetooth,
  FaKeyboard,
  FaPrint,
  FaVideo,
  FaCode,
  FaShieldAlt,
  FaTv,
  FaSearchPlus,
  FaDatabase,
} from "react-icons/fa";
import { X, Search, BookOpen, ArrowRight } from "lucide-react";
import { guidesData } from "../data/guidesData";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = showSearchBox || isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSearchBox, isOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = guidesData.filter(
      (guide) =>
        guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm]);

  const driverCategories = [
    {
      title: "Main System",
      items: [
        { name: "Chipset Drivers", icon: <FaMicrochip />, slug: "guide-chipset-drivers" },
        { name: "Graphics Drivers", icon: <FaDesktop />, slug: "understand-graphics-driver-topics" },
        { name: "Audio Drivers", icon: <FaVolumeUp />, slug: "understand-audio-driver-topics" },
        { name: "Network Drivers", icon: <FaWifi />, slug: "understand-wifi-network-topics" },
      ],
    },
    {
      title: "Connected Devices",
      items: [
        { name: "Bluetooth Drivers", icon: <FaBluetooth />, slug: "understand-bluetooth-driver-topics" },
        { name: "USB Drivers", icon: <FaUsb />, slug: "understand-usb-driver-topics" },
        { name: "Keyboard Drivers", icon: <FaKeyboard />, slug: "understand-input-latency-drivers" },
        { name: "Storage Drivers", icon: <FaDatabase />, slug: "understand-device-not-detected" },
      ],
    },
    {
      title: "External Devices",
      items: [
        { name: "Printer Drivers", icon: <FaPrint />, slug: "understand-printer-driver-topics" },
        { name: "Scanner Drivers", icon: <FaSearchPlus />, slug: "understand-scanner-driver-topics" },
        { name: "Webcam Drivers", icon: <FaVideo />, slug: "understand-webcam-driver-topics" },
        { name: "Monitor Drivers", icon: <FaTv />, slug: "understand-graphics-driver-topics" },
      ],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] bg-white transition-all duration-300 ${scrolled ? "shadow-[0_8px_30px_rgba(15,23,42,0.08)]" : ""
          }`}
      >
        <div className="max-w-[1600px] mx-auto h-[74px] px-6 lg:px-10 flex items-center justify-between font-[Poppins]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo/logo.avif"
              alt="Aura Learning"
              className="h-[68px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center h-full ml-10">
            <Link
              to="/"
              className={`h-full px-8 flex items-center text-[15px] font-semibold transition ${location.pathname === "/"
                ? "bg-[#104CEF] text-white"
                : "text-[#14233b] hover:text-[#104CEF]"
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`h-full px-7 flex items-center text-[15px] font-semibold transition ${location.pathname === "/about"
                ? "bg-[#104CEF] text-white"
                : "text-[#14233b] hover:text-[#104CEF]"
                }`}
            >
              About Us
            </Link>



            <div
              className="relative h-full"
              onMouseEnter={() => setActiveDropdown("pages")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`h-full px-7 flex items-center gap-2 text-[15px] font-semibold transition ${location.pathname.startsWith("/guide/")
                ? "bg-[#104CEF] text-white"
                : "text-[#14233b] hover:text-[#104CEF]"
                }`}>
                Guides<FaChevronDown className="text-[11px]" />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full w-[850px] pt-4 transition-all duration-300 ${activeDropdown === "pages"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-3"
                  }`}
              >
                <div className="bg-white border border-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.14)] p-7 grid grid-cols-3 gap-6 rounded-sm">
                  {driverCategories.map((cat, idx) => (
                    <div key={idx}>
                      <h4 className="text-[15px] font-semibold text-slate-900 mb-4">
                        {cat.title}
                      </h4>

                      <div className="space-y-2">
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            to={`/guide/${item.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-3 p-3 rounded-md hover:bg-[#f0fdfa] transition group"
                          >
                            <span className="w-9 h-9 rounded-md bg-[#ccfbf1] text-[#0f766e] flex items-center justify-center">
                              {item.icon}
                            </span>
                            <span className="text-[14px] font-medium text-slate-700 group-hover:text-[#0f766e]">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/faq"
              className={`h-full px-7 flex items-center text-[15px] font-semibold transition ${location.pathname === "/faq"
                ? "bg-[#104CEF] text-white"
                : "text-[#14233b] hover:text-[#104CEF]"
                }`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className={`h-full px-7 flex items-center text-[15px] font-semibold transition ${location.pathname === "/contact"
                ? "bg-[#104CEF] text-white"
                : "text-[#14233b] hover:text-[#104CEF]"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => setShowSearchBox(true)}
              aria-label="Open search"
              className="text-[#07152c] hover:text-[#104CEF] transition"
            >
              <FaSearch className="text-[23px]" />
            </button>

            <Link
              to="/guides"
              aria-label="Explore driver information guides"
              className="h-[50px] px-8 rounded-[4px] bg-[#104CEF] text-white text-[15px] font-semibold flex items-center gap-2 hover:bg-[#0f766e] transition"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setShowSearchBox(true)}
              aria-label="Open search"
              className="w-10 h-10 rounded-md bg-[#f0fdfa] text-[#0f766e] flex items-center justify-center"
            >
              <Search size={19} />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="w-10 h-10 rounded-md bg-[#104CEF] text-white flex items-center justify-center"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-white transition-all duration-500 ${showSearchBox ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <button
          onClick={() => {
            setShowSearchBox(false);
            setSearchTerm("");
          }}
          aria-label="Close search"
          className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center"
        >
          <X size={24} />
        </button>

        <div className="max-w-[900px] mx-auto px-6 pt-28">
          <h2 className="text-center text-[34px] md:text-[44px] font-semibold text-slate-900 mb-8">
            Search Drivers Problem
          </h2>

          <div className="relative mb-10">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#104CEF]" />
            <input
              autoFocus={showSearchBox}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search WiFi, Printer, Audio, Graphics..."
              className="w-full h-[64px] border border-slate-200 rounded-md pl-14 pr-5 text-[17px] outline-none focus:border-[#104CEF]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchResults.map((res, idx) => (
              <Link
                key={idx}
                to={`/guide/${res.slug}`}
                onClick={() => {
                  setShowSearchBox(false);
                  setSearchTerm("");
                }}
                className="p-5 border border-slate-100 rounded-md hover:border-[#104CEF] hover:bg-[#f0fdfa] transition"
              >
                <h4 className="text-[16px] font-semibold text-slate-900">
                  {res.title}
                </h4>
                <p className="text-[13px] text-slate-500 mt-2 line-clamp-1">
                  {res.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[150] ${isOpen ? "visible" : "invisible"}`}>
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-950/40 transition ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[84%] bg-white shadow-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <img src="/logo/logo.avif" alt="Aura Learning" className="h-9 w-auto" />
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6 space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Drivers Problem", path: "/guides" },
              { name: "FAQ", path: "/faq" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block p-4 rounded-md font-semibold transition ${location.pathname === link.path
                  ? "bg-[#104CEF] text-white"
                  : "bg-slate-50 text-slate-900"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/guides"
              onClick={() => setIsOpen(false)}
              aria-label="Explore driver information guides"
              className="mt-5 h-[52px] bg-[#104CEF] text-white rounded-md font-semibold flex items-center justify-center gap-2"
            >
              Learn More <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
