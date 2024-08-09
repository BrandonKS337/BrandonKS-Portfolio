"use client";

import React from "react";
import { ABOUT_ME_TEXT } from "../../constants";
import { motion } from "framer-motion";

const aboutMeImg = "/assets/placeholderimages/placeholderProfile.jpg";

const AboutSection = () => {
  return (
    <div className="border-b-2 border-neutral-900 pb-20 lg:mb-35">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-700"> Me</span>
      </h2>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex items-center w-full lg:w-1/2 lg:p-8 justify-center"
        >
          <div>
            <img
              src={aboutMeImg}
              alt="Profile Image 2"
              className=" rounded-2xl"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center w-full lg:justify-start lg:w-1/2"
        >
          <p className="my-2 max-w-xl py-6">{ABOUT_ME_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
