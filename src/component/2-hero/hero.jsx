import "./hero.css";
import devanimation from "../../animation/dev.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaReact, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiSass } from "react-icons/si";

export default function Hero() {
  return (
    <>
      <div className="hero flex">
        <div className="left-section">
          <div className="parant-yousef flex">
            <div className="atom-container">
              {/* Nucleus (Avatar)*/}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="nucleus"
              >
                <div className="stack">
                  <div className="card">
                    <div className="image">
                      {" "}
                      <img
                        src="/2.jpg"
                        alt="yousef~Al~noumany"
                        className="avatar"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Orbit 1 */}
              <div className="orbit orbit-1">
                <div className="electron electron-1">
                  <FaReact className="tech-icon react-icon" />
                </div>
              </div>
              {/* Orbit 2 */}
              <div className="orbit orbit-2">
                <div className="electron electron-2">
                  <SiNextdotjs className="tech-icon next-icon" />
                </div>
                <div className="electron electron-2-2">
                  <SiTailwindcss className="tech-icon tailwind-icon" />
                </div>
              </div>
              {/* Orbit 3 */}
              <div className="orbit orbit-3">
                <div className="electron electron-3">
                  <SiRedux className="tech-icon redux-icon" />
                </div>
                <div className="electron electron-3-2">
                  <FaJs className="tech-icon js-icon" />
                </div>
                <div className="electron electron-3-3">
                  <SiSass className="tech-icon sass-icon" />
                </div>
              </div>{" "}
            </div>

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
