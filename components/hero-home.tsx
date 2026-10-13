"use client";

export default function HeroHome() {
  const handleCtaClick = () => {
    window.dispatchEvent(new CustomEvent("open-intake-modal"));
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-12 reveal-on-scroll">
            {/* Pill Badge */}
            <div
              className="inline-flex items-center gap-3 pb-4"
              data-aos="fade-down"
            >
              <span
                className="h-px w-8 bg-linear-to-r from-transparent to-blue-500/40 dark:to-cyan-500/60"
                aria-hidden="true"
              />
              <span className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 dark:text-cyan-400 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-500/30 uppercase shadow-xs">
                ENTERPRISE SYSTEMS &amp; HITL ORCHESTRATION
              </span>
              <span
                className="h-px w-8 bg-linear-to-l from-transparent to-blue-500/40 dark:to-cyan-500/60"
                aria-hidden="true"
              />
            </div>

            {/* Technical Headline */}
            <h1
              className="text-slate-900 dark:text-transparent font-nacelle text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl mx-auto pb-5 dark:animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,var(--color-gray-100),var(--color-cyan-200),var(--color-gray-50),var(--color-blue-400),var(--color-gray-100))] dark:bg-[length:200%_auto] dark:bg-clip-text"
              data-aos="fade-up"
            >
              Deterministic AI for Critical Enterprise Operations
            </h1>

            {/* Sub-Headline */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Scalable backend pipelines and supervised AI workflows. Verifiable auditability with zero unmonitored execution.
              </p>

              {/* CTAs */}
              <div className="mx-auto flex justify-center">
                <div data-aos="fade-up" data-aos-delay={300} className="w-full sm:w-auto">
                  <a
                    className="btn group w-full sm:w-auto rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 py-3.5 px-8 text-sm font-semibold transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center cursor-pointer"
                    href="#contact"
                    onClick={handleCtaClick}
                  >
                    <span>Schedule Briefing</span>
                    <span className="ml-1.5 tracking-normal text-white/70 transition-transform duration-200 group-hover:translate-x-1.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
