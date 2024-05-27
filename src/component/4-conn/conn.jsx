import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneanimation from "../../animation/done.json";
import emailanimation from "../../animation/email.json";
export default function Contant() {
  const [state, handleSubmit] = useForm("xwkgjakd");
  return (
    <section
      className="contact-us flex"
      style={{ justifyContent: "space-between", flexDirection: "row" }}
    >
      <div>
        <h1 className="title">
          <span className="icon-email" />
          Contact Us
        </h1>
        <p className="sub-title">Contact us for more information </p>
        <div className="flex">
          <form
            action="https://formspree.io/f/xwkgjakd"
            method="post"
            onSubmit={handleSubmit}
            className="flex"
          >
            <div className="email-box flex">
              <label htmlFor="email"> Email Address:</label>
              <input
                required
                type="email"
                autoComplete="off"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="textarea flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your message:</label>
              <textarea name="message" id="message" required></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className="submit"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "submit"}
            </button>
            {state.succeeded && (
              <h2 className="flex" style={{ color: "#945" }}>
                <Lottie
                  loop={false}
                  style={{ height: "30px" }}
                  animationData={doneanimation}
                />
                Your message arivied, Thanks for sending!
              </h2>
            )}
          </form>
        </div>
      </div>
      <div className="animation ">
        <Lottie
          style={{ height: "400px", borderRadius: "50%" }}
          animationData={emailanimation}
        />
      </div>
    </section>
  );
}
