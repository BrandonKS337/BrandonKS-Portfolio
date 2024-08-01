"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
                  {/* Intro */}
                  <div className="text-white">
                    <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Brandon KennedySmith</h2>
                    <p className="bg-gradient-to-r from-blue-300 via bg-slate-500 to-yellow-400 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Software Engineer</p>
                    <p className="my-2">Placeholder Text</p>
                  </div>
                  {/* Hero Image */}
                  <div>
                    <img
                      src="/assets/placeholderimages/placeholderProfile.jpg"
                      alt="Profile Hero Image"
                    />
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
