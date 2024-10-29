"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
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
    <header className="p-4 md:px-12 md:p-6 w-full h-fit flex flex-row justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-2xl text-center md:text-left w-fit h-fit bahiana-font"
      >
        #Ailloween on $Sol
      </motion.div>
      <div className="absolute flex-row items-center px-16 right-0 hidden md:flex">
        <AnimatePresence>
          {showFollowText && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="mr-2 px-4 h-full"
            >
              Follow Ailloween on
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ scale: 1.0 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <Link href="https://x.com/ailloween">
            <Image
              className="my-auto"
              width={40}
              height={40}
              src="/icons8-twitterx.svg"
              alt="Twitter X Logo"
            />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 1.0 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute flex-row items-center right-4 pl-42 md:hidden flex"
      >
        <Link href="https://x.com/ailloween">
          <Image
            width={40}
            height={40}
            src="/icons8-twitterx.svg"
            alt="Twitter X Logo"
          />
        </Link>
      </motion.div>
    </header>
  );
}
