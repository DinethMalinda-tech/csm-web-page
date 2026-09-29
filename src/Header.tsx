import React from 'react';
import './Header.css'; // Assuming you save the CSS as Header.css

function Header(){
     return (
    <>
      <header className="main-header">
        <div className="header-wrapper">
          <div className="main-logo">CSM</div>
          <nav>
            <ul className="main-menu">
              <li><a href="#section-2">About</a></li>
              <li><a href="#section-5">Packages</a></li>
              <li><a href="#section-7">Contact</a></li>
           
           
            </ul>
          </nav>
        </div>
      </header>
      <section id="section-1">
        <div className="content-slider">
          <input type="radio" id="banner1" className="sec-1-input" name="banner" defaultChecked />
          <input type="radio" id="banner2" className="sec-1-input" name="banner" />
          <input type="radio" id="banner3" className="sec-1-input" name="banner" />
          <input type="radio" id="banner4" className="sec-1-input" name="banner" />
          <div className="slider">
            <div id="top-banner-1" className="banner">
              <div className="banner-inner-wrapper">
                <h2>Welcome to</h2>
                <h1>Classroom Student Manager</h1>
                <h2>Affordable software to manage your class</h2>
                <div className="line"></div>
                <div className="learn-more-button"><a href="#section-2">Contact Us</a></div>
              </div>
            </div>
            <div id="top-banner-2" className="banner">
              <div className="banner-inner-wrapper">
                <h2>What We Do</h2>
                <h1>Great<br />MoGo</h1>
                <div className="line"></div>
                <div className="learn-more-button"><a href="#section-4">Contact Us</a></div>
              </div>
            </div>
            <div id="top-banner-3" className="banner">
              <div className="banner-inner-wrapper">
                <h2>Here We Are</h2>
                <h1>We Are<br />MoGo</h1>
                <div className="line"></div>
                <div className="learn-more-button"><a href="#section-6">Contact Us</a></div>
              </div>
            </div>
            <div id="top-banner-4" className="banner">
              <div className="banner-inner-wrapper">
                <h2>Our Contacts</h2>
                <h1>Welcome<br />to MoGo</h1>
                <div className="line"></div>
                <div className="learn-more-button"><a href="#main-footer">Contact Us</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;