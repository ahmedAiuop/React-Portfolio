import { useState } from "react";
import "./header.css";
import { useEffect } from "react";
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMood") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="">Articles</a>
          </li> */}
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="">Speaking</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // send value to local storage

          localStorage.setItem(
            "currentMood",
            theme === "dark" ? "light" : "dark"
          );

          // get value from local storage
          setTheme(localStorage.getItem("currentMood"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button className="icon-x" onClick={() => setshowModal(false)} />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a href="">Articles</a>
            </li> */}
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="">Speaking</a>
            </li> */}
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
