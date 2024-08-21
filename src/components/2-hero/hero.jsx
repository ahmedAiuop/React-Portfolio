import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";

const Hero = () => {
  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="/ahmed.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="name-title">Ahmed Aioup</h1>
        <h1 className="title">
          Front-End Developer
          <span style={{ color: "var(--blue)", fontSize: "1.5rem" }}>
            (React.Js).
          </span>
        </h1>
        <p className="description">
          junior React Developer, Working using React . balance functional
          design with esthetic design. and I keep my skills updated and learning
          Modern technologies.
        </p>

        <div className="all-icons flex">
          <a
            href="https://www.facebook.com/profile.php?id=100007885274903"
            target="_blank"
            className="icon icon-facebook-square"
          ></a>
          <a
            href="https://www.instagram.com/ahmed_aioup/"
            target="_blank"
            className="icon icon-instagram"
          ></a>
          <a
            href="https://github.com/ahmedAiuop"
            target="_blank"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/ahmed-aioup-1a3a6a215/"
            target="_blank"
            className="icon icon-linkedin"
          ></a>
          <a
            href="https://drive.google.com/file/d/1Gij7uqQfnOXyJSuXOeZ8iENOkap9XTN-/view?usp=sharing"
            target="_blank"
            className="icon-document-download"
          ></a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Hero;
