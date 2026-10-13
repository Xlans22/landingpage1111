"use client";

import { useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import LegalModal, { LegalDocType } from "./legal-modal";

export default function Footer() {
  const [modalType, setModalType] = useState<LegalDocType | null>(null);

  const openLegalModal = (e: React.MouseEvent, type: LegalDocType) => {
    e.preventDefault();
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/90 transition-colors">
      {/* Footer illustration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-20 dark:opacity-30 transition-opacity"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        {/* Brand header */}
        <div className="pb-8 mb-10 border-b border-slate-200 dark:border-gray-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Logo />
          <p className="text-xs text-slate-500 dark:text-gray-400 font-sans max-w-md sm:text-right">
            Deterministic AI Orchestration &amp; B2B Software Engineering.
          </p>
        </div>

        {/* 4-Column Corporate Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12">
          {/* Column 1: Solutions / Capabilities */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
              Solutions / Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400 font-sans">
              <li>
                <a href="#capabilities" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  Computer Systems &amp; Software
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  AI Research &amp; Strategy
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  Technical Project Delivery
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  HITL Orchestration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Proprietary Engines */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
              Proprietary Engines
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400 font-sans">
              <li>
                <a href="#products" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  DocuVerify Engine™
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  SynapseSearch™
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  Advisory Sandboxing
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
                  Safety Laws
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
              Company
            </h4>
            <div className="text-xs font-sans">
              <div className="text-sm font-medium text-slate-900 dark:text-white leading-snug">
                FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C
              </div>
              <div className="text-xs text-slate-600 dark:text-gray-400 mt-1">
                Mussafah M-11, Abu Dhabi, United Arab Emirates
              </div>
              <a
                href="mailto:info@flamingo-technology.com"
                className="text-xs text-blue-700 hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-300 mt-2 block transition-colors font-medium"
              >
                info@flamingo-technology.com
              </a>
              <div className="pt-3 mt-3 flex items-center gap-3 border-t border-slate-200 dark:border-gray-800/80 text-[11px]">
                <a
                  href="#"
                  onClick={(e) => openLegalModal(e, "privacy")}
                  className="text-slate-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
                <span className="text-slate-300 dark:text-gray-700">•</span>
                <a
                  href="#"
                  onClick={(e) => openLegalModal(e, "terms")}
                  className="text-slate-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Security */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
              Compliance &amp; Security
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-300 font-sans">
              <li>Deterministic Validation</li>
              <li>Advisory-Only Execution Gates</li>
              <li>Immutable Audit Logging</li>
              <li>Human-in-the-Loop Protocol</li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer with Relocated Registration & License Numbers */}
        <div className="pt-6 border-t border-slate-200 dark:border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-gray-500">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>© 2026 FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 dark:text-gray-600">
              Abu Dhabi, UAE · <span className="whitespace-nowrap">Unified Reg. No. 101-2024-200009262</span> · <span className="whitespace-nowrap">Unified Licence No. 501-2024-200006444</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-600 dark:text-gray-400">
            <a href="#capabilities" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
              Core Disciplines
            </a>
            <span className="text-slate-300 dark:text-gray-700">•</span>
            <a href="#products" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
              Proprietary Engines
            </a>
            <span className="text-slate-300 dark:text-gray-700">•</span>
            <a href="#governance" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
              Safety Laws
            </a>
            <span className="text-slate-300 dark:text-gray-700">•</span>
            <a href="#contact" className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors">
              Intake
            </a>
            <span className="text-slate-300 dark:text-gray-700">•</span>
            <a
              href="#"
              onClick={(e) => openLegalModal(e, "privacy")}
              className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-slate-300 dark:text-gray-700">•</span>
            <a
              href="#"
              onClick={(e) => openLegalModal(e, "terms")}
              className="hover:text-blue-700 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Institutional Legal Modal */}
      <LegalModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={closeModal}
      />
    </footer>
  );
}
