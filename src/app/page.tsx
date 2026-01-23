"use client";

import { FAQ } from "@/components/ui/faq-view";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/hero-section-view";
import { MiddleView } from "@/components/ui/middle-view";
import { Navbara } from "@/components/ui/navbara-view";
import { Section } from "@/components/ui/section-view";

import { useEffect, useState } from "react";

export default function Home() {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className={`w-full fixed z-50 p-2 bg-white backdrop-blur-2xl  ${
          showShadow ? " shadow" : " "
        } `}
      >
        <Navbara />
      </div>
      <Section>
        <HeroSection />
        <MiddleView />
        <FAQ />
        <Footer />
      </Section>
    </div>
  );
}
