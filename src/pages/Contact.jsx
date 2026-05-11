import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Send,
  BookOpen,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>Contact | Aura Learning Driver Learning Resource</title>
        <meta
          name="description"
          content="Contact Aura Learning for driver learning topics, educational feedback, or guide suggestions."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 bg-[#f7f9ff] overflow-hidden">
        <div className="absolute top-[-140px] right-[-120px] w-[420px] h-[420px] rounded-full bg-blue-100 blur-[80px]" />
        <div className="absolute bottom-[-180px] left-[-120px] w-[420px] h-[420px] rounded-full bg-indigo-100 blur-[90px]" />

        <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                <BookOpen size={18} />
              </span>

              <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                Contact Aura Learning
              </span>
            </div>

            <h1 className="text-[34px] md:text-[48px] font-semibold leading-tight text-[#202124] mb-7">
              Share a learning topic or guide suggestion.
            </h1>

            <p className="text-[16px] leading-[1.9] text-slate-600 max-w-[760px]">
              Send feedback, suggest a driver learning topic, or ask a general
              question related to our educational computer information content.
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                  <Mail size={18} />
                </span>

                <div>
                  <p className="text-[13px] text-slate-400">Email Address</p>
                  <a
                    href="mailto:info@auralearning.co"
                    className="text-[15px] font-semibold text-slate-800 hover:text-[#2563eb] transition"
                  >
                    info@auralearning.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            <div className="absolute w-[430px] h-[430px] rounded-full bg-[#eaf4ff]" />
            <div className="absolute top-12 right-10 w-20 h-20 rounded-full border border-dashed border-[#2563eb]/40" />

            <img
              src="/about/aboutmain.avif"
              alt="Learning topics"
              className="relative z-10 w-full max-w-[480px] object-contain"
            />

            <div className="absolute left-8 bottom-16 z-20 bg-white/90 backdrop-blur rounded-full px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center">
                <MessageCircle size={20} />
              </span>

              <div>
                <p className="text-[14px] font-semibold text-slate-900">
                  Learning Feedback
                </p>
                <p className="text-[12px] text-slate-500">
                  Information suggestions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                <Send size={18} />
              </span>

              <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                Send Message
              </span>
            </div>

            <h2 className="text-[32px] md:text-[42px] font-semibold leading-tight text-[#202124]">
              Share your feedback or topic idea.
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              Suggest a guide topic or share general learning feedback related
              to drivers and computer hardware information.
            </p>
          </div>

          {/* Form Area */}
          <div className="bg-[#f8fbff] border border-[#e2e8ff] rounded-[36px] p-6 md:p-12">
            <form className="space-y-7">
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
                  placeholder="e.g. WiFi or Printer guide"
                  className="inputBox"
                />
              </Field>

              <Field label="Your Message">
                <textarea
                  rows="6"
                  placeholder="Share your feedback, suggestion, or learning topic..."
                  className="inputBox resize-none"
                />
              </Field>

              <button className="inline-flex items-center justify-center gap-3 h-[56px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition-all duration-300 active:scale-[0.99]">
                Submit Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .inputBox {
          width: 100%;
          background: #ffffff;
          border: 1px solid #dbe4ff;
          padding: 18px 20px;
          font-size: 15px;
          outline: none;
          color: #1e293b;
          border-radius: 18px;
          transition: all 0.3s ease;
        }

        .inputBox:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.06);
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
    <label className="text-[13px] font-semibold text-slate-700">
      {label}
    </label>
    {children}
  </div>
);

export default Contact;