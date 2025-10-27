import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import Marquee from "@/components/marquee";
import PricingDM from "@/components/PricingDM";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div className="relative">
      <Hero></Hero>
      <Features></Features>
      <Marquee></Marquee>
      <HowItWorksSection></HowItWorksSection>
      <PricingDM></PricingDM>
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
}
