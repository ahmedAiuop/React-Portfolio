import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    setArr(myProjects.filter((item) => item.category === buttonCategory));
  };
  return (
    <main id="projects" className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("HTML & CSS");
          }}
          className={currentActive === "HTML & CSS" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("Java Script");
          }}
          className={currentActive === "Java Script" ? "active" : null}
        >
          Java Script
        </button>
        <button
          onClick={() => {
            handleClick("React & MUI");
          }}
          className={currentActive === "React & MUI" ? "active" : null}
        >
          React & MUI
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                onClick={() => {
                  item.link && window.open(item.link, "_blank");
                }}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", damping: 8, stiffness: 70 }}
                key={item.imgPath}
                className="card"
              >
                <img width={233} src={item.imgPath} />
                <div style={{ width: "233px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="description">{item.description}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        href={item.link}
                        className="icon-link"
                        target="_blank"
                      ></a>
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        href={item.gitHub}
                        className="icon-github"
                        target="_blank"
                      ></a>
                    </div>

                    <a
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      href={item.gitProfile}
                      className="link flex"
                      target="_blank"
                    >
                      more{" "}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
