import "./css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Flamingo Emerging Technologies | AI Systems Architecture & B2B Engineering",
  description:
    "FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C (Unified Registration No. 101-2024-200009262, Unified Licence No. 501-2024-200006444, Abu Dhabi, UAE). Enterprise B2B SaaS engineering firm specializing in deterministic systems, human-in-the-loop (HITL) orchestration, and advisory intelligence pipelines.",
  other: {
    "entity-name": "FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C",
    "unified-registration-no": "101-2024-200009262",
    "unified-licence-no": "501-2024-200006444",
    "jurisdiction": "Emirate of Abu Dhabi, United Arab Emirates",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${nacelle.variable} bg-slate-50 text-slate-800 dark:bg-gray-950 dark:text-gray-200 font-inter text-base antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
