"use client";

import React, { useState } from "react";
import {
  MapPin,
  FileText,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactFooter() {
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "79922c44-520f-4287-a84d-f7c58cb35f15",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Message from ${formState.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFeedback("Message transmitted successfully. I'll get back to you shortly!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedback("Could not transmit message. Please email directly.");
      }
    } catch {
      setStatus("error");
      setFeedback("Error transmitting message. Please email directly.");
    }
  };

  return (
    <footer id="contact" className="py-20 px-4 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Row 1: Open to Roles Badge + Location Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wide">
              Open to AI/ML Engineer roles
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-violet-400" />
            <span>Calicut, Kerala</span>
          </div>
        </div>

        {/* Row 2: Prominent Mailto Link */}
        <a
          href="mailto:muhammedsajadmammu@gmail.com"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] hover:text-violet-400 transition-colors mb-8 tracking-tight"
        >
          muhammedsajadmammu@gmail.com
        </a>

        {/* Row 3: Action Buttons (LinkedIn, GitHub, Resume Link) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="https://www.linkedin.com/in/mhd--sajad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-sm font-medium text-[var(--text-primary)] hover:border-violet-500 transition-all hover:scale-105 shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-violet-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="https://github.com/mhd-sajad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-sm font-medium text-[var(--text-primary)] hover:border-violet-500 transition-all hover:scale-105 shadow-sm"
          >
            <GithubIcon className="w-4 h-4 text-violet-400" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="https://drive.google.com/file/d/1SnIMJWC_QKGJtV5q5d5kJsx8ncbQjFZH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/40 bg-violet-500/10 hover:bg-violet-500/20 text-sm font-medium text-violet-300 transition-all hover:scale-105 shadow-sm"
          >
            <FileText className="w-4 h-4 text-violet-400" />
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-sm font-medium text-[var(--text-secondary)] transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 text-[var(--text-muted)]" />
            <span>{showForm ? "Hide Quick Note" : "Send Quick Note"}</span>
          </button>
        </div>

        {/* Collapsible Web3Forms Quick Note drawer */}
        {showForm && (
          <div className="w-full max-w-md p-6 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] text-left mb-10 animate-in fade-in slide-in-from-top-3 duration-200 shadow-xl">
            <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">
              Direct Quick Note
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-violet-500"
              />
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="Your email"
                className="w-full px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-violet-500"
              />
              <textarea
                required
                rows={3}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Your message..."
                className="w-full px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-violet-500 resize-none"
              />

              {status === "success" && (
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-rose-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? "Transmitting..." : "Send"}
              </button>
            </form>
          </div>
        )}

        {/* Row 4: Closing Tech Stack Credit */}
        <p className="font-mono text-xs text-[var(--text-muted)] tracking-wide">
          © {new Date().getFullYear()} Muhammed Sajad — Built with Next.js, Tailwind, three.js, React Three Fiber.
        </p>
      </div>
    </footer>
  );
}
