import Hero from "./components/2-hero/hero";
import Header from "./components/1-header/header";
import Main from "./components/3-main/main";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);

  const [showScrollBtn, setshowScrollBtn] = useState(false);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrollBtn ? 1 : 0, transition: "all 1s" }}
        href="#up"
      >
        <button className="icon-arrow-up scroll-to-top"></button>
      </a>
    </div>
  );
}

export default App;
