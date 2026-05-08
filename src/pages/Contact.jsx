import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaPaperPlane, FaBookOpen } from "react-icons/fa";
import { Mail, Send, BookOpen, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>Contact | Pix Circuit Driver Learning Resource</title>
        <meta
          name="description"
          content="Contact Pix Circuit for driver learning topics, guide suggestions, educational feedback, or general website questions."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#F8FAFC]">
        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#005DE0]/5 -skew-x-12 transform origin-top-right"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
              <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-[30px] md:text-[40px] font-semibold leading-[1.2] text-slate-900 mb-8">
              Contact Pix Circuit
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[1.8] text-slate-500 max-w-[680px]">
              Share a driver learning topic, suggest a guide, or send a general
              question about our simple computer information resources.
            </p>
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5">
            <div className="bg-white p-10 rounded-sm border border-slate-100 shadow-xl shadow-blue-900/5 group">
              <div className="w-14 h-14 rounded-full bg-[#005DE0]/10 text-[#005DE0] flex items-center justify-center mb-8 group-hover:bg-[#005DE0] group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>

              <h4 className="font-semibold text-slate-900 text-[22px] mb-3">
                Email Address
              </h4>

              <p className="text-slate-500 text-[16px]">
                <a
                  href="mailto:info@pixcircuit.co"
                  className="hover:text-[#005DE0] transition-colors"
                >
                  info@pixcircuit.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left Info Panel */}
            <div className="lg:col-span-4 bg-[#050A33] p-10 rounded-sm relative overflow-hidden text-white flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></div>

              <Send size={32} className="text-[#005DE0] mb-8" />

              <h2 className="text-[26px] font-semibold leading-tight mb-6">
                Send A Learning Request
              </h2>

              <p className="text-white/60 text-[15px] leading-[1.8]">
                Use this simple form to share your guide suggestion, feedback, or any computer part topic you want to learn about.
              </p>
            </div>

            {/* Right Form Area */}
            <div className="lg:col-span-8 border border-slate-100 bg-slate-50 p-8 md:p-12 rounded-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Full Name">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="inputBox"
                    />
                  </Field>

                  <Field label="Email Address">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="inputBox"
                    />
                  </Field>
                </div>

                <Field label="Learning Topic">
                  <input
                    type="text"
                    placeholder="e.g. WiFi or Printer learning guide"
                    className="inputBox"
                  />
                </Field>

                <Field label="Your Message">
                  <textarea
                    rows="5"
                    placeholder="Share your suggestion, feedback, or what you want to learn..."
                    className="inputBox resize-none"
                  />
                </Field>

                <button className="w-full h-[56px] rounded-sm bg-[#050A33] text-white font-semibold text-[15px] hover:bg-[#005DE0] transition-all duration-300 active:scale-[0.99] shadow-lg shadow-blue-900/10">
                  Submit Your Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .inputBox {
          width: 100%;
          background: #ffffff;
          border: 1px solid #f1f5f9;
          padding: 16px;
          font-size: 15px;
          outline: none;
          color: #1e293b;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .inputBox:focus {
          border-color: #005DE0;
          box-shadow: 0 0 0 4px rgba(0, 93, 224, 0.05);
        }

        .inputBox::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};

const Field = ({ label, children }) => (
  <div className="space-y-3">
    <label className="text-[12px] font-semibold text-slate-600 uppercase tracking-[0.2em]">
      {label}
    </label>
    {children}
  </div>
);

export default Contact;