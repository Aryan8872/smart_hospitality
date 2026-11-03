"use client";

import React, { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { WhoWeServe } from "./components/sections/WhoWeServe";
import { WhyChooseSHM } from "./components/sections/WhyChooseSHM";
import { Standards } from "./components/sections/Standards";
import { ScoringFramework } from "./components/sections/ScoringFramework";
import { Academy } from "./components/sections/Academy";
import { HowSHMWorks } from "./components/sections/HowSHMWorks";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Preloader } from "./components/ui/Preloader";
import { CustomCursor } from "./components/ui/CustomCursor";
import { useAnimations } from "./hooks/useAnimations";

export default function SmartHospitalityLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Entrance + scroll animations start when the preloader curtain lifts.
  const [revealed, setRevealed] = useState(false);
  useAnimations(revealed);

  return (
    <>
      {/* .wrapper is the opaque page that slides up over the fixed footer
          (see the FOOTER REVEAL block in globals.css). */}
      <div className="wrapper w-full bg-ink text-ivory antialiased [overflow-x:clip]">
        <Preloader onReveal={() => setRevealed(true)} />
        <CustomCursor />
        <ScrollProgress />
        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main>
          <Hero />
          <About />
          <Services />
          <WhoWeServe />
          <WhyChooseSHM />
          <Standards />
          <ScoringFramework />
          <Academy />
          <HowSHMWorks />
          <Contact />
        </main>
      </div>

      {/* Sits behind .wrapper — revealed by the last 100svh of scroll. */}
      <Footer />
    </>
  );
}
