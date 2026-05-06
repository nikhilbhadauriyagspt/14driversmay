import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaChevronDown, FaSearch, FaQuestionCircle, FaLightbulb,
  FaShieldAlt, FaTools, FaMicrochip, FaDownload
} from "react-icons/fa";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      category: "General Questions",
      icon: <FaQuestionCircle />,
      items: [
        {
          q: "What is Charmliora?",
          a: "Charmliora is a professional technical resource portal dedicated to helping users find, install, and troubleshoot hardware drivers for Windows systems. We provide step-by-step guides and verified software links to ensure system stability."
        },
        {
          q: "How often should I update my drivers?",
          a: "It is recommended to check for driver updates every 1-3 months, or immediately if you experience hardware performance issues, system crashes, or after a major Windows update."
        },
        {
          q: "Are the drivers safe to download?",
          a: "Yes. Every driver indexed in our database undergoes a strict security verification process. we only provide links to stable, malware-free official releases or verified mirror sites."
        }
      ]
    },
    {
      category: "Installation & Fixes",
      icon: <FaTools />,
      items: [
        {
          q: "How do I fix 'Device Not Recognized' error?",
          a: "This usually happens due to a corrupted or missing driver. Try unplugging the device, uninstalling the existing driver from Device Manager, and then reinstalling the latest version from our database."
        },
        {
          q: "Can I install Windows 10 drivers on Windows 11?",
          a: "In most cases, yes, as Windows 11 shares the same core architecture. However, we always recommend downloading the specific Windows 11 version if available for better optimization."
        },
        {
          q: "What is a 'Clean Install' of a driver?",
          a: "A clean install involves completely removing the old driver files using tools like DDU (for graphics) before installing the new ones to prevent file conflicts."
        }
      ]
    },
    {
      category: "Hardware Specific",
      icon: <FaMicrochip />,
      items: [
        {
          q: "Why is my printer showing as 'Offline'?",
          a: "This is often a communication error between the spooler service and the driver. Restarting the 'Print Spooler' in services.msc and updating the printer driver usually fixes this."
        },
        {
          q: "Fixing WiFi 'No Internet, Secured' message?",
          a: "This can be caused by an outdated network adapter driver. Resetting the network stack (netsh winsock reset) and updating the driver typically restores connectivity."
        },
        {
          q: "How to fix audio crackling or no sound?",
          a: "Ensure the correct playback device is selected. If the issue persists, reinstall the Realtek High Definition Audio driver or the specific driver for your sound card."
        }
      ]
    },
    {
      category: "Resource & Information",
      icon: <FaShieldAlt />,
      items: [
        {
          q: "Is there a cost for using Charmliora?",
          a: "Access to our technical documentation, hardware registry, and guide library is completely free. We are a community-focused resource dedicated to hardware transparency."
        },
        {
          q: "How accurate is the technical data?",
          a: "Our documentation is cross-referenced with official manufacturer specifications and verified by hardware engineers to ensure technical accuracy."
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-20 font-[Poppins]">
      <Helmet>
        <title>FAQ | Frequently Asked Questions | Charmliora</title>
        <meta name="description" content="Find answers to common questions about driver installations, hardware fixes, and system optimization." />
      </Helmet>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F1B3D] mb-4">Help Center & <span className="text-blue-600">FAQ</span></h1>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">Search our knowledge base for instant answers to your technical questions.</p>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for an issue (e.g. 'printer', 'wifi')..."
              className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-blue-500 shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar Nav */}
          <aside className="hidden lg:block space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Categories</h3>
            {faqCategories.map((cat, i) => (
              <a
                key={i}
                href={`#cat-${i}`}
                className="flex items-center gap-3 p-3 rounded-lg text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all font-medium"
              >
                <span className="text-blue-500">{cat.icon}</span>
                {cat.category}
              </a>
            ))}
          </aside>

          {/* FAQ List */}
          <div className="space-y-12">
            {filteredFaqs.length > 0 ? filteredFaqs.map((cat, catIdx) => (
              <div key={catIdx} id={`cat-${catIdx}`} className="scroll-mt-32">
                <h2 className="flex items-center gap-3 text-xl font-bold text-[#0F1B3D] mb-6">
                  <span className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm">{cat.icon}</span>
                  {cat.category}
                </h2>

                <div className="space-y-3">
                  {cat.items.map((item, itemIdx) => {
                    const uniqueId = `${catIdx}-${itemIdx}`;
                    return (
                      <div
                        key={itemIdx}
                        className={`border rounded-xl transition-all duration-200 ${activeFaq === uniqueId ? 'border-blue-500 bg-white shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                      >
                        <button
                          onClick={() => setActiveFaq(activeFaq === uniqueId ? null : uniqueId)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className={`font-bold ${activeFaq === uniqueId ? 'text-blue-600' : 'text-slate-700'}`}>{item.q}</span>
                          <FaChevronDown className={`transition-transform duration-300 ${activeFaq === uniqueId ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                        </button>
                        {activeFaq === uniqueId && (
                          <div className="px-5 pb-5 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-4">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <FaQuestionCircle size={40} className="mx-auto text-slate-200 mb-4" />
                <p className="text-slate-400 font-medium">No results found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default FAQPage;
