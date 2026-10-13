export const metadata = {
  title: "Sign Up - Flamingo Emerging Technologies",
  description: "Enterprise portal registration",
};

import Link from "next/link";

export default function SignUp() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),#93c5fd,var(--color-gray-50),#67e8f9,var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="name"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="company"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your company name"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="email"
                >
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your work email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="password"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Register
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-500 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>
              <button className="btn relative w-full rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-gray-700 transition-all">
                Sign In with Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link className="font-medium text-blue-600 dark:text-cyan-400 hover:underline" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
