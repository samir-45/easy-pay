import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import Marquee from "@/components/marquee";
import PricingDM from "@/components/PricingDM";
import SecuritySection from "@/components/SecuritySection";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div className="relative">
      <Hero></Hero>
      <Features></Features>
      <Marquee></Marquee>
      <HowItWorksSection></HowItWorksSection>
      <SecuritySection></SecuritySection>
      <PricingDM></PricingDM>
      <TestimonialSlider></TestimonialSlider>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
}
