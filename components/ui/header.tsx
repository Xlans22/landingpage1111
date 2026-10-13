"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Logo from "./logo";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors border border-slate-300 dark:border-gray-700 cursor-pointer"
    >
      {/* Sun Icon (Visible in dark mode to switch to light) */}
      <svg
        className={`w-4 h-4 text-amber-400 transition-transform duration-300 ${
          isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0 absolute"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      {/* Moon Icon (Visible in light mode to switch to dark) */}
      <svg
        className={`w-4 h-4 text-slate-700 dark:text-slate-300 transition-transform duration-300 ${
          !isDark ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Core Disciplines", href: "#capabilities" },
    { name: "Proprietary Engines", href: "#products" },
    { name: "Safety Laws", href: "#governance" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full pt-2 md:pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-white/85 dark:bg-gray-900/90 px-4 ring-1 ring-slate-900/5 dark:ring-white/10 backdrop-blur-md shadow-lg dark:shadow-2xl shadow-black/5 dark:shadow-black/50 transition-colors">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop action button & Theme toggle */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="btn-sm rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-blue-500/20 py-2 px-5 text-xs font-semibold transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center cursor-pointer"
            >
              Contact Engineering
            </a>
          </div>

          {/* Mobile hamburger & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <a
              href="#contact"
              className="btn-sm rounded-full bg-linear-to-r from-blue-600 to-cyan-500 py-1.5 px-3.5 text-xs font-semibold text-white sm:hidden shadow-xs shadow-blue-500/20"
            >
              Contact
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white focus:outline-hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-white/95 dark:bg-gray-900/95 p-4 ring-1 ring-slate-900/5 dark:ring-white/10 backdrop-blur-md shadow-2xl transition-colors">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-cyan-400 dark:hover:bg-gray-800/60 transition-colors py-2 px-3 rounded-xl"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-200 dark:border-gray-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center btn-sm bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 py-2.5 text-xs font-semibold text-white rounded-full shadow-md shadow-blue-500/25 transition-transform duration-200 active:scale-[0.98]"
                >
                  Contact Engineering
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
