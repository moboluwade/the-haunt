"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Lore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [sequenceStatus, setSequenceStatus] = useState<string>("ongoing");
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const paragraphs = [
    "Long ago, in the mysterious realms of the blockchain, whispers spread of an ancient digital phantom—The Haunt. Legend had it that this phantom was a playful spirit left behind by the forgotten tokens and dormant wallets of Solana's early days. It's said that the phantom wandered the Solana blockchain, yearning for purpose and waiting for the right moment to reveal itself.",
    "During the Halloween of 2024, as market volatility spiked, strange transactions began appearing in users' wallets, labeled only as $Haunt. At first, the community dismissed them as random glitches, but soon eerie messages began surfacing in decentralized forums. \"You've been Haunted!\" they read, always accompanied by tiny fractions of the mysterious token.",
  ];

  return (
    <section
      ref={ref}
      className="bg-black z-50 text-white min-h-screen flex items-center justify-center px-4 md:px-8 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl md:text-6xl font-bold mb-8 text-center bahiana-font"
          initial={{ opacity: 0, y: 50 }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
        >
          🎃 The Legend of The Haunt 🎃
        </motion.h2>
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="mb-6 text-sm leading-loose"
            initial={{ opacity: 0, y: 20 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
          >
            {paragraph}
          </motion.p>
        ))}
        <motion.p
          className="mb-6 text-sm leading-loose"
          initial={{ opacity: 0, y: 20 }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 + 2 * 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TypeAnimation
            sequence={[
              "The story spread like wildfire.",
              300,
              "The story spread like wildfire. Crypto sleuths uncovered a series of cryptic clues hidden in on-chain data, revealing the phantom's playful origins:",
              1000,
              "The story spread like wildfire. Crypto sleuths uncovered a series of cryptic clues hidden in on-chain data, revealing the phantom's playful origins: $Haunt wasn't just another token",
              300,
              "The story spread like wildfire. Crypto sleuths uncovered a series of cryptic clues hidden in on-chain data, revealing the phantom's playful origins: $Haunt wasn't just another token—it was the playful embodiment of a decentralized ghost",
              400,
              "The story spread like wildfire. Crypto sleuths uncovered a series of cryptic clues hidden in on-chain data, revealing the phantom's playful origins: $Haunt wasn't just another token—it was the playful embodiment of a decentralized ghost, whose mission is to \"Unleash the Phantom\" through cult like community and daring social experiments.",
              () => {
                setSequenceStatus("completed");
                  console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={false}
          />
        </motion.p>

        <motion.div
          className="mt-12 text-center text-2xl font-semibold italic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {sequenceStatus === "completed" && (
            <TypeAnimation
              sequence={[
                "Will",
                300,
                "Will you",
                500,
                "Will you join",
                600,
                "Will you join the haunt",
                1000,
                "Will you join the haunt?",
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={false}
              speed={{type: 'keyStrokeDelayInMs', value: 50}}
              

            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
