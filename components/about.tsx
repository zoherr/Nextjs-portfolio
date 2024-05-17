"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I made a pivotal decision to pursue my passion for programming. I enrolled in a coding bootcamp where I delved into full-stack web development. What truly excites me about programming is the problem-solving aspect; there's nothing quite like the satisfaction of finding a solution to a challenging problem. My expertise lies in React, Next.js, Node.js, and MongoDB, comprising my core stack. Additionally, I'm well-versed in TypeScript and Prisma. Always eager to expand my skill set, I actively seek opportunities to learn new technologies
      </p>

      <p>
      "Proficient in Figma, UI design, web development, and web design. Passionate about creating visually appealing and user-friendly digital experiences. Quick learner, adaptable, and committed to staying up-to-date with the latest industry trends. Additionally, I'm a full-stack MERN developer with expertise in backend development. Seeking opportunities to apply and enhance my skills while contributing to innovative projects and teams."
      </p>
    </motion.section>
  );
}
