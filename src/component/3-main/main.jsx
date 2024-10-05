import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion";
import myprojects from "./projects.js";

const images = [
  "./images/Weather.jpg",
  "./images/bar-success.jpg",
  "./images/FQRs.jpg",
  "./images/calc.jpg",
  "./images/qr-code-gene.jpg",
  "./images/random-pass.jpg",
  "./images/random-color.jpg",
  "./images/age-calc.jpg",
  // @ts-ignore
];
export default function Main() {
  const [active, setactive] = useState("all");
  const [arr, setarr] = useState(myprojects);

  const handleClick = (buttonCategory) => {
    setactive(buttonCategory);
    const newarr = myprojects.filter((item) => {
      return item.category.includes(buttonCategory);
    });

    setarr(newarr);
  };

  return (
    <main className="flex">
      <section className="left-section">
        <button
          onClick={() => {
            setactive("all");
            setarr(myprojects);
          }}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("tailwind");
          }}
          className={active === "tailwind" ? "active" : null}
        >
          Tailwind
        </button>
        <button
          onClick={() => {
            handleClick("JS");
          }}
          className={active === "JS" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => {
            handleClick("React");
          }}
          className={active === "React" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("Next");
          }}
          className={active === "Next" ? "active" : null}
        >
          Next
        </button>
      </section>
      <section id="maincont" className="flex right-section">
        {arr.map((item) => {
          return (
            <motion.article
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              key={item.id}
              className="card"
            >
              <div id="BOX">
                <div
                  style={{
                    width: "268px",
                    height: "200px", // Ensure the div has height for the background image
                    backgroundImage: `url(${item.imgpath})`,
                    backgroundSize: "cover", // Ensure the image covers the div
                    backgroundPosition: "center", // Center the image
                  }}
                />
                <div className="box" style={{ width: 270 }}>
                  <h2>{item.title}</h2>
                  <p className="sub-title">{item.P}</p>
                  {item.link && (
                    <a id="demobtn" href={item.link} target="_blank">
                      Live Demo
                    </a>
                  )}
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <span className="icon-link"></span>
                      <span className="icon-github"></span>
                    </div>
                    <a href={item.git} id="linko" className="flex">
                      more
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}
