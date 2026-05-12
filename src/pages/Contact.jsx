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
        <title>Contact | Clear With Us Driver Learning Resource</title>
        <meta
          name="description"
          content="Contact Clear With Us for driver learning topics, educational feedback, or guide suggestions."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-white px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              Contact Clear With Us
            </p>

            <h1 className="text-[38px] 2xl:text-[62px] leading-tight font-semibold text-[#071B34] mb-7">
              Share a driver learning topic or{" "}
              <span className="text-[#315BFF]">guide idea.</span>
            </h1>

            <p className="text-[17px] leading-8 text-slate-500 max-w-[720px] mb-9">
              Send educational feedback, suggest a driver topic, or share an
              idea that can help us improve simple computer-driver learning
              content.
            </p>

            <div className="border-t border-slate-200 pt-8">
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-[#EEF4FF] text-[#315BFF] flex items-center justify-center">
                  <Mail size={22} />
                </span>

                <div>
                  <p className="text-[13px] text-slate-500">Email Address</p>
                  <a
                    href="mailto:info@clearwithus.co"
                    className="text-[18px] font-semibold text-[#071B34] hover:text-[#315BFF] transition"
                  >
                    info@clearwithus.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 w-[90%] h-[90%] rounded-[28px] border-[4px] border-[#315BFF]" />
            <img
              src="/about/aboutmain.avif"
              alt="Contact Clear With Us for driver information"
              className="relative z-10 w-full h-[560px] object-cover rounded-[28px]"
            />

            <div className="absolute left-8 bottom-8 z-20 bg-white rounded-full px-5 py-4 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-[#315BFF] text-white flex items-center justify-center">
                <MessageCircle size={20} />
              </span>

              <div>
                <p className="text-[14px] font-semibold text-[#071B34]">
                  Learning Feedback
                </p>
                <p className="text-[12px] text-slate-500">
                  Topic suggestions only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 px-6 bg-[#F4F7FB]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
              Send Message
            </p>

            <h2 className="text-[36px] 2xl:text-[54px] leading-tight font-semibold text-[#071B34] mb-6">
              Help us improve our{" "}
              <span className="text-[#315BFF]">learning library.</span>
            </h2>

            <p className="text-[16px] leading-8 text-slate-500 mb-8">
              Use this form for guide suggestions, educational feedback, or
              general questions about our information content.
            </p>

            <div className="border-l-4 border-[#315BFF] pl-5 flex gap-3">
              <ShieldCheck className="text-[#315BFF] shrink-0 mt-1" size={22} />
              <p className="text-[15px] leading-7 text-slate-600 font-medium">
                Clear With Us is information-only. We do not provide computer
                repair, remote access, installation, or technical support.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form className="bg-white rounded-[28px] p-6 md:p-10 space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Full Name">
                <input type="text" placeholder="Your name" className="inputBox" />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  placeholder="Email address"
                  className="inputBox"
                />
              </Field>
            </div>

            <Field label="Learning Topic">
              <input
                type="text"
                placeholder="Example: WiFi, Printer, Audio, Graphics"
                className="inputBox"
              />
            </Field>

            <Field label="Your Message">
              <textarea
                rows="6"
                placeholder="Share your feedback, topic idea, or learning suggestion..."
                className="inputBox resize-none"
              />
            </Field>

            <button className="inline-flex items-center justify-center gap-3 h-[56px] px-8 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition">
              Submit Message
              <ArrowRight size={18} />
            </button>
          </form>
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
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .inputBox:focus {
          border-color: #315BFF;
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
    <label className="text-[13px] font-semibold text-[#071B34]">
      {label}
    </label>
    {children}
  </div>
);

export default Contact;