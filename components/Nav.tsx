"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", href: "#hero" },
  { label: "Currently", href: "#currently" },
  { label: "Selected Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracker
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-xl border-[var(--border-strong)] shadow-xl shadow-black/10 py-2"
            : "bg-[var(--nav-bg)] backdrop-blur-md border-[var(--border-subtle)] shadow-sm"
        } max-w-4xl w-full`}
      >
        {/* Logo / Monospace Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-sm font-semibold tracking-tight"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono uppercase text-xs tracking-wider text-[var(--text-primary)] group-hover:text-violet-500 transition-colors">
            SAJAD <span className="text-[var(--text-muted)]">/</span> ML
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[var(--bg-card)] px-2 py-1 rounded-full border border-[var(--border-subtle)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-violet-600 text-white shadow-sm shadow-violet-500/25"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Resume link */}
          <a
            href="https://drive.google.com/file/d/1SnIMJWC_QKGJtV5q5d5kJsx8ncbQjFZH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-violet-500/30 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-2xl flex flex-col gap-2 z-50">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] hover:bg-violet-600/10 hover:text-violet-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1SnIMJWC_QKGJtV5q5d5kJsx8ncbQjFZH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-violet-600 text-white"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
