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
                <p>Starting from ₹12999/-</p>
              </div>
              <div className="showed-content">
                <img src="/gallery.jpeg" alt="" />
                <p>Single rooms</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item wow bounceInUp">
              <div className="hidden-content">
                <p>Starting from ₹7999/-</p>
              </div>
              <div className="showed-content">
                <img src="/gallery-3.jpeg" alt="" />
                <p>Double sharing rooms</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item wow bounceInUp">
              <div className="hidden-content">
                <p>Starting from ₹5999/-</p>
              </div>
              <div className="showed-content">
                <img src="/gallery-3.jpeg" alt="" />
                <p>Triple sharing rooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
