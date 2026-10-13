export const metadata = {
  title: "Flamingo Emerging Technologies | AI Systems Architecture & B2B Engineering",
  description:
    "Enterprise B2B SaaS engineering firm and AI product studio specializing in deterministic systems, human-in-the-loop (HITL) orchestration, and advisory intelligence pipelines.",
};

import PageIllustration from "@/components/page-illustration";
import HeroHome from "@/components/hero-home";
import Capabilities from "@/components/capabilities";
import ProprietaryRd from "@/components/proprietary-rd";
import Governance from "@/components/governance";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration multiple />
      <HeroHome />
      <Capabilities />
      <ProprietaryRd />
      <Governance />
      <Cta />
    </>
  );
}
