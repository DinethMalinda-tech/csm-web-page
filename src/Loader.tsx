import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => {
      // small delay so it feels intentional, not flickery
      setTimeout(() => setHidden(true), 600);
      // fully remove from DOM after fade completes
      setTimeout(() => setGone(true), 1400);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${hidden ? "loader--hidden" : ""}`}>
      <div className="loader-inner">
        <div className="loader-logo">CSM</div>
        <div className="loader-bar">
          <span className="loader-bar-fill"></span>
        </div>
        <div className="loader-text">Loading…</div>
      </div>
    </div>
  );
};

export default Loader;