"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function Lore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [text, setText] = useState("");
  const fullText = "Will you join the haunt?";

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      animateText();
    }
  }, [isInView, mainControls]);

  const animateText = async () => {
    for (let i = 0; i <= fullText.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setText(fullText.slice(0, i));
    }
  };

  return (
    <section
      ref={ref}
      className="bg-black z-50 text-white min-h-screen flex items-center justify-center px-4 md:px-8 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-row justify-center text-2xl md:text-6xl font-bold mb-8 text-center bahiana-font"
          initial={{ opacity: 0, y: 50 }}
          // animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
          // variants={{
          //   visible: { opacity: 1, y: 0 },
          // }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true
          }}
        >
          <Image
            alt="pumpkin"
            width={50}
            height={50}
            src="/pumpkin-halloween-svgrepo-com.svg"
          />
          <span>The Legend of The Haunt</span>
          <Image
            alt="pumpkin"
            width={50}
            height={50}
            src="/pumpkin-halloween-svgrepo-com.svg"
          />
        </motion.div>

        <motion.p
          className="mb-6 text-sm leading-loose"
          initial={{ opacity: 0, y: 20 }}
          // animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          // variants={{
          //   visible: { opacity: 1, y: 0 },
          // }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true
          }}
        >
          Long ago, in the mysterious realms of the blockchain, whispers spread
          of an ancient digital phantom—
          <span className="bahiana-font tracking-wide text-lg italic">
            The Haunt
          </span>
          . Legend had it that this phantom was a playful spirit left behind by
          the forgotten tokens and dormant wallets of Solanas early days.
          It&apos;s said that the phantom wandered the Solana blockchain,
          yearning for purpose and waiting for the right moment to reveal
          itself.
        </motion.p>
        <motion.p
          className="mb-6 text-sm leading-loose"
          initial={{ opacity: 0, y: 20 }}
          // animate={mainControls}
          transition={{ duration: 0.5, delay: 0.6 }}
          // variants={{
          //   visible: { opacity: 1, y: 0 },
          // }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true
          }}
        >
          During the Halloween of 2024, as market volatility spiked, strange
          transactions began appearing in users&apos; wallets, labeled only as
          $Haunt. At first, the community dismissed them as random glitches, but
          soon eerie messages began surfacing in decentralized forums.
          <span className="bahiana-font tracking-wide text-lg italic">
            &quot;You&apos;ve been Haunted!&quot;{" "}
          </span>
          they read, always accompanied by tiny fractions of the mysterious
          token.
        </motion.p>

        <motion.p
          className="mb-6 text-sm leading-loose"
          initial={{ opacity: 0, y: 20 }}
          // animate={mainControls}
          transition={{ duration: 0.5, delay: 0.8 }}
          // variants={{
          //   visible: { opacity: 1, y: 0 },
          // }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true
          }}
        >
          The story spread like wildfire. Crypto sleuths uncovered a series of
          cryptic clues hidden in on-chain data, revealing the phantom&apos;s
          playful origins: $Haunt wasn&apos;t just another token—it was the
          playful embodiment of a decentralized ghost, whose mission is to{" "}
          <span className="bahiana-font tracking-wide text-lg italic">
            &quot;Unleash the Phantom&quot;
          </span>{" "}
          through cult like community and daring social experiments.
        </motion.p>

        <div
          className="mt-12 text-center text-2xl font-semibold italic h-8"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
                damping: 10,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          // animate={mainControls}
          transition={{ duration: 1, delay: 1 }}
          // variants={{
          //   visible: { opacity: 1, y: 0 },
          // }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true
          }}
        >
          <Card className="mt-16 bg-gray-800 text-white border-orange-500 border-2">
            <CardHeader>
              <CardTitle className="text-4xl tracking-wide font-bold text-center bahiana-font">
                Tokenomics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg">
                <span className="text-orange-500 font-bold">TBD</span> - The
                phantom is still crafting its mysterious economic structure.
              </p>
              <p className="text-center text-sm mt-2 italic">
                Stay tuned for the unveiling of $Haunt&apos;s spectral
                tokenomics!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="w-full mt-8"
          initial={{ opacity: 0, y: 50 }}
          // animate={mainControls}
          transition={{ duration: 0.5 }}
          // variants={{
          //   visible: { opacity: 1, y: 0 },
          // }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{
            once: true
          }}
        >
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-6 py-6 w-full rounded-lg shadow-lg flex items-center justify-center space-x-2"
            asChild
          >
            <Link href="https://t.me/+UNONoh1M1Zw0NWFk">
              <Ghost className="w-5 h-5" />
              <span className="tracking-widest bahiana-font">
                Join the Haunted House
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
