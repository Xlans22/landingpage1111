import Spotlight from "@/components/spotlight";

export default function Capabilities() {
  const disciplines = [
    {
      title: "Computer Systems & Software",
      description:
        "Distributed event pipelines, zero-trust APIs, and secure ERP/CRM middleware bridges.",
    },
    {
      title: "AI Research & Strategy",
      description:
        "Custom RAG benchmarks, foundation model evaluations, and context safety filters.",
    },
    {
      title: "Technical Project Delivery",
      description:
        "End-to-end software delivery, automated schema testing, and production runtime telemetry.",
    },
  ];

  return (
    <section id="capabilities" className="relative scroll-mt-24">
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
                Core Disciplines
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
              Core Disciplines
            </h2>
            <p
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Licensed enterprise computing &amp; AI advisory services.
            </p>
          </div>

          {/* 3-Card Spotlight Grid */}
          <Spotlight className="group/spotlight grid gap-6 lg:grid-cols-3">
            {disciplines.map((item, index) => {
              const delayClass = index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300";
              return (
                <div
                  key={item.title}
                  className={`reveal-on-scroll ${delayClass} group/item relative h-full overflow-hidden rounded-2xl bg-slate-200/80 dark:bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/25 dark:before:bg-blue-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100 shadow-sm dark:shadow-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-400/50`}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="relative z-20 flex h-full flex-col justify-between overflow-hidden rounded-[inherit] bg-white/95 dark:bg-gray-950/90 p-6 sm:p-8 backdrop-blur-xs transition-all hover:bg-slate-50/95 dark:hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-40 after:-top-40 after:z-10 after:h-80 after:w-80 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-cyan-500/10 dark:after:bg-cyan-400/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                    <div>
                      <h3 className="font-nacelle text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-gray-800/60 flex items-center gap-2 text-xs font-medium text-blue-700 dark:text-cyan-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400"></span>
                      <span>Production Standard</span>
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
