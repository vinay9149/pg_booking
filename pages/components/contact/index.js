const Contact = () => {
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
                    <a href="#">+91-9911083130</a>
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
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Name"
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input
                      type="surname"
                      name="surname"
                      id="surname"
                      placeholder="Surname"
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your Email"
                      required=""
                    />
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
                      required=""
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button id="form-submit" className="main-button ">
                      Send Message
                    </button>
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
