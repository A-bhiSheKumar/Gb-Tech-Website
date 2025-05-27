import React, { useEffect } from "react";

import {  Footer } from "@/widgets/layout";
import "./styles.css"; 
import { WavyBackgroundDemo } from "./hero";
import Services from "./services";
import { HeroScrollDemo } from "./flipImage";
import Testimonials from "./testimonials";
import HowItWorks from "./howItWork";
import GalleryOfSuccess from "./gallery";
import AboutUsSection from "./aboutUs";
import MissionVission from "./missionVission";
export function Home() {

  return (
    <>
       <WavyBackgroundDemo />
          <HeroScrollDemo />
       <div className="  min-h-screen ">
      <Services />
      <HowItWorks />
      <Testimonials />
      <MissionVission />
      <GalleryOfSuccess />
      <AboutUsSection />
      <Footer />
    </div>
    </>
  );
}

export default Home;