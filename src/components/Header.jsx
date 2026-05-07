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
import { servicesData } from "../data/services";

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

    const results = servicesData.filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.12)]" : ""
          }`}
      >
        <div className="relative w-full h-[70px] bg-[#0C66E5] overflow-visible">
          <div
            className="absolute left-0 top-0 h-full w-[31%] min-w-[420px] bg-white flex items-center pl-[8%] pr-16 z-20"
            style={{
              clipPath: "polygon(0 0, 82% 0, 100% 100%, 0% 100%)",
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(15,23,42,0.055) 0px, rgba(15,23,42,0.055) 1px, transparent 1px, transparent 7px)",
            }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/logo/logo.avif"
                alt="Lappy Learns Top"
                width="210"
                height="40"
                className="h-[40px] w-auto object-contain"
              />
            </Link>
          </div>

          <div className="max-w-[1600px] mx-auto h-full flex items-center justify-end pl-[430px] pr-8">
            <nav className="hidden lg:flex items-center gap-8 text-white">
              <Link to="/" className="text-[16px] font-bold hover:text-white/80">
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("guides")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[16px] font-bold text-white hover:text-white/80">
                  Driver Guides +
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-8 w-[1250px] transition-all duration-300 ${activeDropdown === "guides"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-4"
                    }`}
                >
                  <div className="bg-white rounded-[18px] shadow-[0_30px_90px_rgba(15,23,42,0.22)] border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-[320px_1fr]">
                      <div className="bg-[#F4F9FF] p-10 border-r border-slate-100 text-center">
                        <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6 text-[#0675DB]">
                          <FaBookOpen size={40} />
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-3">
                          Driver Learning Center
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed mb-7">
                          Explore simple educational guides about computer driver
                          and device topics.
                        </p>

                        <Link
                          to="/guides"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-[#0675DB] text-white text-sm font-bold hover:bg-[#045fb4] transition"
                        >
                          VIEW ALL GUIDES →
                        </Link>
                      </div>

                      <div className="grid grid-cols-4 divide-x divide-slate-100 p-8">
                        {driverCategories.map((cat, idx) => (
                          <div key={idx} className="px-5">
                            <h4 className={`text-[17px] font-black mb-1 ${cat.color}`}>
                              {cat.title}
                            </h4>
                            <p className="text-[12px] text-slate-400 mb-6">
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
                                    className={`w-10 h-10 rounded-lg ${cat.bgColor} ${cat.color} flex items-center justify-center shrink-0 text-[16px]`}
                                  >
                                    {item.icon}
                                  </div>

                                  <div>
                                    <p className="text-[14px] font-black text-slate-900 group-hover:text-[#0675DB] transition">
                                      {item.name}
                                    </p>
                                    <p className="text-[12px] text-slate-500 leading-tight mt-1">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <Link
                              to="/guides"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-block mt-7 text-[13px] font-bold text-[#0675DB]"
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

              <Link to="/faq" className="text-[16px] font-bold hover:text-white/80">
                FAQ
              </Link>

              <Link to="/about" className="text-[16px] font-bold hover:text-white/80">
                About
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-7 ml-10">
              <button
                onClick={() => setShowSearchBox(true)}
                aria-label="Open search"
                className="w-[50px] h-[50px] rounded-full border-2 border-dashed border-white/80 text-white flex items-center justify-center hover:bg-white hover:text-[#0675DB] transition"
              >
                <FaSearch size={23} />
              </button>

              <Link
                to="/guides"
                className="h-[50px] px-9 bg-white rounded-md text-[#0675DB] font-black text-[14px] flex items-center justify-center gap-3 hover:bg-slate-100 transition"
              >
                Learn More
                <span className="text-xl">→</span>
              </Link>


            </div>

            <div className="lg:hidden ml-auto flex items-center gap-3">
              <button
                onClick={() => setShowSearchBox(true)}
                className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center"
              >
                <FaSearch />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="w-11 h-11 rounded-full bg-white text-[#0675DB] flex items-center justify-center"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <div
        ref={searchRef}
        className={`fixed inset-0 z-[200] bg-white transition-all duration-500 flex flex-col ${showSearchBox
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-full"
          }`}
      >
        <div className="max-w-[1050px] mx-auto w-full px-6 pt-20 pb-10 flex flex-col h-full">
          <button
            onClick={() => {
              setShowSearchBox(false);
              setSearchTerm("");
            }}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-950"
          >
            <FaTimes size={20} />
          </button>

          <p className="text-center text-[12px] tracking-[0.35em] uppercase font-black text-[#0675DB] mb-4">
            Search Driver Guides
          </p>

          <h2 className="text-center text-3xl md:text-5xl font-black text-slate-950 mb-10">
            Find the right topic to learn
          </h2>

          <div className="relative max-w-[800px] mx-auto w-full mb-10">
            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              autoFocus={showSearchBox}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search driver guides (e.g. WiFi, Printer, Graphics)..."
              className="w-full h-[68px] rounded-full border border-slate-200 bg-white pl-14 pr-36 text-lg font-semibold outline-none focus:border-[#0675DB] shadow-sm"
            />
            <button className="absolute right-2 top-2 h-[52px] px-9 rounded-full bg-[#0675DB] text-white font-black">
              Search
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {searchTerm ? (
              searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((res) => (
                    <div
                      key={res.id}
                      onClick={() => {
                        navigate(`/driver/${res.slug}`);
                        setShowSearchBox(false);
                        setSearchTerm("");
                      }}
                      className="group p-5 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/40 transition cursor-pointer"
                    >
                      <h4 className="text-lg font-black text-slate-900 group-hover:text-[#0675DB]">
                        {res.title}
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-1 mt-1">
                        {res.shortDesc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    No guides found
                  </h3>
                  <p className="text-slate-500">
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
                    className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-[#0675DB] hover:text-white transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[150] ${isOpen ? "visible" : "invisible"}`}>
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-950/60 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[86%] bg-white p-6 transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center mb-8">
            <img src="/logo/logo.avif" alt="Lappy Learns Top" className="h-10" />

            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>

          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block p-4 rounded-xl bg-slate-50 text-slate-900 font-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-7 space-y-5 overflow-y-auto max-h-[58vh]">
            {driverCategories.map((cat, idx) => (
              <div key={idx}>
                <h4 className={`text-xs font-black uppercase mb-3 ${cat.color}`}>
                  {cat.title}
                </h4>

                <div className="space-y-2">
                  {cat.items.map((item, i) => (
                    <Link
                      key={i}
                      to={`/guide/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50"
                    >
                      <span className={`${cat.color}`}>{item.icon}</span>
                      <span className="font-bold text-slate-700 text-sm">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/guides"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full bg-[#0675DB] text-white py-4 rounded-md font-black flex items-center justify-center"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;