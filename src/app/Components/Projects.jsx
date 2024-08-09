"use client";

import React from "react";
import { PROJECTS } from "../constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="border-b-2 border-neutral-700 pb-10">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex sm: flex-wrap m:flex-wrap flex-row lg:justify-center lg:flex-nowrap lg:px-20 gap-10"
          >
            <div className="w-full lg:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="my-6 rounded"
              />
            </div>
            <div className="w-full mx-q-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 my-8 rounded bg-neutral-800 px-2 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
