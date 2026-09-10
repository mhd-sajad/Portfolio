"use client";

import React from "react";
import { GraduationCap, Code2, Milestone, Compass } from "lucide-react";

interface MilestoneItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  skills: string[];
}

const MILESTONES: MilestoneItem[] = [
  {
    period: "2026 — Present",
    title: "Deep Sequential Models & Multi-Agent RAG",
    institution: "Brototype (Module 32+ of 51)",
    description:
      "Advancing through sequence modeling, time series forecasting (ARIMA, Prophet), and RNN/LSTM architectures. Architecting production RAG pipelines integrating BM25 with ChromaDB and cross-encoders.",
    skills: ["Time Series", "LSTMs", "ChromaDB", "RAG", "FastAPI", "Docker"],
  },
  {
    period: "May 2026 — Present",
    title: "BS in Data Science & Applications",
    institution: "Indian Institute of Technology, Madras (IIT Madras)",
    description:
      "Formal academic grounding in statistical inference, discrete mathematics, linear algebra matrices, and large-scale data system engineering.",
    skills: ["Linear Algebra", "Calculus", "Probability & Stats", "Data Systems"],
  },
  {
    period: "2025",
    title: "Software & Machine Learning Foundations",
    institution: "Brototype AI/ML Engineering Fellowship",
    description:
      "Rigorous mentor-evaluated modules spanning Python OOP, data structures, SQL database optimization, exploratory data analysis, and supervised/unsupervised machine learning algorithms.",
    skills: ["Python OOP", "DSA", "Advanced SQL", "Scikit-Learn", "XGBoost", "EDA"],
  },
  {
    period: "2023 — 2025",
    title: "Computer Science Higher Secondary",
    institution: "Rajagiri Higher Secondary School, Kalamassery",
    description:
      "Completed Plus Two with Computer Science specialization. Discovered passion for programming, algorithmic thinking, and competitive public speaking.",
    skills: ["Computer Science", "C++", "Problem Solving"],
  },
];

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 px-4 max-w-3xl mx-auto">
      {/* Header: Heading + authentic one-line sitting above timeline */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Journey so far
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] italic font-light leading-relaxed">
          Started in Computer Science at Rajagiri, everything since has been about getting closer to shipping real ML systems.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-[var(--border-subtle)] ml-3 sm:ml-4 space-y-10">
        {MILESTONES.map((item, index) => (
          <div key={index} className="relative pl-7 sm:pl-8 group">
            {/* Minimal Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-[var(--bg-primary)] group-hover:scale-125 transition-transform duration-200" />

            {/* Period */}
            <span className="font-mono text-xs text-violet-400 font-semibold tracking-wider uppercase block mb-1">
              {item.period}
            </span>

            {/* Title & Institution */}
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-0.5">
              {item.title}
            </h3>
            <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wide mb-2.5">
              {item.institution}
            </p>

            {/* Description */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              {item.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Authentic Identity Closing Line before Footer */}
      <div className="mt-20 pt-10 border-t border-[var(--border-subtle)] text-center">
        <p className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--text-primary)]">
          An engineer by discipline, a builder by curiosity.
        </p>
      </div>
    </section>
  );
}
