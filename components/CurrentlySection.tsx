"use client";

import React from "react";
import { Cpu, GraduationCap } from "lucide-react";

export default function CurrentlySection() {
  return (
    <section id="currently" className="py-20 px-4 max-w-3xl mx-auto">
      <div className="flex flex-col">
        {/* Monospace Section Header */}
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">
          CURRENTLY
        </p>

        {/* The One Paragraph with inline marks/badges embedded in the sentence */}
        <p className="text-xl sm:text-2xl md:text-2xl font-normal leading-relaxed text-[var(--text-primary)]">
          Currently deep in Module 32+ at{" "}
          <span className="inline-flex items-center gap-1.5 align-baseline px-2.5 py-0.5 rounded-md font-medium text-sm border border-violet-500/30 bg-violet-500/10 text-violet-300 mx-1 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-violet-400 inline" />
            Brototype
          </span>
          , working through time series forecasting (ARIMA, Prophet) and recurrent architectures (LSTMs & GRUs), while also building foundational statistical inference and scalable data systems at{" "}
          <span className="inline-flex items-center gap-1.5 align-baseline px-2.5 py-0.5 rounded-md font-medium text-sm border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 mx-1 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400 inline" />
            IIT Madras
          </span>
          .
        </p>
      </div>
    </section>
  );
}
