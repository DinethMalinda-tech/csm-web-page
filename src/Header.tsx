import { useEffect, useState } from "react";
import "./Header.css";
import { buildWhatsAppLink } from "./utils/whatsapp";

function Header() {
  const whatsappLink = buildWhatsAppLink(
    "I would like to Know about CSM Packages"
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // wait for the browser to paint, then trigger reveal
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <header id="navbar" className="main-header">
        <div className="nav-wrapper">
          <div className="nav-logo">CSM</div>
          <nav>
            <ul className="nav-menu">
              <li><a href="#about">About</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero-section">
        <div className="hero-banner">
          <div className={`hero-content ${visible ? "hero-content--visible" : ""}`}>
            <h2>Welcome to</h2>
            <h1>Classroom Student Manager</h1>
            <h2>Affordable software to manage your class</h2>
            <div className="hero-line"></div>
            <div className="hero-cta">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;