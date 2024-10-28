"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="z-40 px-4 pt-4 md:px-6 md:pt-6 bg-black shadow-black shadow-2xl rounded-lg">
      <div className="flex justify-between shadow-lg shadow-black">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-fit h-fit rounded-full"
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              },
            }}
          >
            <Image
              width={25}
              height={25}
              alt="halloween pumpkins"
              src="/icons8-halloween-48.png"
            />
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
