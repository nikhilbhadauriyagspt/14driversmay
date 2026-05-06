import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaPaperPlane, FaBookOpen } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-[Poppins]">
      <Helmet>
        <title>Contact | Charmliora Driver Learning Resource</title>
        <meta
          name="description"
          content="Contact Charmliora for driver learning topics, guide suggestions, educational feedback, or general website questions."
        />
      </Helmet>

      <section className="pt-32 pb-16 bg-[#071A3D] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-blue-500">Charmliora</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Share a driver learning topic, suggest a guide, or send a general
            question about our educational driver information resources.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FaEnvelope size={16} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Learning Resource Contact
                  </h4>
                  <p className="text-slate-600 text-sm font-medium mt-1">
                    <a href="mailto:info@charmliora.co">
                      info@charmliora.co
                    </a>
                  </p>
                </div>
              </div>


            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-blue-600" size={18} />
                Send a Learning Request
              </h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Audio driver learning guide"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Share your guide suggestion, feedback, or learning topic..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-md active:scale-[0.98]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;