import React, { useEffect } from "react";

import {  Footer } from "@/widgets/layout";
import "./styles.css"; 
import { WavyBackgroundDemo } from "./hero";
import Services from "./services";
import { HeroScrollDemo } from "./flipImage";
import Testimonials from "./testimonials";
import HowItWorks from "./howItWork";
export function Home() {
  useEffect(() => {
    // Add animation class to the hero section
    const hero = document.querySelector('.hero-section');
    if (hero) {
      hero.classList.add('animate-gradient');
    }
  }, []);

  return (
    <>
      <WavyBackgroundDemo /> 
      <HeroScrollDemo />
       <Services />
       <HowItWorks />
       <Testimonials />
      <div className="from-blue-50 to-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;