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
        {/* <button
          onClick={() => {
            handleClick("JS");
          }}
          className={active === "JS" ? "active" : null}
        >
          Javascript
        </button> */}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1, // Fast animation, completes in 0.4 seconds
                ease: "easeOut", // Smooth ease-out timing function
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
                    backgroundPosition: "top", // Center the image
                  }}
                />
                <div style={{ width: 270, position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      background: "green",
                      textAlign: "center",
                      borderRadius: "15px 0 15px  0 ",
                      padding: "2px",
                      top: "1.75rem",
                      fontSize: "small",
                      left: 8,
                      width: 60,
                      height: 20,
                    }}
                  >
                    {item.category?.[0]}
                  </div>
                  <div
                    className="box textcontent"
                    style={{
                      width: "100%",
                      clipPath:
                        "path('M 20 20 L 60 20 A 20 20 0 0 0  70 10  A 20 20 0 0 1  80 0 L 270 0 L 270 270 L 0 270 L 0 40 A 20 20 0 0 1 20 20 Z')",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "medium",
                        marginTop: ".5rem",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p className="sub-title">{item.P}</p>

                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <span className="icon-link"></span>
                        <span className="icon-github"></span>
                      </div>
                      {item.link && (
                        <a id="demobtn" href={item.link} target="_blank">
                          Live Demo
                        </a>
                      )}
                      <a href={item.git} id="linko" className="flex">
                        more
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
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
