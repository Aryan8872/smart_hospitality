"use client";

import React, { useState } from "react";
import { Navbar } from "./components/ui/Navbar";
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

export default function SmartHospitalityLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#FBFAF7] text-[#12281A] antialiased overflow-x-hidden">
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

      <Footer />
    </div>
  );
}
