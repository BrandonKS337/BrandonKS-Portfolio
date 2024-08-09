'use client'

import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiAmazonec2 } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { FaTrello } from "react-icons/fa";
import { CgMonday } from "react-icons/cg";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiSentry } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

// Reusable component for technology icons
const TechIcon = ({ IconComponent, colorClass, label }) => (
  <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <IconComponent className={`text-7xl ${colorClass}`} aria-label={label} />
  </div>
);

const TechStack = () => {
  // Array of technology data for the icons
  // NOTE: pull this out and into index.js later in the constants folder
  const technologies = [
    { Component: RiReactjsLine, color: "text-cyan-400", label: "ReactJS" },
    { Component: TbBrandNextjs, color: "", label: "NextJS" },
    { Component: FaDocker, color: "text-blue-700", label: "Docker" },
    { Component: FaGithub, color: "", label: "GitHub" },
    { Component: SiMongodb, color: "text-green-500", label: "MongoDB" },
    { Component: SiMysql, color: "text-cyan-400", label: "MySQL" },
    { Component: SiSequelize, color: "text-cyan-400", label: "Sequelize" },
    { Component: CgMonday, color: "text-red-500", label: "Monday.com" },
    { Component: FaTrello, color: "text-cyan-500", label: "Trello" },
    { Component: PiFigmaLogoFill, color: "", label: "Figma" },
    { Component: SiMui, color: "text-cyan-400", label: "Material UI" },
    { Component: RiTailwindCssFill, color: "text-cyan-400", label: "Tailwind CSS" },
    { Component: FaNodeJs, color: "text-green-500", label: "NodeJS" },
    { Component: FaAws, color: "text-blue-600", label: "AWS" },
    { Component: SiAmazonec2, color: "text-orange-500", label: "Amazon EC2" },
    { Component: VscVscodeInsiders, color: "text-cyan-500", label: "VS Code" },
    { Component: SiPostman, color: "text-orange-500 bg-white rounded-2xl", label: "Postman" },
    { Component: SiSentry, color: "text-red-500", label: "Sentry" },
    { Component: FaSlack, color: "", label: "Slack" },
    { Component: SiVercel, color: "", label: "Vercel" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="mt-20 text-center text-4xl">Technologies</h2>
      <p className="text-center m-20 px-15">
        Here are a few of the technologies and resources I have familiarized myself with through direct project-based experience.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech, index) => (
          <TechIcon 
            key={index} 
            IconComponent={tech.Component} 
            colorClass={tech.color} 
            label={tech.label} 
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
