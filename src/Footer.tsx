import { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { buildWhatsAppLink } from "./utils/whatsapp";

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    // Fallback for old browsers
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const whatsappLink: string = buildWhatsAppLink(
    "I would like to Know about CSM Packages"
  );
  const year: number = new Date().getFullYear();

  return (
    <footer
      id="footer"
      ref={footerRef}
      className={`site-footer ${isVisible ? "site-footer--visible" : ""}`}
    >
      <div className="footer-inner">

        {/* ---- Column 1 — Brand ---- */}
        <div className="footer-brand">
          <div className="footer-logo">CSM</div>
          <p className="footer-tagline">
            Classroom Student Manager — affordable software to manage your class.
          </p>
        </div>

        {/* ---- Column 2 — Quick links ---- */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* ---- Column 3 — Connect ---- */}
        <div className="footer-connect">
          <h3 className="footer-heading">Connect</h3>
          <ul className="footer-socials">
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.4 0 .03 5.37.03 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.94 11.94 0 0 0 5.82 1.48h.01c6.6 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.47-8.4ZM12.01 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.67.96.98-3.58-.24-.37a9.86 9.86 0 0 1-1.52-5.23c0-5.46 4.45-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.93 9.9Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dineth-malinda-03594a40a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DinethMalinda-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
                </svg>
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ---- Bottom bar ---- */}
      <div className="footer-bottom">
        <span>© {year} CSM — Classroom Student Manager. All rights reserved.</span>
        <span className="footer-built">
          Built with <span className="footer-heart">♥</span> for teachers
        </span>
      </div>
    </footer>
  );
};

export default Footer;