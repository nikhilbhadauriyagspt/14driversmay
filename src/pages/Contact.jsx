import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Send,
  BookOpen,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>Contact | Fanny Learn Hub Driver Learning Resource</title>
        <meta
          name="description"
          content="Contact Fanny Learn Hub for driver learning topics, educational feedback, or guide suggestions."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#315BFF]"></span>
              <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Contact Fanny Learn Hub</span>
            </div>

            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-[#071B34] leading-[1.2] mb-8">
              Share a driver learning topic or <span className="text-[#315BFF]">guide idea.</span>
            </h1>

            <p className="text-[17px] text-slate-500 leading-relaxed max-w-[720px] mb-10">
              Send educational feedback, suggest a driver topic, or share an
              idea that can help us improve simple computer-driver learning
              content.
            </p>

            <div className="border-t border-slate-100 pt-8">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-lg bg-blue-50 text-[#315BFF] flex items-center justify-center border border-blue-50">
                  <Mail size={20} strokeWidth={1.5} />
                </span>

                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                  <a
                    href="mailto:info@fannylearnhub.co"
                    className="text-lg font-semibold text-[#071B34] hover:text-[#315BFF] transition-colors"
                  >
                    info@fannylearnhub.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-50 rounded-xl transform translate-x-3 translate-y-3 -z-10"></div>
            <img
              src="/about/contact.png"
              alt="Contact Fanny Learn Hub for driver information"
              className="relative z-10 w-full h-[450px] object-cover rounded-xl border border-slate-100"
            />

            <div className="absolute left-6 bottom-6 z-20 bg-white rounded-lg px-5 py-4 flex items-center gap-4 border border-slate-100 shadow-sm">
              <span className="w-10 h-10 rounded-lg bg-[#315BFF] text-white flex items-center justify-center">
                <MessageCircle size={18} strokeWidth={1.5} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#071B34]">
                  Learning Feedback
                </p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                  Topic suggestions only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6 border-y border-slate-100 bg-slate-50/20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#315BFF]"></span>
              <span className="text-[#315BFF] text-xs font-semibold uppercase tracking-widest">Send Message</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-semibold text-[#071B34] leading-tight mb-6">
              Help us improve our <span className="text-[#315BFF]">learning library.</span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-8">
              Use this form for guide suggestions, educational feedback, or
              general questions about our information content.
            </p>

            <div className="bg-white p-5 rounded-lg border border-slate-100 border-l-2 border-l-[#315BFF] flex gap-4">
              <ShieldCheck className="text-[#315BFF] shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
              <p className="text-[14px] leading-relaxed text-slate-600 font-medium italic">
                Fanny Learn Hub is information-only. We do not provide computer
                repair, remote access, installation, or technical support.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form className="bg-white rounded-xl border border-slate-100 p-8 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Full Name">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white border border-slate-200 rounded-lg px-5 py-3.5 text-sm outline-none focus:border-[#315BFF] transition-colors placeholder:text-slate-400 text-[#071B34]"
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white border border-slate-200 rounded-lg px-5 py-3.5 text-sm outline-none focus:border-[#315BFF] transition-colors placeholder:text-slate-400 text-[#071B34]"
                />
              </Field>
            </div>

            <Field label="Learning Topic">
              <input
                type="text"
                placeholder="Example: WiFi, Printer, Audio, Graphics"
                className="w-full bg-white border border-slate-200 rounded-lg px-5 py-3.5 text-sm outline-none focus:border-[#315BFF] transition-colors placeholder:text-slate-400 text-[#071B34]"
              />
            </Field>

            <Field label="Your Message">
              <textarea
                rows="5"
                placeholder="Share your feedback, topic idea, or learning suggestion..."
                className="w-full bg-white border border-slate-200 rounded-lg px-5 py-3.5 text-sm outline-none focus:border-[#315BFF] transition-colors placeholder:text-slate-400 text-[#071B34] resize-none"
              />
            </Field>

            <button className="inline-flex items-center justify-center gap-2 bg-[#315BFF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Submit Message
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, children }) => (
  <div className="space-y-2">
    <label className="text-[12px] font-semibold text-[#071B34] uppercase tracking-wider">
      {label}
    </label>
    {children}
  </div>
);

export default Contact;