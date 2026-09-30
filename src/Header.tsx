import "./Header.css"

function Header() {
  const phoneNumber = "94755110269"; // Sri Lanka country code + number
  const message = encodeURIComponent("I would like to buy CSM");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

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
          <div className="hero-content">
            <h2>Welcome to</h2>
            <h1>Classroom Student Manager</h1>
            <h2>Affordable software to manage your class</h2>
            <div className="hero-line"></div>
            <div className="hero-cta">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
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