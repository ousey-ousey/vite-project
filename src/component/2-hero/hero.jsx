import "./hero.css";
import devanimation from "../../animation/dev.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaReact, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiSass } from "react-icons/si";
import HeroAtom from "./atom";

export default function Hero() {
  return (
    <>
      <div className="hero flex">
        <div className="left-section">
          <div className="parant-yousef flex">
            <HeroAtom />

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="title"
            >
              Front-End Developer
            </motion.h1>

            <p className="subtitle">
              Enthusiastic and motivated Front-End Developer with a strong
              foundation in web development technologies, including HTML, CSS,
              JavaScript, and React. Skilled in building responsive,
              user-friendly web interfaces using modern frameworks and tools
              such as Next.js and Tailwind CSS. Proficient in integrating and
              handling APIs to create seamless, dynamic interactions and ensure
              efficient data flow across applications. Passionate about
              leveraging cutting-edge technologies to craft intuitive and
              engaging user experiences, with a focus on performance and
              scalability. Eager to contribute to dynamic development teams and
              thrive in a professional environment that encourages continuous
              learning and innovation.
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

        <div className="right-section animation">
          <Lottie animationData={devanimation} />
        </div>
      </div>
    </>
  );
}
