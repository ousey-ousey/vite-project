import "./hero.css";
import { motion } from "framer-motion";

import devanimation from "../../animation/dev.json";
import Lottie from "lottie-react";
export default function Hero() {
  return (
    <div className="hero flex">
      <div className="left-section ">
        <div className="parant-yousef flex ">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="../../../public/2.png"
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
            foundation in HTML, CSS, and JavaScript, I am capable of
            transforming design mockups into responsive, user-friendly websites.
            I have hands-on experience with modern libraries and frameworks such
            as React and tailwind & i know how to use scss , and am enthusiastic
            about learning new technologies. My attention to detail and
            commitment to creating visually appealing and functional web
            interfaces drive my work. I am excited to contribute to innovative
            projects and grow my skills in a collaborative and supportive
            environment.
          </p>
        </div>
        <div className="icons flex">
          <div className="icon icon-github">
            <a href="google.com"></a>
          </div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie animationData={devanimation} />
      </div>
    </div>
  );
}
