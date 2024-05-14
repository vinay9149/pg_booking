import Image from "next/image";

const Banner = (props) => {
  return (
    <div className="main-banner wow fadeIn animated" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content header-text wow fadeInLeft animated">
                  {props.page == "home" ? (
                    <h2>
                      Welcome to <em>Home</em> <span>far from</span> Home
                    </h2>
                  ) : props.page == "about" ? (
                    <h2>About US</h2>
                  ) : props.page == "services" ? (
                    <h2>Our Services</h2>
                  ) : props.page == "tariff" ? (
                    <h2>Tariffs</h2>
                  ) : props.page == "gallery" ? (
                    <h2>Gallery</h2>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="right-image wow fadeInRight animated"
                  style={{
                    width: "100%",
                    height: "420px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/banner-right-image.png"
                    alt="team meeting"
                    fill={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
