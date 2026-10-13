"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollReveal();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer />
    </>
  );
}
