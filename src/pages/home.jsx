import React from "react";

import { Footer } from "@/widgets/layout";
import "./styles.css";
import { WavyBackgroundDemo } from "./hero";
import Services from "./services";
import { HeroScrollDemo } from "./flipImage";
import Testimonials from "./testimonials";
import HowItWorks from "./howItWork";
import GalleryOfSuccess from "./gallery";
import AboutUsSection from "./aboutUs";
import MissionVission from "./missionVission";
import Clients from "./clients";
import Roadmap from "./roadMap";
export function Home() {

  return (
    <>
      <WavyBackgroundDemo />
      <div className="  min-h-screen ">
        <Services />
        <HowItWorks />
        <MissionVission />
        <Testimonials />
        <Clients />
        <Roadmap />
        <GalleryOfSuccess />
        <AboutUsSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;