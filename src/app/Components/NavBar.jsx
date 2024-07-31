"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center py-2 px-8">
      <Image
        src="/logos/logov2white.svg"
        alt="logo"
        width={100}
        height={100}
        className="text-red-500"
      />
      <p className="text-white flex flex-wrap text-4xl gap-4">
        <a
          href="https://www.linkedin.com/in/brandonks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/BrandonKS337"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </p>
    </div>
  );
};

export default NavBar;
