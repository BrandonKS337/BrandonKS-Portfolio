import React from "react";
import { ABOUT_ME_TEXT } from "../../constants";

const aboutMeImg = "/assets/placeholderimages/placeholderProfile.jpg";

const AboutSection = () => {
  return (
    <div className="border-b-2 border-neutral-900 pb-20 lg:mb-35">
      
        <h2 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-700"> Me</span>
        </h2>
        <div className="flex flex-wrap ">
          <div className="flex items-center w-full lg:w-1/2 lg:p-8 justify-center">
            <img
              src={aboutMeImg}
              alt="Profile Image 2"
              className=" rounded-2xl"
            />
          </div>
          <div className="flex justify-center w-full lg:justify-start lg:w-1/2">
            <p className="my-2 max-w-xl py-6">{ABOUT_ME_TEXT}</p>
          </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
