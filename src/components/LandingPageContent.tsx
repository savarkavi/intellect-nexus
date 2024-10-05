"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import {
  blinkingTextVariant,
  rotatingGlobeVariant,
} from "@/lib/motionVariants";

const futureEdge = localFont({
  src: "../app/fonts/FutureEdge.otf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 900",
});

const LandingPageContent = () => {
  return (
    <div
      className={`${futureEdge.className} relative flex h-[700px] w-full max-w-[1600px] justify-between overflow-y-hidden rounded-2xl border-4 border-red-500 p-12`}
    >
      <div className="z-[99] flex flex-col gap-2 self-end">
        <div className="mb-8">
          <motion.div
            className="relative -ml-12 h-[300px] w-[300px]"
            variants={rotatingGlobeVariant}
            animate="animate"
          >
            <Image
              src="/globe2.png"
              alt="globe"
              fill
              className="object-contain"
            />
          </motion.div>
          <p className="neonRedText text-xl">
            Curious people sharing meaningful <br /> content across the globe
          </p>
        </div>
        <div className="flex w-full flex-col">
          <motion.p
            variants={blinkingTextVariant}
            animate="animate"
            className="neonRedText -mb-2 w-full text-2xl uppercase italic"
          >
            Welcome to
          </motion.p>
          <h1 className={`text-8xl font-bold uppercase italic text-white`}>
            Intellect <br /> Nexus
          </h1>
          <div className="flex items-center justify-between self-end text-2xl italic">
            <motion.p
              variants={blinkingTextVariant}
              animate="animate"
              className="neonRedText w-full uppercase"
            >
              Only the best of Internet
            </motion.p>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/landingImg.png"
          alt="landing page image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-12 text-red-500">
        <div className="flex gap-8 self-start">
          <p>Login</p>
          <p>Sign Up</p>
          <p>About & Philosophy</p>
          <p>Contact</p>
        </div>
        <div className="flex max-w-[500px] cursor-default flex-col gap-4 text-sm">
          <p>
            &gt; Curating meaningful content in philosophy, science, history,
            and psychology
          </p>
          <p>
            &gt; Filtering out trivial and low-quality information to focus on
            substantive material
          </p>
          <p>
            &gt; Creating a collaborative platform for users to share valuable
            online discoveries
          </p>
          <p>
            &gt; Promoting intellectual growth and deeper understanding through
            curated content
          </p>
          <p>
            &gt; Combating information overload by highlighting high-quality
            resources
          </p>
          <p>
            &gt; Fostering a community centered around learning and
            knowledge-sharing
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;
