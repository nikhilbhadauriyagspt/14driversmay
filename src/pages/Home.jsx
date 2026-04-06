import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import Capabilities from '../components/Capabilities';
import TechnicalInsights from '../components/TechnicalInsights';
import About from '../components/About';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Process from '../components/Process';

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
        <title>DriverVista - Professional System Driver Support & Solutions</title>
        <meta name="description" content="Expert solutions for computer driver issues. We diagnose and fix chipset, graphics, audio, and network driver problems to optimize your system performance." />
        <link rel="canonical" href="https://www.drivervista.tech/" />
      </Helmet>

      <Hero />
      <Services />

      <Capabilities />
      <About />
      <Process />
      <TechnicalInsights />
      <FAQ />
    </>
  );
};

export default Home;