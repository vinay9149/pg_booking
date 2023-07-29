const Product = () => {
  return (
    <div id="portfolio" className="our-portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading  wow bounceIn">
              <h2>
                what we <em>Offers</em> &amp; What We <span>Provide</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="item wow bounceInUp">
              <div className="hidden-content">
                <h4>Single rooms</h4>
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div className="showed-content">
                <img src="/portfolio-image.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item wow bounceInUp">
              <div className="hidden-content">
                <h4>Double sharing rooms</h4>
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div className="showed-content">
                <img src="/portfolio-image.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item wow bounceInUp">
              <div className="hidden-content">
                <h4>Triple sharing rooms</h4>
                <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
              </div>
              <div className="showed-content">
                <img src="/portfolio-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
