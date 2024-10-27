"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

const TelegramButton = () => {
  return (
    <motion.div
      className="w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className="bg-[#0D8CE4] hover:bg-[#0077b5] text-white font-semibold text-lg px-6 py-6 w-full rounded-lg shadow-lg flex items-center space-x-2"
        asChild
      >
        <Link href="https://t.me/+UNONoh1M1Zw0NWFk">
          <Send className="w-5 h-5" />
          <span className="tracking-widest bahiana-font">Join the $Haunt</span>
        </Link>
      </Button>
    </motion.div>
  );
};

export default TelegramButton;
