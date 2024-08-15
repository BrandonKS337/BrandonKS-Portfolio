"use client";
import React from "react";
import { HERO_SECTION } from "../../constants";
import { motion } from "framer-motion";

const profilePic = "/assets/placeholderimages/placeholderProfile.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const HeroSection = () => {
  return (
    <div className="border-b-2 border-neutral-900 pb-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl "
            >
              Brandon KennedySmith
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via bg-slate-500 to-yellow-400 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Software Engineer
            </motion.span>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-md py-6 font-light tracking-tighter text-xl"
            >
              {HERO_SECTION}
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-4 ">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Profile Hero Image"
              className=" rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
