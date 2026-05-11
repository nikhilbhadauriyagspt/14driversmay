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
      category: "General Documentation",
      icon: <FaQuestionCircle />,
      items: [
        {
          q: "What is Aura Learning?",
          a: "Aura Learning is an information-only educational resource. We provide documentation and guides to help users understand how hardware drivers work. We do NOT provide technical support, remote assistance, or repair services of any kind."
        },
        {
          q: "How often should I check for driver information?",
          a: "It is recommended to understand driver topics every 1-3 months, or immediately if you experience hardware performance changes, or after a major Windows update."
        },
        {
          q: "Is the documentation safe to read?",
          a: "Yes. Every information guide indexed in our database undergoes a strict verification process. we only provide data related to stable, verified official releases."
        }
      ]
    },
    {
      category: "Driver Topics",
      icon: <FaTools />,
      items: [
        {
          q: "How can I understand 'Device Not Recognized' messages?",
          a: "This usually happens due to missing driver data. Try identifying the device in Device Manager and then reading the latest documentation from our database."
        },
        {
          q: "Can I learn about Windows 10 drivers on Windows 11?",
          a: "In most cases, yes, as Windows 11 shares the same core architecture. However, we always recommend reading the specific Windows 11 documentation if available."
        },
        {
          q: "What is a 'Clean Installation' protocol?",
          a: "A clean installation involves completely removing the old data using tools like DDU (for graphics) before installing the new software to prevent system conflicts."
        }
      ]
    },
    {
      category: "Hardware Specific",
      icon: <FaMicrochip />,
      items: [
        {
          q: "Why is a printer showing as 'Offline'?",
          a: "This is often a communication topic between the spooler service and the driver data. Understanding the 'Print Spooler' in services.msc and the printer documentation usually identifies the cause."
        },
        {
          q: "Understanding WiFi 'No Internet' messages?",
          a: "This can be caused by an outdated network adapter entry. Understanding the network stack (netsh winsock reset) and the documentation typically restores connectivity knowledge."
        },
        {
          q: "How to understand audio or sound topics?",
          a: "Ensure the correct playback device is selected in system data. If the topic persists, read the Realtek High Definition Audio documentation or the specific data for your sound card."
        }
      ]
    },
    {
      category: "Resource & Information",
      icon: <FaShieldAlt />,
      items: [
        {
          q: "Is there a cost for using Aura Learning?",
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
        <title>FAQ | Frequently Asked Questions | Aura Learning</title>
        <meta name="description" content="Find answers to common questions about driver installations, hardware fixes, and system optimization." />
      </Helmet>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-[500]text-[#0F1B3D] mb-4">Help Center & <span className="text-blue-600">FAQ</span></h1>
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
            <h3 className="text-xs font-[500]text-slate-400 uppercase tracking-widest mb-4">Categories</h3>
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
                <h2 className="flex items-center gap-3 text-xl font-[500]text-[#0F1B3D] mb-6">
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
                          <span className={`font-[500]${activeFaq === uniqueId ? 'text-blue-600' : 'text-slate-700'}`}>{item.q}</span>
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
