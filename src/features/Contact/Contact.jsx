import React from "react";
import "./Contact.css";
import content from "../../content/content";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { ContactContent } = content;
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://renukakadarideveloper.netlify.app/.netlify/functions/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      
  
      if (response.ok) {
        toast.success("Thank you for contacting me!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        reset();
      } else {
        toast.error("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Error submitting the form. Please try again later.");
    }
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            netlify
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="con-input-div">
              <label className="cform-label">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                  className="cform-input"
                />
              </label>
              {errors.name && (
                <span className="con-error-msg">Please enter the name.</span>
              )}{" "}
            </div>
            <div className="con-input-div">
              <label className="cform-label">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="cform-input"
                />
              </label>
              {errors.email && (
                <span className="con-error-msg">
                  Please enter a valid email.
                </span>
              )}{" "}
            </div>
            <div className="con-input-div">
              {" "}
              <label className="cform-label">
                Message
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  maxLength="250"
                  {...register("message", { required: true })}
                  className="con-text-area cform-input"
                />
              </label>
              {errors.message && (
                <span className="con-error-msg">Please enter the message.</span>
              )}
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <button type="submit" name="Submit" className="con-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
