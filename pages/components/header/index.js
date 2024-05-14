import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    if (showMenu) {
      document.getElementById("menu").style.display = "none";
      setShowMenu(false);
    }
    if (!showMenu) {
      document.getElementById("menu").style.display = "block";
      setShowMenu(true);
    }
  };
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="/pg-logo.jpeg" className="logo_img" />
              </a>
              <ul className="nav" id="menu">
                <li className="scroll-to-section">
                  <a href="/" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="/about">About Us</a>
                </li>
                <li className="scroll-to-section">
                  <a href="/service">Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="/tariff">Tariffs</a>
                </li>
                <li className="scroll-to-section">
                  <a href="/gallery">Gallery</a>
                </li>
                <li className="scroll-to-section">
                  <a href="https://wa.me/+919911083130?text=Hi">Message Us</a>
                </li>
                <li className="scroll-to-section">
                  <div className="main-red-button">
                    <a href="tel:+919911083130">Contact Now</a>
                  </div>
                </li>
              </ul>
              <a
                className={showMenu ? "menu-trigger active" : "menu-trigger"}
                onClick={() => toggle()}
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
