import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaBookOpen,
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const driverCategories = [
    {
      title: "Main System",
      subtitle: "Core computer parts",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        {
          name: "Chipset",
          desc: "Helps all parts talk to each other",
          icon: <FaMicrochip />,
          slug: "guide-chipset-drivers",
        },
        {
          name: "Graphics",
          desc: "Identify screen, video, or game topics",
          icon: <FaDesktop />,
          slug: "understand-graphics-driver-topics",
        },
        {
          name: "Audio",
          desc: "Identify sound, mic, or speaker topics",
          icon: <FaVolumeUp />,
          slug: "understand-audio-driver-topics",
        },
        {
          name: "Network",
          desc: "Identify WiFi or internet topics",
          icon: <FaWifi />,
          slug: "understand-wifi-network-topics",
        },
      ],
    },
    {
      title: "Connecting",
      subtitle: "Plugs and wireless",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      items: [
        {
          name: "Bluetooth",
          desc: "Wireless mouse or headphones info",
          icon: <FaBluetooth />,
          slug: "understand-bluetooth-driver-topics",
        },
        {
          name: "USB Ports",
          desc: "Identify topics with USB plug points",
          icon: <FaUsb />,
          slug: "understand-usb-driver-topics",
        },
        {
          name: "Touchpad & Keys",
          desc: "Identify typing or mouse pad topics",
          icon: <FaKeyboard />,
          slug: "understand-input-latency-drivers",
        },
        {
          name: "Storage",
          desc: "Understand hard drive data",
          icon: <FaDatabase />,
          slug: "understand-device-not-detected",
        },
      ],
    },
    {
      title: "External",
      subtitle: "Devices you plug in",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      items: [
        {
          name: "Printer",
          desc: "Identify printing or paper topics",
          icon: <FaPrint />,
          slug: "understand-printer-driver-topics",
        },
        {
          name: "Scanner",
          desc: "How to copy paper photos to PC",
          icon: <FaSearchPlus />,
          slug: "understand-scanner-driver-topics",
        },
        {
          name: "Webcam",
          desc: "Identify camera or video call topics",
          icon: <FaVideo />,
          slug: "understand-webcam-driver-topics",
        },
      ],
    },
    {
      title: "System Help",
      subtitle: "Software and settings",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      items: [
        {
          name: "BIOS / UEFI",
          desc: "Helps the computer start up",
          icon: <FaCode />,
          slug: "guide-bios-firmware-updates",
        },
        {
          name: "Security",
          desc: "Keep your computer safe and clean",
          icon: <FaShieldAlt />,
          slug: "understand-driver-update-topics",
        },
        {
          name: "Monitor",
          desc: "Change brightness and colors",
          icon: <FaTv />,
          slug: "understand-graphics-driver-topics",
        },
      ],
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : ""
          }`}
      >
        <div className="relative w-full h-[70px] bg-white overflow-visible border-b border-slate-100">
          <div className="absolute inset-0 repeating-bg opacity-60 pointer-events-none"></div>

          <div
            className="absolute left-0 top-0 h-full w-[31%] min-w-[420px] bg-white flex items-center pl-[8%] pr-16 z-20"
            style={{
              clipPath: "polygon(0 0, 82% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 repeating-bg pointer-events-none opacity-60"></div>
            <Link to="/" className="flex items-center relative z-10">
              <img
                src="/logo/logo.avif"
                alt="Pix Circuit"
                width="210"
                height="40"
                className="h-[40px] w-auto object-contain"
              />
            </Link>
          </div>

          <div className="max-w-[1600px] mx-auto h-full flex items-center justify-end pl-[430px] pr-8 relative z-10">
            <nav className="hidden lg:flex items-center gap-7 2xl:gap-12 text-slate-700">
              <Link to="/" className="text-[15px] font-medium hover:text-[#005DE0] transition-colors">
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("guides")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 hover:text-[#005DE0] transition-colors">
                  Driver Guides +
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-8 w-[1150px] 2xl:w-[1250px] transition-all duration-300 ${activeDropdown === "guides"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-4"
                    }`}
                >
                  <div className="bg-white rounded-sm shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-[320px_1fr]">
                      <div className="bg-[#F8FAFC] p-10 border-r border-slate-100 text-center">
                        <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6 text-[#005DE0]">
                          <BookOpen size={36} />
                        </div>

                        <h3 className="text-[22px] font-semibold text-slate-900 mb-3">
                          Learning Center
                        </h3>

                        <p className="text-[14px] text-slate-500 leading-relaxed mb-8">
                          Explore simple educational guides about computer driver
                          and device topics.
                        </p>

                        <Link
                          to="/guides"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center justify-center h-12 px-7 rounded-sm btn-gradient text-white text-[14px] font-medium transition-all"
                        >
                          VIEW ALL GUIDES
                        </Link>
                      </div>

                      <div className="grid grid-cols-4 divide-x divide-slate-100 p-8">
                        {driverCategories.map((cat, idx) => (
                          <div key={idx} className="px-5">
                            <h4 className={`text-[16px] font-semibold mb-1 ${cat.color}`}>
                              {cat.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 mb-6 uppercase tracking-wider">
                              {cat.subtitle}
                            </p>

                            <div className="space-y-4">
                              {cat.items.map((item, i) => (
                                <Link
                                  key={i}
                                  to={`/guide/${item.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start gap-3"
                                >
                                  <div
                                    className={`w-9 h-9 rounded-md ${cat.bgColor} ${cat.color} flex items-center justify-center shrink-0 text-[15px]`}
                                  >
                                    {item.icon}
                                  </div>

                                  <div>
                                    <p className="text-[14px] font-semibold text-slate-900 group-hover:text-[#005DE0] transition">
                                      {item.name}
                                    </p>
                                    <p className="text-[11px] text-slate-500 leading-tight mt-1">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <Link
                              to="/guides"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-block mt-7 text-[13px] font-medium text-[#005DE0] hover:underline"
                            >
                              View all →
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/faq" className="text-[15px] font-medium hover:text-[#005DE0] transition-colors">
                FAQ
              </Link>

              <Link to="/about" className="text-[15px] font-medium hover:text-[#005DE0] transition-colors">
                About
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-6 ml-10">
              <div
                onClick={() => setShowSearchBox(true)}
                className="relative flex items-center cursor-pointer group"
              >
                <div className="absolute left-10 w-8 h-8 rounded-full btn-gradient flex items-center justify-center text-white z-10 shadow-sm transition-transform group-hover:scale-105">
                  <Search size={14} />
                </div>
                <div className="h-[46px] w-[260px] pl-12 pr-6 rounded-full border border-slate-200 bg-white flex items-center text-slate-400 font-medium text-[13px] group-hover:border-[#005DE0] group-hover:shadow-md transition-all">
                  Search guides...
                </div>
              </div>

              <Link
                to="/guides"
                className="h-[46px] px-8 btn-gradient rounded-full text-white font-semibold text-[14px] flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:hidden ml-auto flex items-center gap-3">
              <button
                onClick={() => setShowSearchBox(true)}
                className="w-10 h-10 rounded-full btn-gradient text-white flex items-center justify-center transition-all shadow-md"
              >
                <Search size={18} />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay Redesign */}
      <div
        className={`fixed inset-0 z-[200] bg-white transition-all duration-500 flex flex-col ${showSearchBox
          ? "opacity-100 visible"
          : "opacity-0 invisible translate-y-10"
          }`}
      >
        <div className="max-w-[1200px] mx-auto w-full px-6 pt-24 pb-10 flex flex-col h-full overflow-hidden">

          <button
            onClick={() => {
              setShowSearchBox(false);
              setSearchTerm("");
            }}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
              <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                Search Knowledge Base
              </span>
            </div>

            <h2 className="text-[30px] md:text-[40px] font-semibold text-slate-900 leading-tight">
              What do you want to learn?
            </h2>
          </div>

          <div className="relative max-w-[800px] mx-auto w-full mb-12 flex gap-4">
            <div className="relative flex-1">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#005DE0]">
                <Search size={22} />
              </div>
              <input
                autoFocus={showSearchBox}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search guides (e.g. WiFi, Printer, Audio)..."
                className="w-full h-[64px] rounded-sm border border-slate-200 bg-white pl-14 pr-6 text-[18px] outline-none focus:border-[#005DE0] focus:ring-4 focus:ring-blue-50/50 transition-all shadow-sm"
              />
            </div>
            <button className="h-[64px] px-10 rounded-sm btn-gradient text-white font-semibold text-[14px] transition-all shadow-lg shadow-blue-900/10 active:scale-95">
              SEARCH
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
            {searchTerm ? (
              searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((res, idx) => (
                    <Link
                      key={idx}
                      to={`/guide/${res.slug}`}
                      onClick={() => {
                        setShowSearchBox(false);
                        setSearchTerm("");
                      }}
                      className="group p-6 rounded-sm border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#005DE0]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                    >
                      <h4 className="text-[17px] font-semibold text-slate-900 group-hover:text-[#005DE0] transition-colors">
                        {res.title}
                      </h4>
                      <p className="text-[13px] text-slate-500 line-clamp-1 mt-2">
                        {res.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-[#005DE0] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                        Read Guide <ArrowRight size={12} />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-[20px] font-semibold text-slate-900 mb-2">
                    No guides found
                  </h3>
                  <p className="text-slate-500 text-[15px]">
                    Try searching for something else like "Audio" or "Network".
                  </p>
                </div>
              )
            ) : (
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "WiFi",
                  "Printer",
                  "Audio",
                  "Graphics",
                  "Bluetooth",
                  "USB",
                  "Network",
                  "Camera",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-[14px] font-medium hover:bg-[#005DE0] hover:text-white hover:border-[#005DE0] transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Redesign */}
      <div className={`lg:hidden fixed inset-0 z-[150] ${isOpen ? "visible" : "invisible"}`}>
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] bg-white transition-transform duration-500 shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-slate-50">
            <img src="/logo/logo.avif" alt="Pix Circuit" className="h-9" />

            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block p-4 rounded-sm bg-slate-50 text-slate-900 font-semibold text-[15px] hover:bg-[#005DE0] hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="px-6 pb-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
            <div className="space-y-8">
              {driverCategories.map((cat, idx) => (
                <div key={idx}>
                  <h4 className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-4 ${cat.color}`}>
                    {cat.title}
                  </h4>

                  <div className="grid grid-cols-1 gap-2">
                    {cat.items.map((item, i) => (
                      <Link
                        key={i}
                        to={`/guide/${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-sm bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all group"
                      >
                        <span className={`${cat.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                        <span className="font-medium text-slate-700 text-[14px]">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-slate-50">
            <Link
              to="/guides"
              onClick={() => setIsOpen(false)}
              className="w-full h-[56px] btn-gradient text-white rounded-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              Explore All Guides <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;