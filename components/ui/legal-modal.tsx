"use client";

import { useEffect } from "react";

export type LegalDocType = "terms" | "privacy";

type LegalSection = {
  title: string;
  body: string;
};

type LegalDocument = {
  title: string;
  badge: string;
  subtitle: string;
  sections: LegalSection[];
};

export const LEGAL_DOCUMENTS: Record<LegalDocType, LegalDocument> = {
  terms: {
    title: "Terms of Service",
    badge: "Enterprise Engagement & Governance Framework",
    subtitle:
      "Statutory operating parameters, deterministic execution gates, and commercial conditions governing enterprise engagements with Flamingo Emerging Technologies.",
    sections: [
      {
        title: "1. Regulatory Status & Commercial Identification",
        body: "Flamingo Emerging Technologies - L.L.C - S.P.C is a single-shareholder limited liability company incorporated in the Emirate of Abu Dhabi, UAE (Unified Registration No. 101-2024-200009262, Unified Licence No. 501-2024-200006444).",
      },
      {
        title: "2. Deterministic Execution & HITL Authorization",
        body: "All systems, retrieval engines, and advisory intelligence pipelines operate under strict Human-in-the-Loop (HITL) authorization gates. No automated workflow executes state-changing mutations without designated organizational review.",
      },
      {
        title: "3. Intellectual Property Rights",
        body: "Client proprietary data, custom model weights, and internal schemas remain the exclusive intellectual property of the client. Reusable platform infrastructure and proprietary engines (DocuVerify Engine™, SynapseSearch™) remain the property of Flamingo Emerging Technologies.",
      },
      {
        title: "4. Limitation of Advisory Liability",
        body: "Advisory outputs represent deterministic analytical assessments and do not constitute statutory legal or financial counsel. The company assumes no liability for unmonitored deployments executed outside agreed HITL specifications.",
      },
      {
        title: "5. Governing Law & Jurisdiction",
        body: "All engagements are governed by the commercial laws and regulations of the Emirate of Abu Dhabi, United Arab Emirates.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    badge: "Data Isolation & Zero-Retention Security Architecture",
    subtitle:
      "Enterprise security architecture, isolation guarantees, and confidential intake standards implemented by Flamingo Emerging Technologies.",
    sections: [
      {
        title: "1. Zero-Retention Client Data Protocol",
        body: "Client operational datasets processed during technical evaluations are handled in isolated, ephemeral memory environments with zero persistence following job completion.",
      },
      {
        title: "2. No Third-Party Data Monetization",
        body: "Flamingo Emerging Technologies does not sell, broker, or license client information, nor are client inputs utilized to train public foundation models.",
      },
      {
        title: "3. Inquiries & Mutual Non-Disclosure",
        body: "Intake communications submitted via info@flamingo-technology.com are treated as confidential commercial inquiries protected under mutual non-disclosure standards.",
      },
    ],
  },
};

type LegalModalProps = {
  isOpen: boolean;
  type: LegalDocType | null;
  onClose: () => void;
};

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const doc = LEGAL_DOCUMENTS[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 dark:bg-gray-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800 bg-white/95 text-slate-800 dark:bg-gray-950/95 dark:text-gray-300 p-6 sm:p-8 shadow-2xl shadow-blue-950/20 backdrop-blur-xl z-10 transition-all">
        {/* Ambient background glow */}
        <div
          className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/10 dark:bg-cyan-500/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Top-Right Close Button ("✕") */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white transition-colors p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800/60 focus:outline-hidden cursor-pointer"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-blue-700 dark:text-cyan-400 uppercase">
              {doc.badge}
            </span>
          </div>
          <h3
            id="legal-modal-title"
            className="font-nacelle text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-1.5"
          >
            {doc.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {doc.subtitle}
          </p>
        </div>

        {/* Structured Sections Content Box */}
        <div className="rounded-xl border border-slate-200 dark:border-gray-800/80 bg-slate-50/80 dark:bg-gray-900/60 p-5 sm:p-6 mb-6 max-h-[56vh] overflow-y-auto space-y-5">
          {doc.sections.map((section, idx) => (
            <div
              key={idx}
              className="space-y-1.5 border-b border-slate-200 dark:border-gray-800/60 pb-4 last:border-b-0 last:pb-0"
            >
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white font-nacelle flex items-center gap-2">
                <span className="text-blue-700 dark:text-cyan-400">{section.title}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-sans">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer with Verified Registration Details */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-slate-200 dark:border-gray-900">
          <div className="space-y-0.5 text-[11px] font-mono">
            <div className="font-medium text-slate-800 dark:text-gray-300">
              FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C
            </div>
            <div className="text-slate-500 dark:text-gray-500">
              Unified Reg: 101-2024-200009262 • Unified Lic: 501-2024-200006444 • Abu Dhabi, UAE
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white py-2 px-5 text-xs font-semibold border border-slate-300 dark:border-gray-700/80 transition-transform active:scale-95 duration-200 cursor-pointer inline-flex items-center justify-center shrink-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
