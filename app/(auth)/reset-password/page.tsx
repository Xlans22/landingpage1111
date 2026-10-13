export const metadata = {
  title: "Reset Password - Flamingo Emerging Technologies",
  description: "Enterprise portal credential recovery",
};

import Link from "next/link";

export default function ResetPassword() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),#93c5fd,var(--color-gray-50),#67e8f9,var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Reset your password
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input w-full"
                placeholder="Your email"
              />
            </div>
            <div className="mt-6">
              <button className="btn w-full rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Reset Password
              </button>
            </div>
            <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
              Remember your password?{" "}
              <Link className="font-medium text-blue-600 dark:text-cyan-400 hover:underline" href="/signin">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
