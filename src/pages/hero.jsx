"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export function WavyBackgroundDemo() {
  const [showIntro, setShowIntro] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Data is Power";
  const currentIndex = useRef(0); // useRef instead of let
  const timeoutId = useRef(null);

  useEffect(() => {
    function typeNextChar() {
      if (currentIndex.current < fullText.length) {
        const nextChar = fullText[currentIndex.current];
        setTypedText((prev) => prev + nextChar);
        currentIndex.current++;
        timeoutId.current = setTimeout(typeNextChar, 100);
      }
    }

    typeNextChar();

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId.current);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <>
    <WavyBackground className="max-w-6xl mx-auto pb-40 px-4 flex items-center justify-center relative">
      <div className="w-full flex items-center justify-center text-center">
        {/* GB-Tech Presents with Typing Animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showIntro ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute"
        >
          <p className="text-3xl md:text-8xl text-white font-bold tracking-widest">
            {typedText}
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: showIntro ? 40 : 0, opacity: showIntro ? 0 : 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight"
          >
            {/* Data is Power <br className="hidden md:block" /> */}
            Empowering Self-Funded Employee Benefits
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: showIntro ? 30 : 0, opacity: showIntro ? 0 : 1 }}
            transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
            className="text-base md:text-lg mt-6 text-white font-medium max-w-3xl mx-auto"
          >
            Design, enroll, and manage group life, health, and employee benefits seamlessly through our integrated platform.
          </motion.p>
        </motion.div>
      </div>
    </WavyBackground>
    </>
  );
}
