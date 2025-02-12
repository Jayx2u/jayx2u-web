"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

import Image from 'next/image'

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
        <Image
          src="/teppy-under-construction.png"
          alt="Under Construction"
          width={470}
          height={164}
        />
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          I will eventually work on this site, for now check out my Carrd :)
        </div>
        <a href="http://jayx2u.carrd.co">
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Carrd
        </button>
        </a>
        <hr className="w-full border-t border-gray-700 dark:border-gray-300 my-4" />
        <div className="text-8xl md:text-8xl font-adventures dark:text-white text-center">
          Jayx2u
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
