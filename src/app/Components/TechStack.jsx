"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import {
  SiMysql,
  SiMui,
  SiMongodb,
  SiSequelize,
  SiAmazonec2,
  SiPostman,
  SiSentry,
  SiVercel,
  SiJira,
  SiSwagger,
  SiMariadb,
  SiBitbucket,
  SiExpress,
  SiJson,
  SiAppwrite,
  SiTwilio,
  SiZoom,
  SiMicrosoftteams,
} from "react-icons/si";
import {
  FaGithub,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaTrello,
  FaSlack,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { PiFigmaLogoFill } from "react-icons/pi";
import { CgMonday } from "react-icons/cg";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { LuWorkflow } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { SiMicrosoftoutlook } from "react-icons/si";

const TechStack = () => {
  const technologies = [
    {
      image: "/assets/logos/Appian_Logo.svg",
      label: "Appian",
    },
    {
      image: "/assets/logos/lucidchart_logo.svg",
      label: "Lucid Chart",
    },
    {
      Component: RiReactjsLine,
      color: "text-cyan-400",
      label: "ReactJS",
    },
    {
      Component: TbBrandNextjs,
      color: "",
      label: "NextJS",
    },
    {
      Component: FaJava,
      color: "text-red-500",
      label: "Java",
    },
    {
      Component: BiLogoPostgresql,
      color: "text-sky-500",
      label: "PostgreSQL",
    },
    {
      Component: SiMariadb,
      color: "text-cyan-600",
      label: "MariaDB",
    },
    {
      Component: SiMicrosoftoutlook,
      color: "text-blue-500",
      label: "Microsoft Outlook",
    },
    {
      Component: SiMongodb,
      color: "text-green-500",
      label: "MongoDB",
    },
    {
      Component: SiMysql,
      color: "text-cyan-400",
      label: "MySQL",
    },
    {
      Component: SiSequelize,
      color: "text-cyan-400",
      label: "Sequelize",
    },
    {
      Component: SiExpress,
      color: "",
      label: "Express",
    },
    {
      Component: FaNodeJs,
      color: "text-green-500",
      label: "NodeJS",
    },
    {
      Component: SiJson,
      color: "text-yellow-400",
      label: "JSON",
    },
    {
      Component: TbApi,
      color: "text-green-400",
      label: "API Development",
    },
    {
      Component: SiSwagger,
      color: "text-green-500",
      label: "Swagger",
    },
    {
      Component: LuWorkflow,
      color: "text-purple-400",
      label: "Process Automation",
    },
    {
      Component: HiOutlineDocumentText,
      color: "text-blue-300",
      label: "Technical Documentation",
    },
    {
      Component: FaDocker,
      color: "text-blue-700",
      label: "Docker",
    },
    {
      Component: FaAws,
      color: "text-blue-600",
      label: "AWS",
    },
    {
      Component: SiAmazonec2,
      color: "text-orange-500",
      label: "Amazon EC2",
    },
    {
      Component: FaGithub,
      color: "",
      label: "GitHub",
    },
    {
      Component: SiBitbucket,
      color: "text-blue-500",
      label: "Bitbucket",
    },
    {
      Component: SiPostman,
      color: "text-orange-500 bg-white rounded-2xl",
      label: "Postman",
    },
    {
      Component: SiAppwrite,
      color: "text-pink-500",
      label: "Appwrite",
    },
    {
      Component: SiTwilio,
      color: "text-red-500",
      label: "Twilio",
    },
    {
      Component: SiSentry,
      color: "text-red-500",
      label: "Sentry",
    },
    {
      Component: SiVercel,
      color: "",
      label: "Vercel",
    },
    {
      Component: PiFigmaLogoFill,
      color: "",
      label: "Figma",
    },
    {
      Component: SiMui,
      color: "text-cyan-400",
      label: "Material UI",
    },
    {
      Component: RiTailwindCssFill,
      color: "text-cyan-400",
      label: "Tailwind CSS",
    },
    {
      Component: VscVscodeInsiders,
      color: "text-cyan-500",
      label: "VS Code Insiders",
    },
    {
      Component: CgMonday,
      color: "text-red-500",
      label: "Monday.com",
    },
    {
      Component: SiJira,
      color: "text-blue-600",
      label: "Jira",
    },
    {
      Component: FaTrello,
      color: "text-cyan-500",
      label: "Trello",
    },
    {
      Component: FaSlack,
      color: "",
      label: "Slack",
    },
    {
      Component: SiZoom,
      color: "text-blue-500",
      label: "Zoom",
    },
    {
      Component: SiMicrosoftteams,
      color: "text-purple-500",
      label: "Microsoft Teams",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.8,
        delay: 5000,
        target: 1.5,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const restartAutoScroll = () => {
      const autoScroll = emblaApi.plugins().autoScroll;

      if (autoScroll) {
        setTimeout(() => {
          autoScroll.play();
        }, 50);
      }
    };

    emblaApi.on("pointerUp", restartAutoScroll);

    return () => {
      emblaApi.off("pointerUp", restartAutoScroll);
    };
  }, [emblaApi]);

  return (
    <div className="border-b-2 border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 text-center text-4xl"
      >
        Technologies & Tools
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5 }}
        className="my-16 text-center lg:px-64"
      >
        Here are some of the technologies and tools I have used through direct,
        project-based experience.
      </motion.p>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {technologies.map((tech) => (
              <div
                className="embla__slide tech-stack__slide"
                key={tech.label}
                title={tech.label}
              >
                {tech.Component ? (
                  <tech.Component
                    className={`tech-stack__icon ${tech.color ?? ""}`}
                    aria-label={tech.label}
                  />
                ) : (
                  <img
                    src={tech.image}
                    alt={tech.label}
                    className="tech-stack__image"
                  />
                )}

                <span className="tech-stack__tooltip">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
