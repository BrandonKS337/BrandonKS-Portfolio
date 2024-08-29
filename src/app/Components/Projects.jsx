"use client";

import React from "react";
import { PROJECTS } from "../../constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b-2 border-neutral-700 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex sm: flex-wrap m:flex-wrap flex-row lg:justify-center lg:flex-nowrap lg:px-20 gap-10"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="my-6 rounded"
              />
              <a href={project.URL}>
                <button className="bg-green-500 text-black px-4 py-2 rounded">
                  Check It Out
                </button>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="mb-10 w-full mx-q-xl lg:w-3/4"
            >
              <h4 className="mb-1 font-semibold">{project.title}</h4>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="w-full max-w-xl lg:w-3/4 flex flex-wrap mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h6 className="mb-2 text-neutral-300">Project Role:</h6>
              <p className="mb-4 text-neutral-400"> {project.role}</p>
              <h6 className="mb-1 text-neutral-300">Project Contributions:</h6>
              <div className="w-full max-w-xl lg:w-3/4 flex flex-wrap">
                {project.contributions.map((items, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium"
                  >
                    {items}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
