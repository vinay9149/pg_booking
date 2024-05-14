import axios from "axios";
import React, { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (name != "" && mobile != "" && email != "" && message != "") {
      let mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!mobileRegex.test(mobile)) {
        setMobileError("Please enter a valid mobile number");
      }
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address");
      }
      if (mobileRegex.test(mobile) && emailRegex.test(email)) {
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let date = day + "/" + month + "/" + year;
        var userData = {
          date: date,
          name: name,
          mobile: mobile,
          email: email,
          message: message,
        };
        axios
          .post("/api/contact", userData)
          .then((res) => {
            if (res.data.status === "success") {
              setName("");
              setMobile("");
              setEmail("");
              setMessage("");
              setFormMsg("we will get back to you shortly");
              setTimeout(() => {
                setFormMsg("");
              }, 4000);
            } else {
              setFormMsg("Something went wrong");
              setTimeout(() => {
                setFormMsg("");
              }, 4000);
            }
          })
          .catch((err) => {
            console.log(err);
            setFormMsg("Something went wrong");
            setTimeout(() => {
              setFormMsg("");
            }, 4000);
          });
      }
    } else {
      if (name == "") {
        setNameError("Please enter your name");
      }
      if (mobile == "") {
        setMobileError("Please enter your mobile number");
      }
      if (email == "") {
        setEmailError("Please enter your email address");
      }
      if (message == "") {
        setMessageError("Please enter your message");
      }
    }
  };

  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center wow fadeInLeft">
            <div className="section-heading">
              <h2>Feel Free To Send Us a Message</h2>
              <div className="phone-info">
                <h4>
                  For any enquiry, Call Us:{" "}
                  <span>
                    <i className="fa fa-phone"></i>{" "}
                    <a href="tel:+919911083130">+91-9911083130</a>
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight">
            <form id="contact">
              <div className="row">
                <div className="col-lg-6">
                  <fieldset>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      autoComplete="on"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameError("");
                      }}
                      required
                    />
                    <p style={{ fontSize: "12px", color: "red" }}>
                      {nameError}
                    </p>
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input
                      type="number"
                      name="mobile"
                      value={mobile}
                      id="mobile"
                      placeholder="Mobile No."
                      onChange={(e) => {
                        setMobile(e.target.value);
                        setMobileError("");
                      }}
                      autoComplete="on"
                      required
                    />
                    <p style={{ fontSize: "12px", color: "red" }}>
                      {mobileError}
                    </p>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      placeholder="Your Email"
                      required
                    />
                    <p
                      style={{
                        fontSize: "12px",
                        color: "red",
                        marginBottom: 0,
                      }}
                    >
                      {emailError}
                    </p>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      name="message"
                      type="text"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setMessageError("");
                      }}
                      value={message}
                      required
                      style={{ resize: "none" }}
                    ></textarea>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "red",
                        marginBottom: 0,
                      }}
                    >
                      {messageError}
                    </p>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button
                      id="form-submit"
                      className="main-button "
                      onClick={submitHandler}
                    >
                      Send Message
                    </button>
                    <p style={{ color: "green", fontSize: "12px" }}>
                      {formMsg}
                    </p>
                  </fieldset>
                </div>
              </div>
              <div className="contact-dec">
                <img src="/contact-decoration.png" alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
