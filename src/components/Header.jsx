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
    if (showSearchBox || isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSearchBox, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

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
          slug: "chipset-drivers",
        },
        {
          name: "Graphics",
          desc: "Fix screen, video, or game issues",
          icon: <FaDesktop />,
          slug: "graphics-drivers",
        },
        {
          name: "Audio",
          desc: "Fix sound, mic, or speaker problems",
          icon: <FaVolumeUp />,
          slug: "audio-drivers",
        },
        {
          name: "Network",
          desc: "Fix WiFi or internet connection",
          icon: <FaWifi />,
          slug: "network-drivers",
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
          desc: "Connect wireless mouse or headphones",
          icon: <FaBluetooth />,
          slug: "bluetooth-drivers",
        },
        {
          name: "USB Ports",
          desc: "Fix issues with USB plug points",
          icon: <FaUsb />,
          slug: "usb-support",
        },
        {
          name: "Touchpad & Keys",
          desc: "Fix typing or mouse pad issues",
          icon: <FaKeyboard />,
          slug: "input-drivers",
        },
        {
          name: "Storage",
          desc: "Make hard drives work properly",
          icon: <FaDatabase />,
          slug: "storage-controller",
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
          desc: "Fix printing or paper errors",
          icon: <FaPrint />,
          slug: "printer-drivers",
        },
        {
          name: "Scanner",
          desc: "How to copy paper photos to PC",
          icon: <FaSearchPlus />,
          slug: "scanner-support",
        },
        {
          name: "Webcam",
          desc: "Fix camera or video call issues",
          icon: <FaVideo />,
          slug: "webcam-drivers",
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
          slug: "bios-uefi-firmware",
        },
        {
          name: "Security",
          desc: "Keep your computer safe and clean",
          icon: <FaShieldAlt />,
          slug: "security-drivers",
        },
        {
          name: "Monitor",
          desc: "Change brightness and colors",
          icon: <FaTv />,
          slug: "monitor-calibration",
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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-sky-100"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="h-[75px] flex items-center justify-between">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo/logo.avif"
                alt="Charmliora"
                className="h-[44px] w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              <Link
                to="/"
                className={`text-[15px] font-semibold transition ${location.pathname === "/"
                  ? "text-[#087dcc]"
                  : "text-[#063c8d] hover:text-[#087dcc]"
                  }`}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("guides")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-2 text-[15px] font-semibold text-[#063c8d] hover:text-[#087dcc] transition">
                  Driver Guides
                  <FaChevronDown size={10} />
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-7 w-[900px] transition-all duration-300 ${activeDropdown === "guides"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                    }`}
                >
                  <div className="bg-white border border-sky-100 shadow-2xl rounded-[22px] p-6 grid grid-cols-2 gap-5">
                    {driverCategories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-100"
                      >
                        <div className="flex items-center justify-between mb-5">
                          <h4 className={`text-[11px] font-bold uppercase ${cat.color}`}>
                            {cat.title}
                          </h4>
                          <span className="text-[10px] text-slate-400">
                            {cat.subtitle}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {cat.items.map((item, i) => (
                            <Link
                              key={i}
                              to={`/driver/${item.slug}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition"
                            >
                              <div
                                className={`w-9 h-9 rounded-lg ${cat.bgColor} ${cat.color} flex items-center justify-center`}
                              >
                                {item.icon}
                              </div>
                              <div>
                                <span className="block text-[13px] font-bold text-slate-800">
                                  {item.name}
                                </span>
                                <span className="block text-[10px] text-slate-400 leading-tight">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-semibold transition ${location.pathname === link.path
                    ? "text-[#087dcc]"
                    : "text-[#063c8d] hover:text-[#087dcc]"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSearchBox(true)}
                aria-label="Open search"
                className="w-11 h-11 rounded-full border border-sky-100 text-[#087dcc] flex items-center justify-center hover:bg-sky-50 transition lg:flex hidden"
              >
                <FaSearch size={14} />
              </button>

              <Link
                to="/guides"
                className="h-11 px-7 rounded-full bg-gradient-to-r from-[#087dcc] to-[#071b85] text-white text-[14px] font-semibold lg:flex items-center gap-2 hover:shadow-lg transition hidden"
              >
                Read Guides
              </Link>

              <button
                onClick={() => setShowSearchBox(true)}
                className="lg:hidden w-10 h-10 rounded-full bg-sky-50 text-[#087dcc] flex items-center justify-center mr-1"
              >
                <FaSearch size={14} />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="lg:hidden w-10 h-10 rounded-full bg-[#087dcc] text-white flex items-center justify-center"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Search Overlay - Moved outside header for fixed positioning stability */}
      <div
        className={`fixed inset-0 z-[200] bg-white transition-all duration-500 flex flex-col ${showSearchBox ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
          }`}
      >
        <div className="max-w-[1000px] mx-auto w-full px-6 pt-20 pb-10 flex flex-col h-full">
          <button
            onClick={() => {
              setShowSearchBox(false);
              setSearchTerm("");
            }}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition"
          >
            <FaTimes size={20} />
          </button>

          <div className="relative mb-12">
            <FaSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 text-3xl" />
            <input
              autoFocus={showSearchBox}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search driver guides (e.g. WiFi, Printer, Graphics)..."
              className="w-full bg-transparent border-b-2 border-slate-100 py-6 pl-12 pr-4 text-2xl lg:text-4xl font-medium outline-none focus:border-[#087dcc] transition-colors placeholder:text-slate-200"
            />
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
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
                      className="group flex items-center gap-5 p-5 rounded-2xl border border-slate-50 hover:border-sky-100 hover:bg-sky-50/50 transition cursor-pointer"
                    >
                      <div className="w-14 h-14 shrink-0 rounded-xl bg-white shadow-sm text-[#087dcc] flex items-center justify-center text-xl group-hover:scale-110 transition">
                        <FaBookOpen />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#087dcc] transition">
                          {res.title}
                        </h4>
                        <p className="text-sm text-slate-400 line-clamp-1">
                          {res.shortDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaSearch size={30} className="text-slate-200" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No guides found</h3>
                  <p className="text-slate-400">Try searching for something else like "Audio" or "Network"</p>
                </div>
              )
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h5 className="text-[11px] font-bold text-[#087dcc] uppercase tracking-widest mb-6">
                    Quick Access
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {["WiFi", "Printer", "Audio", "Graphics", "Bluetooth", "USB", "Network", "Camera"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchTerm(tag)}
                        className="px-5 py-2.5 rounded-full bg-slate-50 text-slate-600 text-sm font-medium hover:bg-[#087dcc] hover:text-white transition"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-[#087dcc] uppercase tracking-widest mb-6">
                    Popular Categories
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    {driverCategories.slice(0, 4).map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50/50 border border-slate-100"
                      >
                        <span className={`text-[10px] font-bold uppercase mb-1 block ${cat.color}`}>
                          {cat.title}
                        </span>
                        <span className="text-xs text-slate-500">{cat.subtitle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Also moved outside for consistency */}
      <div
        className={`lg:hidden fixed inset-0 z-[110] transition-all duration-500 ${isOpen ? "visible" : "invisible"
          }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[82%] bg-white shadow-2xl transition-transform duration-500 p-7 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src="/logo/logo.avif"
                alt="Charmliora"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-semibold text-slate-900 hover:text-[#087dcc]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-slate-100 overflow-y-auto">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">
              Browse Guide Topics
            </p>

            <div className="space-y-7">
              {driverCategories.map((cat, idx) => (
                <div key={idx}>
                  <h5 className="text-[12px] font-bold text-[#087dcc] uppercase mb-4">
                    {cat.title}
                  </h5>

                  <div className="grid grid-cols-1 gap-3">
                    {cat.items.map((item, i) => (
                      <Link
                        key={i}
                        to={`/driver/${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-9 h-9 rounded-lg ${cat.bgColor} ${cat.color} flex items-center justify-center text-sm`}
                        >
                          {item.icon}
                        </div>
                        <span className="font-medium text-slate-700 text-sm">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/guides"
            onClick={() => setIsOpen(false)}
            className="mt-auto w-full bg-gradient-to-r from-[#087dcc] to-[#071b85] text-white py-4 rounded-full font-semibold flex items-center justify-center gap-3"
          >
            <FaBookOpen />
            Read Guides
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;