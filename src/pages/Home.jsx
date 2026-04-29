import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import FAQ from '../components/Faqs';
import CommonProblems from '../components/commanissue';
import WhenNeedDrivers from '../components/needdrivers';
import Driverfixisuue from '../components/driverfixissue';
import Guides from '../components/guides';
import Stats from '../components/stact';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Fix Driver Issues | WiFi, Audio, USB & Printer Solutions</title>
        <meta name="description" content="Technical repository for hardware specifications, driver-level architectural data, and system optimization documentation for the global technical community." />
        <link rel="canonical" href="https://www.driverzenith.net/" />
      </Helmet>

      <Hero />
      <CommonProblems />
      <WhenNeedDrivers />
      <Driverfixisuue />
      <Guides />
      <Stats />
      <FAQ />
    </>
  );
};

export default Home;