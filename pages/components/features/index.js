import Image from "next/image";

const Features = () => {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="left-image wow fadeIn"
              style={{ width: "100%", height: "320px", position: "relative" }}
            >
              <Image src="/main-feature.png" alt="" fill={true} />
            </div>
          </div>
          <div className="col-lg-8 align-self-center">
            <div className="services">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration=".5s"
                    data-wow-delay="0.5s"
                  >
                    <div
                      className="icon"
                      style={{
                        width: "70px",
                        height: "70px",
                        position: "relative",
                      }}
                    >
                      <Image src="/library.png" alt="reporting" fill={true} />
                    </div>
                    <div className="right-text">
                      <h4>RESIDENTIAL SERVICES</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration=".5s"
                    data-wow-delay="0.7s"
                  >
                    <div
                      className="icon"
                      style={{
                        width: "70px",
                        height: "70px",
                        position: "relative",
                      }}
                    >
                      <Image src="/buildings.png" alt="" fill={true} />
                    </div>
                    <div className="right-text">
                      <h4>CLEAN ROOMS</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.9s"
                  >
                    <div
                      className="icon"
                      style={{
                        width: "70px",
                        height: "70px",
                        position: "relative",
                      }}
                    >
                      <Image src="/user.png" alt="" fill={true} />
                    </div>
                    <div className="right-text">
                      <h4>BEST STAFF</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing
                        elitere
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration=".5s"
                    data-wow-delay="1.1s"
                  >
                    <div
                      className="icon"
                      style={{
                        width: "70px",
                        height: "70px",
                        position: "relative",
                      }}
                    >
                      <Image src="/delivery.png" alt="" fill={true} />
                    </div>
                    <div className="right-text">
                      <h4>24 HOURS SERVICES</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
