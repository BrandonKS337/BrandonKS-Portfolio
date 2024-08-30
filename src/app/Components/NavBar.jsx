"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-15 md:mb-20  flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <Image
          src="/assets/logos/logov2white.svg"
          alt="logo"
          width={100}
          height={100}
          className="text-red-500"
        />
      </div>
      <div className="text-white flex flex-wrap text-4xl gap-4">
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
      </div>
    </nav>
  );
};

export default NavBar;
