import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.png"
          alt="Fusion Research"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl font-bold text-hampton-blue tracking-tight mb-6 font-mono">
          STAR_LITE
        </h1>
        <p className="text-3xl text-gray-300 mb-8 max-w-3xl">
          Stellarator for Training And Research
        </p>
        <button className="border-2 border-white px-12 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300">
          DISCOVER
        </button>
      </div>
    </section>
  );
}