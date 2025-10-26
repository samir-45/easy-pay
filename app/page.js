import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import Marquee from "@/components/marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Hero></Hero>
      <Features></Features>
      <Marquee></Marquee>
      <HowItWorksSection></HowItWorksSection>
    </div>
  );
}
