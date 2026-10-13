import Spotlight from "@/components/spotlight";

export default function Governance() {
  const laws = [
    {
      title: "Advisory Sandboxing",
      description:
        "Model layers generate candidate diffs with zero direct execution privileges over operational databases.",
      badge: "Advisory Isolation",
      icon: (
        <svg className="h-6 w-6 text-blue-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Mandatory Sign-Off",
      description:
        "Every state change requires explicit confirmation by an authenticated operator with domain authority.",
      badge: "Operator Authorization",
      icon: (
        <svg className="h-6 w-6 text-blue-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: "Schema Guardrails",
      description:
        "All inputs and outputs are validated against strict typed schemas to eliminate error propagation.",
      badge: "Schema Validation",
      icon: (
        <svg className="h-6 w-6 text-blue-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="governance" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-slate-200 dark:border-gray-800/80 py-16 md:py-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16 reveal-on-scroll">
            <div
              className="inline-flex items-center gap-3 pb-3"
              data-aos="fade-down"
            >
              <span
                className="h-px w-8 bg-linear-to-r from-transparent to-blue-500/40 dark:to-cyan-500/60"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-blue-700 dark:text-cyan-400">
                Safety Laws
              </span>
              <span
                className="h-px w-8 bg-linear-to-l from-transparent to-blue-500/40 dark:to-cyan-500/60"
                aria-hidden="true"
              />
            </div>
            <h2
              className="font-nacelle text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl pb-4"
              data-aos="fade-up"
            >
              Safety Laws
            </h2>
            <p
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Deterministic boundaries for production AI.
            </p>
          </div>

          {/* 3 Immutable Design Laws Spotlight Grid */}
          <Spotlight className="group/spotlight grid gap-6 md:grid-cols-3">
            {laws.map((law, index) => {
              const delayClass = index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300";
              return (
                <div
                  key={law.title}
                  className={`reveal-on-scroll ${delayClass} group/item relative h-full overflow-hidden rounded-2xl bg-slate-200/80 dark:bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/25 dark:before:bg-blue-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100 shadow-sm dark:shadow-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-400/50`}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="relative z-20 flex h-full flex-col justify-between overflow-hidden rounded-[inherit] bg-white/95 dark:bg-gray-950/90 p-6 sm:p-8 backdrop-blur-xs transition-all hover:bg-slate-50/95 dark:hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-40 after:-top-40 after:z-10 after:h-80 after:w-80 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-cyan-500/10 dark:after:bg-cyan-400/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                    <div>
                      <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-gray-800">
                        <span className="text-[11px] font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-500/30 px-2.5 py-0.5 rounded-full">
                          {law.badge}
                        </span>
                        <div className="p-2 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/40">
                          {law.icon}
                        </div>
                      </div>
                      <h3 className="mt-6 font-nacelle text-xl font-semibold text-slate-900 dark:text-gray-100">
                        {law.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {law.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-gray-800/60 flex items-center gap-2 text-xs font-medium text-blue-700 dark:text-cyan-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400"></span>
                      <span>Deterministic Enforcement Gate</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
