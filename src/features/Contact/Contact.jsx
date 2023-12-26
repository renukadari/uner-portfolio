import React from "react";
import "./Contact.css";
import content from "../../content/content";

const Contact = () => {
  const { ContactContent } = content;

  return (
    <div className="contact-me-div" id="contact">
      <div className="about-content-div contact-content-div">
        <div className="abt-header-div">
          <div className="abt-title-div">
            <h2 className="abt-title">Contact</h2>
            <hr className="abt-title-hr"></hr>
          </div>
          <div className="abt-subtitle-div">
            <p className="abt-subtitle">{ContactContent.contactDescription}</p>
          </div>{" "}
        </div>
        <div className="contact-form-div">
          <form name="uner-contact-form"   method="POST" netlify data-netlify="true" data-netlify-honeypot="bot-field" action="/uner-contact-form">
            <input type="hidden" name="uner-contact-form" value="uner-contact-form" />

            <div className="con-input-div">
              <label className="cform-label">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="cform-input"
                />
              </label>
            </div>
            <div className="con-input-div">
              <label className="cform-label">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="cform-input"
                />
              </label>
            </div>
            <div className="con-input-div">
              {" "}
              <label className="cform-label">
                Message
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  maxLength="250"
                  className="con-text-area cform-input"
                ></textarea>
              </label>
            </div>

            <button type="submit" name="Submit" className="con-submit-btn">
              Submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
