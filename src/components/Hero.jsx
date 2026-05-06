import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-full pt-0">
      <Link to="/guides" className="relative block cursor-pointer group">
        <picture>
          <source srcSet="/banner/banner_01.avif" type="image/avif" />
          <source srcSet="/banner/banner_01.webp" type="image/webp" />
          <img
            src='/banner/banner_01.png'
            className="w-full h-full object-cover object-center min-h-[300px] md:min-h-[450px]"
            alt="Hero Banner"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </picture>
        {/* SEO-focused H1 Overlay */}
        <div className="absolute opacity-0 inset-0 flex flex-col items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-500 px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight max-w-4xl leading-tight">
            Understand Driver Topics with <span className="text-blue-400">Step-by-Step</span> Information Guides
          </h1>
          <p className="mt-4 text-slate-200 text-sm md:text-lg font-medium max-w-2xl drop-shadow-md">
            Identify WiFi, Audio, Printer, and USB topics easily with our verified technical documentation.
          </p>
          <div className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/50">
            Browse All Guides
          </div>
        </div>
      </Link>
    </section>
  );
}
