import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaCogs,
  FaChevronDown,
  FaBookOpen,
  FaLightbulb,
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
  FaRegCompass,
  FaInfoCircle,
  FaBolt
} from 'react-icons/fa';
import { servicesData } from '../data/services';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const driverCategories = [
    {
      title: 'Main System',
      subtitle: 'Core computer parts',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      items: [
        {
          name: 'Chipset',
          desc: 'Helps all parts talk to each other',
          icon: <FaMicrochip />,
          slug: 'chipset-drivers'
        },
        {
          name: 'Graphics',
          desc: 'Fix screen, video, or game issues',
          icon: <FaDesktop />,
          slug: 'graphics-drivers'
        },
        {
          name: 'Audio',
          desc: 'Fix sound, mic, or speaker problems',
          icon: <FaVolumeUp />,
          slug: 'audio-drivers'
        },
        {
          name: 'Network',
          desc: 'Fix WiFi or internet connection',
          icon: <FaWifi />,
          slug: 'network-drivers'
        }
      ]
    },
    {
      title: 'Connecting',
      subtitle: 'Plugs and wireless',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      items: [
        {
          name: 'Bluetooth',
          desc: 'Connect wireless mouse or headphones',
          icon: <FaBluetooth />,
          slug: 'bluetooth-drivers'
        },
        {
          name: 'USB Ports',
          desc: 'Fix issues with USB plug points',
          icon: <FaUsb />,
          slug: 'usb-support'
        },
        {
          name: 'Touchpad & Keys',
          desc: 'Fix typing or mouse pad issues',
          icon: <FaKeyboard />,
          slug: 'input-drivers'
        },
        {
          name: 'Storage',
          desc: 'Make hard drives work properly',
          icon: <FaDatabase />,
          slug: 'storage-controller'
        }
      ]
    },
    {
      title: 'External',
      subtitle: 'Devices you plug in',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      items: [
        {
          name: 'Printer',
          desc: 'Fix printing or paper errors',
          icon: <FaPrint />,
          slug: 'printer-drivers'
        },
        {
          name: 'Scanner',
          desc: 'How to copy paper photos to PC',
          icon: <FaSearchPlus />,
          slug: 'scanner-support'
        },
        {
          name: 'Webcam',
          desc: 'Fix camera or video call issues',
          icon: <FaVideo />,
          slug: 'webcam-drivers'
        }
      ]
    },
    {
      title: 'System Help',
      subtitle: 'Software and settings',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      items: [
        {
          name: 'BIOS / UEFI',
          desc: 'Helps the computer start up',
          icon: <FaCode />,
          slug: 'bios-uefi-firmware'
        },
        {
          name: 'Security',
          desc: 'Keep your computer safe and clean',
          icon: <FaShieldAlt />,
          slug: 'security-drivers'
        },
        {
          name: 'Monitor',
          desc: 'Change brightness and colors',
          icon: <FaTv />,
          slug: 'monitor-calibration'
        }
      ]
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled
        ? 'h-16 bg-slate-900/95 backdrop-blur-md shadow-lg'
        : 'h-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900'
        }`}
    >
      <div className="w-full h-full px-4 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/logo/logo.avif"
            alt="DriverZenith"
            className="h-10 w-auto object-contain bg-white py-1 px-2 rounded-full"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 text-[14px] font-medium transition-all ${location.pathname === link.path
                ? 'text-white'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Guides Mega Dropdown */}
          <div
            className="static group"
            onMouseEnter={() => setActiveDropdown('guides')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-all ${activeDropdown === 'guides'
                ? 'text-white'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              Driver Guides
              <FaChevronDown
                size={8}
                className={`transition-transform duration-300 ${activeDropdown === 'guides' ? 'rotate-180' : ''
                  }`}
              />
            </button>

            <div
              className={`absolute left-0 right-0 top-full pt-4 transition-all duration-300 ${activeDropdown === 'guides'
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible translate-y-2'
                }`}
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[32px] overflow-hidden p-8 grid grid-cols-2 gap-6">
                  {driverCategories.map((cat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className={`text-[11px] font-bold uppercase tracking-[0.2em] ${cat.color}`}>{cat.title}</h4>
                        <span className="text-[10px] text-slate-400 font-medium">{cat.subtitle}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            to={`/driver/${item.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                          >
                            <div className={`w-10 h-10 shrink-0 rounded-lg ${cat.bgColor} ${cat.color} flex items-center justify-center text-lg shadow-sm transition-transform group-hover/item:scale-110`}>
                              {item.icon}
                            </div>
                            <div className="pt-0.5">
                              <span className="block text-slate-800 text-[13px] font-bold group-hover/item:text-blue-600 transition-colors">
                                {item.name}
                              </span>
                              <span className="block text-[10px] text-slate-400 leading-tight mt-1 group-hover/item:text-slate-500">
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
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 text-[14px] font-medium transition-all ${location.pathname === link.path
                ? 'text-white'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative" ref={searchRef}>
            <button
              onClick={() => setShowSearchBox(!showSearchBox)}
              aria-label="Toggle search box"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${showSearchBox
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
            >
              <FaSearch size={14} />
            </button>

            {showSearchBox && (
              <div className="absolute top-full right-0 mt-4 w-[350px] bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b border-slate-50">
                  <input
                    autoFocus
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for computer parts..."
                    aria-label="Search guides"
                    className="w-full bg-slate-50 border-none rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="max-h-[300px] overflow-y-auto">
                  {searchTerm && searchResults.length > 0 ? (
                    searchResults.map((res) => (
                      <div
                        key={res.id}
                        onClick={() => {
                          navigate(`/driver/${res.slug}`);
                          setShowSearchBox(false);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">
                          <FaBookOpen />
                        </div>

                        <div>
                          <p className="text-[13px] font-bold text-slate-800">
                            {res.title}
                          </p>
                          <p className="text-[10px] text-slate-400 line-clamp-1">
                            {res.shortDesc}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : searchTerm ? (
                    <div className="p-8 text-center text-xs text-slate-400">
                      No guide found
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/guides"
            className="bg-blue-600 text-white px-6 h-10 rounded-full text-[14px] font-medium flex items-center gap-2 hover:bg-blue-500 transition-all active:scale-95"
          >
            <FaBookOpen className="text-blue-200" />
            Read Guides
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[110] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'
          }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl transition-transform duration-500 p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center mb-10">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
              <img
                src="/logo/logo.avif"
                alt="DriverZenith"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>

          <div className="space-y-8 overflow-y-auto pr-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 px-1">
                Browse Guide Topics
              </p>

              <div className="space-y-8">
                {driverCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <h5 className="text-[12px] font-bold text-blue-600 uppercase bg-blue-50 w-fit px-2 py-0.5 rounded">
                      {cat.title}
                    </h5>

                    <div className="grid grid-cols-1 gap-4">
                      {cat.items.map((item, i) => (
                        <Link
                          key={i}
                          to={`/driver/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 group"
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
          </div>

          <div className="mt-auto">
            <Link
              to="/guides"
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              <FaBookOpen className="text-blue-200" />
              Read Guides
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}} />
    </header>
  );
};

export default Header;
