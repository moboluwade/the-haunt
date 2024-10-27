"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TelegramButton from "../Button/TelegramButton";
import Footer from "../footer/Footer";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
const LandingBody = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  const [showFollowText, setShowFollowText] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowFollowText(true);

      const hideTimer = setTimeout(() => {
        setShowFollowText(false);
      }, 2000); // Hide after 2 seconds

      return () => clearTimeout(hideTimer);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <main className="relative z-20 flex flex-col px-4 md:px-16 justify-between min-h-screen">
      <header className="p-4 md:p-6 w-full flex flex-row justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl text-center md:text-left w-fit bahiana-font"
        >
          #Ailloween on $Sol
        </motion.div>
        <div className="absolute flex-row items-center right-0 pl-42 hidden md:flex">
          <AnimatePresence>
            {showFollowText && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="mr-2 px-4"
              >
                Follow Ailloween on
              </motion.span>
            )}
          </AnimatePresence>
          <Image
            width={40}
            height={40}
            src="/icons8-twitterx.svg"
            alt="Twitter X Logo"
          />
        </div>
        <div className="absolute flex-row items-center right-0 pl-42 md:hidden flex">
          <Image
            width={40}
            height={40}
            src="/icons8-twitterx.svg"
            alt="Twitter X Logo"
          />
        </div>
      </header>

      <motion.section
        className="flex flex-col md:w-fit z-20 justify-center items-center md:items-start text-center md:text-left px-4 md:px-12 py-12 "
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="w-[150px] h-fit aspect-auto rounded-xl border-[#0D8CE4] border"
        >
          <Image
            className="w-full object-cover rounded-xl"
            width={150}
            height={300}
            src="/haunt-profile.png"
            alt=""
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold pb-4 pt-2 bahiana-font"
          animate={{
            textShadow: [
              "0 0 5px #ff6b00",
              "0 0 20px #ff6b00",
              "0 0 5px #ff6b00",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TypeAnimation
            sequence={[
              "welcome to",
              1000,
              "The Haunt",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
          />
        </motion.h1>
        <p className="text-xl md:text-2xl max-w-2xl pb-2 bahiana-font">
          Every code whispered is onchain.
        </p>

        <TelegramButton />
      </motion.section>

      <Footer />
    </main>
  );
};

export default LandingBody;
