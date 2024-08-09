"use client";

import React from "react";
import { EXPERIENCES } from "../../constants";

const Experience = () => {
  return (
    <div  className="border-b-2 border-neutral-800 pb-10">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-green-800">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-2 text-neutral-400">
                <span>{experience.description}</span>
              </p>

              <div className="w-full max-w-xl lg:w-3/4 flex flex-wrap mb-8">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
