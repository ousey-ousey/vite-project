import "./hero.css";

import devanimation from "../../animation/dev.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="hero flex">
      <div className="left-section ">
        <div className="parant-yousef flex ">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/2.jpg"
            alt="yousef~Aًٍََِْl~noumany"
            className="avatar"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="verified icon-verified"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            Front-End Developer
          </motion.h1>
          <p className="subtitle">
            As a front-end developer, I am eager to bring my passion for web
            development and fresh perspective to a dynamic team. With a solid
            foundation in HTML, CSS, and JavaScript, I excel at transforming
            design mockups into responsive, user-friendly websites. My hands-on
            experience with modern libraries and frameworks such as React,
            Next.js, and Redux Toolkit allows me to create efficient and
            interactive user interfaces. I am also proficient in using Tailwind
            for responsive design and MUI (Material-UI) to enhance the visual
            appeal of my projects. My knowledge of jQuery complements my skills,
            enabling me to implement dynamic features seamlessly. I am committed
            to crafting visually appealing and functional web interfaces, driven
            by my attention to detail. I am enthusiastic about learning new
            technologies and excited to contribute to innovative front-end
            projects while growing my skills in a collaborative and supportive
            environment.
          </p>
        </div>
        <div className="icons flex">
          <a
            target="_blank"
            className="icon icon-github"
            href="https://github.com/ousey-ousey"
          ></a>
          <a
            className="icon icon-linkedin-square"
            target="_blank"
            href="https://www.linkedin.com/in/yousef-alnoumany/"
          ></a>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie animationData={devanimation} />
      </div>
    </div>
  );
}
