"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2, X, Terminal, Bot, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  architectureDetails: string[];
  image?: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  wide?: boolean;
  isAsideTile?: boolean;
}

const WORK_ITEMS: WorkItem[] = [
  {
    id: "recruit-lens",
    title: "Recruit-Lens: Resume-Job Matcher RAG",
    category: "AI Agentic Architecture",
    description:
      "Enterprise candidate ranking platform with hybrid BM25 + dense ChromaDB retrieval, Reciprocal Rank Fusion, and cross-encoder neural reranking. Uses Optuna-tuned XGBoost with SHAP interpretability.",
    architectureDetails: [
      "Hybrid Retrieval: Combines lexical BM25 and dense ChromaDB vector embeddings unified through Reciprocal Rank Fusion (RRF).",
      "Neural Reranker: Employs cross-encoder scoring to filter semantic nuances and rank relevant context chunks.",
      "Explainable AI: Powered by an Optuna-optimized XGBoost engine with local and global SHAP attribution plots.",
      "Multi-Agent Evaluation: 6 specialized agents powered by Ollama and Hugging Face models ensure candidate feedback is strictly evidence-grounded.",
      "Cloud Deployment: Streamlit UI hosted on Hugging Face Spaces with FastAPI background services.",
    ],
    image: "/images/recruit-lens.jpg",
    stack: ["Python", "FastAPI", "Streamlit", "ChromaDB", "XGBoost", "SHAP", "Ollama"],
    githubUrl: "https://github.com/mhd-sajad/Recruit-Lens",
    liveUrl: "https://huggingface.co/spaces",
    wide: true,
  },
  {
    id: "cardiac-risk",
    title: "Explainable Cardiac Risk AI & Diagnostic API",
    category: "Clinical Machine Learning",
    description:
      "Clinical diagnostic microservice predicting cardiovascular risk factors. Combines predictive classification with SHAP and LIME to illuminate exact physiological feature contributions for clinicians.",
    architectureDetails: [
      "Diagnostic Classifier: High-recall ensemble classification calibrated on cardiovascular clinical data.",
      "Interpretable ML: Integrated SHAP waterfall and summary charts explaining individual patient risk factors.",
      "Full-Stack Microservice: FastAPI backend containerized with Docker, paired with a React 19 frontend on Render.",
    ],
    image: "/images/cardiac-risk.png",
    stack: ["FastAPI", "React 19", "Docker", "Scikit-Learn", "SHAP", "Render"],
    githubUrl: "https://github.com/mhd-sajad/Explainable-Health-Diagnostic-API",
    liveUrl: "https://explainable-cardiac-risk-app.onrender.com/",
    wide: true,
  },
  {
    id: "churn-api",
    title: "Customer Churn Prediction API",
    category: "MLOps & Microservices",
    description:
      "Dockerized machine learning service with serialized preprocessing pipelines and interactive Swagger documentation.",
    architectureDetails: [
      "Automated inference pipeline with Pydantic validation.",
      "Packaged in a lightweight production Docker image deployed on Render.",
    ],
    image: "/images/churn-api.png",
    stack: ["Docker", "FastAPI", "Scikit-Learn", "Swagger"],
    githubUrl: "https://github.com/mhd-sajad/Churn-api-Docker",
    liveUrl: "https://churn-prediction-api-edu0.onrender.com/",
    wide: false,
  },
  {
    id: "hr-analytics",
    title: "Predictive HR Intelligence Pipeline",
    category: "Supervised ML",
    description:
      "Two-pronged system for salary estimation via regression and employee attrition risk identification via classification.",
    architectureDetails: [
      "Extensive EDA with Matplotlib/Seaborn assessing compensation distributions and retention drivers.",
      "Supervised regression and classification with tuned decision thresholds.",
    ],
    image: "/images/hr-analytics.jpg",
    stack: ["Python", "Scikit-Learn", "Pandas", "EDA"],
    githubUrl: "https://github.com/mhd-sajad/Employee-Salary-Attirition-Prediction",
    wide: false,
  },
  {
    id: "agentic-aside",
    title: "How I engineer with AI & Agents",
    category: "Engineering Philosophy",
    description:
      "Strict grounding, zero hallucination tolerance, and transparent mathematical scoring. Read my approach to designing agentic retrieval and RAG systems.",
    architectureDetails: [
      "Evidence-First Grounding: Agents only answer when factual document context is retrieved.",
      "Hybrid Retrieval: Lexical keyword search (BM25) covers exact terminology; dense vector search catches semantic meaning.",
      "Explainability: Models should never be black boxes — interpretability via SHAP makes AI trustworthy.",
    ],
    stack: ["RAG", "Multi-Agent", "SHAP", "Optuna"],
    githubUrl: "https://github.com/mhd-sajad",
    isAsideTile: true,
    wide: false,
  },
];

export default function WorkGrid() {
  const [activeModal, setActiveModal] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Selected Work
        </h2>
      </div>

      {/* Non-uniform Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORK_ITEMS.map((item) => {
          // Aside Tile (no image, icon-driven link-out tile)
          if (item.isAsideTile) {
            return (
              <div
                key={item.id}
                onClick={() => setActiveModal(item)}
                className="cursor-pointer rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-violet-500/50 p-7 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-violet-500/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                      <Bot className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="font-mono text-xs uppercase tracking-wider text-violet-400 font-semibold mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-6 mt-4 border-t border-[var(--border-subtle)]">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // Standard / Feature Cards with Image Banner, Title, Stack Row, Expand Icon
          return (
            <div
              key={item.id}
              className={`rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-300 overflow-hidden flex flex-col group backdrop-blur-xl ${
                item.wide ? "md:col-span-2" : ""
              }`}
            >
              {/* Top Banner Image with Expand Icon */}
              <div
                className={`relative w-full overflow-hidden bg-zinc-950/60 border-b border-[var(--border-subtle)] ${
                  item.wide ? "h-64 sm:h-80 md:h-[420px]" : "h-56 sm:h-64"
                }`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={item.wide ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 768px) 100vw, 550px"}
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                )}

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Expand Icon Button (Top Right) */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModal(item)}
                    aria-label={`Expand architecture details for ${item.title}`}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} on GitHub`}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live preview for ${item.title}`}
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white border border-violet-400/30 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Meta: Title + Tech Stack Row */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-violet-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Tech Stack Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModal(item)}
                    className="text-xs font-mono text-violet-400 hover:text-violet-300 font-medium"
                  >
                    SPECS →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:scale-105"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-1">
              SYSTEM ARCHITECTURE // {activeModal.category}
            </p>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              {activeModal.title}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {activeModal.description}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                Technical Highlights
              </h4>
              <ul className="space-y-2">
                {activeModal.architectureDetails.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[var(--border-subtle)]">
              <a
                href={activeModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              {activeModal.liveUrl && (
                <a
                  href={activeModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Live Deployment</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
