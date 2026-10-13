import Spotlight from "@/components/spotlight";

export default function ProprietaryRd() {
  return (
    <section id="products" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-slate-200 dark:border-gray-800/80 py-16 md:py-24 transition-colors">
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
                Proprietary Engines
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
              Proprietary Engines
            </h2>
            <p
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Purpose-built B2B workflow software.
            </p>
          </div>

          {/* 2-Column Product Spotlight Showcase */}
          <Spotlight className="group/spotlight grid gap-8 lg:grid-cols-2">
            {/* Card 1: DocuVerify Engine */}
            <div
              className="reveal-on-scroll delay-100 group/item relative h-full overflow-hidden rounded-2xl bg-slate-200/80 dark:bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-10 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/25 dark:before:bg-blue-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100 shadow-sm dark:shadow-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-400/50"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="relative z-20 flex h-full flex-col justify-between overflow-hidden rounded-[inherit] bg-white/95 dark:bg-gray-950/90 p-6 sm:p-8 backdrop-blur-xs transition-all hover:bg-slate-50/95 dark:hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-cyan-500/10 dark:after:bg-cyan-400/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-gray-800">
                    <span className="rounded-full px-3 py-0.5 text-[11px] font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-500/30">
                      Advisory &amp; Supervised
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Active Engine" />
                  </div>
                  <h3 className="mt-4 font-nacelle text-2xl font-bold text-slate-900 dark:text-white">
                    DocuVerify Engine™
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-cyan-400">
                    Structured Document Extraction
                  </p>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Multi-modal OCR and strict schema parsing for contracts and invoices. Low-confidence anomalies route to an operator verification dashboard for sign-off.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-gray-800 flex items-center justify-between text-xs text-slate-500 dark:text-gray-400">
                  <span className="text-slate-400 dark:text-gray-500">Operation Mode:</span>
                  <span className="text-blue-700 dark:text-cyan-300 font-medium">Advisory &amp; Supervised</span>
                </div>
              </div>
            </div>

            {/* Card 2: SynapseSearch */}
            <div
              className="reveal-on-scroll delay-200 group/item relative h-full overflow-hidden rounded-2xl bg-slate-200/80 dark:bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-10 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/25 dark:before:bg-blue-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100 shadow-sm dark:shadow-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-400/50"
              data-aos="fade-up"
              data-aos-delay={350}
            >
              <div className="relative z-20 flex h-full flex-col justify-between overflow-hidden rounded-[inherit] bg-white/95 dark:bg-gray-950/90 p-6 sm:p-8 backdrop-blur-xs transition-all hover:bg-slate-50/95 dark:hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-cyan-500/10 dark:after:bg-cyan-400/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-gray-800">
                    <span className="rounded-full px-3 py-0.5 text-[11px] font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-500/30">
                      Read-Only Advisory
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Active Engine" />
                  </div>
                  <h3 className="mt-4 font-nacelle text-2xl font-bold text-slate-900 dark:text-white">
                    SynapseSearch™
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-cyan-400">
                    Grounded Enterprise Retrieval
                  </p>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Context-isolated neural knowledge search with hyperlinked document attribution. Operates strictly as a read-only advisor with zero write privileges.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-gray-800 flex items-center justify-between text-xs text-slate-500 dark:text-gray-400">
                  <span className="text-slate-400 dark:text-gray-500">Operation Mode:</span>
                  <span className="text-blue-700 dark:text-cyan-300 font-medium">Read-Only Advisory</span>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
