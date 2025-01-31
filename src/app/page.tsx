"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function AuroraBackgroundP() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-9xl md:text-9xl font-adventures dark:text-white text-center">
          Jayx2u
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          I'll eventually work on this site, for now check out my Caard. :)
        </div>
        <a href="http://jayx2u.carrd.co">
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Caard
        </button>
        </a>
      </motion.div>
    </AuroraBackground>
  );
}
