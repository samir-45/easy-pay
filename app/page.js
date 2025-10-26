import Hero from "@/components/Hero";
import Navbar, { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* <NavBar></NavBar> */}
      <Hero></Hero>
    </div>
  );
}
