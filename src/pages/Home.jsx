import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FAQ from '../components/Faqs';
import CommonProblems from '../components/commanissue';
import WhenNeedDrivers from '../components/needdrivers';
import DriverFixIssue from '../components/driverfixissue.jsx';
import Guides from '../components/guides';
import Stats from '../components/stact';
import DriverCategoryMarquee from '../components/drivercategorymarquee';
import InfoMarquee from '../components/InfoMarquee';
import BrandsMarquee from '../components/BrandsMarquee';
import DriverChallengeSection from '../components/DriverChallengeSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fanny Learn Hub | Easy Guides for Computer Drivers</title>
        <meta name="description" content="Learn how computer drivers work with our easy-to-read guides. We explain graphics, audio, WiFi, and printer basics for everyone." />
        <link rel="canonical" href="https://fannylearnhub.co" />
      </Helmet>

      <Hero />
      <InfoMarquee />

      {/* Educational Introduction Section */}
      <section className="py-20 bg-white px-6 font-[Poppins] hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-[#071B34] mb-8">
            Why Learning About Drivers is Important
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <p className="text-[17px] leading-8 text-slate-600">
              Computer drivers are like translators that help your hardware talk to your software. Without them, your printer wouldn't know how to print, and your speakers wouldn't know how to make sound. Many people find technical talk confusing, so we created this site to explain these topics in plain English. Our goal is to make hardware easy for everyone to understand.
            </p>
            <p className="text-[17px] leading-8 text-slate-600">
              When a device stops working, it's often just a communication problem. By learning the basics of how these connections work, you can better understand your own computer. We cover everything from the chipset inside your PC to the webcam on your screen. You don't need to be an expert to follow our guides; they are designed for everyday users who want to know more.
            </p>
          </div>
        </div>
      </section>

      <DriverChallengeSection />

      <CommonProblems />
      <WhyChooseUs />
      <DriverFixIssue />

      {/* Expanded Learning Section */}
      <section className="py-20 bg-[#F4F7FB] px-6 font-[Poppins] hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] md:text-[42px] font-semibold text-[#071B34] mb-6">
                Understanding Your Hardware Simplified
              </h2>
              <p className="text-[17px] leading-8 text-slate-600 mb-6">
                Most technical manuals use hard words that are difficult to follow. We believe that technology should be accessible to everyone. Our articles break down complex ideas into simple steps. Whether you are wondering why your Wi-Fi is slow or how a graphics card shows pictures on your screen, we have a simple explanation for you.
              </p>
              <p className="text-[17px] leading-8 text-slate-600">
                We focus on the most common topics that users face every day. By reading our guides, you will learn about the different types of software that make your devices run smoothly. This knowledge helps you feel more confident when using your laptop or desktop computer.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[20px] shadow-sm">
              <h3 className="text-[24px] font-semibold text-[#315BFF] mb-4">Quick Fact</h3>
              <p className="text-[16px] leading-7 text-slate-500 italic">
                "Did you know that 'Driver' is just a name for a small piece of software? It 'drives' the hardware, telling it exactly what to do when you click a button or type a key. It's the essential bridge between your physical machine and the digital world you interact with every day."
              </p>
            </div>
          </div>
        </div>
      </section>



      <FAQ />


    </>
  );
};

export default Home;