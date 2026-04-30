import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-full pt-16">
      <Link to="/guides" className="block cursor-pointer">
        <img
          src='/banner/banner_01.avif'
          className="w-full h-full object-cover object-center"
          alt="Hero Banner"
        />
      </Link>
    </section>
  );
}
