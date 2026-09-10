"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";

// Lazy-load the R3F canvas to avoid any SSR hydration mismatch
const NeuralField = dynamic(() => import("./three/NeuralField"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-violet-600/10 blur-3xl animate-pulse" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between items-center pt-32 pb-10 px-4 overflow-hidden"
    >
      {/* 3D Interactive Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-70 md:opacity-85">
        <NeuralField />
      </div>

      {/* Ambient Gradient Mask */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--bg-primary)_80%)] pointer-events-none" />

      {/* Main Content: Hi -> I'm Sajad -> Bold Headline -> Portrait Photo */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center my-auto">
        {/* Small "Hi" Pre-title */}
        <p className="font-mono text-sm sm:text-base text-violet-400 font-medium tracking-wide mb-2 animate-in fade-in duration-300">
          Hi,
        </p>

        {/* I'm Sajad */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--text-secondary)] mb-4 tracking-tight">
          I&apos;m <span className="text-[var(--text-primary)] font-bold">Sajad</span>
        </h2>

        {/* Bold Headline stating the role/identity */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-8 leading-[1.12] max-w-2xl">
          AI/ML engineer who{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
            ships what he studies.
          </span>
        </h1>

        {/* Real Portrait Photo */}
        <div className="relative group my-2">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 opacity-60 group-hover:opacity-100 blur-md transition-all duration-500" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[var(--border-strong)] bg-zinc-900 shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Muhammed Sajad portrait"
              fill
              sizes="128px"
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Spare "Scroll" indicator at bottom */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
          SCROLL
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-violet-400 animate-bounce" />
      </div>
    </section>
  );
}
