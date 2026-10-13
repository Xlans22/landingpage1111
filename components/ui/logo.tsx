import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="Flamingo Emerging Technologies">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 ring-1 ring-white/20 transition-transform group-hover:scale-105">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-nacelle text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
          Flamingo
        </span>
        <span className="font-sans text-[10px] font-medium tracking-wide text-blue-600 dark:text-cyan-400 leading-tight">
          Emerging Technologies
        </span>
      </div>
    </Link>
  );
}
