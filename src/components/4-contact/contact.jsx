import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mldrjeoe");

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact With Me
      </h1>
      <p className="description">
        Contact me for more information and get notified when i publish
        something new to my portfolio.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "25px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="thanks flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ width: "40px", height: "40px" }}
                animationData={doneAnimation}
              />
              Thanks for your message.
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: "300px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
