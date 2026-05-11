import React from "react";
import { Link } from "react-router-dom";


export default function Hero() {


  return (
    <section className="relative w-full  pt-16 overflow-hiddenfont-[Poppins]">
      <img 
        src="/banner/banner_01.webp" 
        width="1920" 
        height="880" 
        fetchpriority="high" 
        loading="eager" 
        className="w-full h-auto" 
        alt="Aura Learning Banner" 
      />

    </section>
  );
}
