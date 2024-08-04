"use client";
import React from "react";
import { HERO_SECTION } from "../constants";
import Image from "next/image";

const profilePic = "/assets/placeholderimages/placeholderProfile.jpg";

const HeroSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            {/* Intro */}
            <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl ">
              Brandon KennedySmith
            </h2>
            <p className="bg-gradient-to-r from-blue-300 via bg-slate-500 to-yellow-400 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Software Engineer
            </p>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_SECTION}
            </p>
            {/* <p className="my-2">Placeholder</p> */}
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-full lg:w-1/2 lg:p-4 ">
          <div className="flex justify-center ">
            <img src={profilePic} alt="Profile Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
