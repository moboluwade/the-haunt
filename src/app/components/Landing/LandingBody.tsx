"use client";
import React  from "react";
import { motion } from "framer-motion";
import TelegramButton from "../Button/TelegramButton";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const LandingBody = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <main className="relative z-20 flex flex-col px-4 md:px-16 justify-between">
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

    </main>
  );
};

export default LandingBody;
