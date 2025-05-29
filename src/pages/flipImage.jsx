"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import React from "react";
import HeroVideoContainer from "./heroVideoContainer";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden md:-mt-72 bg-black h-fit">
      <ContainerScroll
        // titleComponent={
        //   <>
        //     <h1 className="text-4xl font-semibold text-white">
        //       Unleash the power of <br />
        //       <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        //       Data
        //       </span>
        //     </h1>
        //   </>
        // }
      >
       <HeroVideoContainer />
      </ContainerScroll>
    </div>
  );
}
