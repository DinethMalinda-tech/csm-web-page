import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CsmSlider.css";

const SLIDES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function CsmSlider() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Init Swiper
  useEffect(() => {
    if (!swiperRef.current) return;

    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Autoplay, Pagination, Keyboard],

      // ---------- LOOP ----------
      loop: true,

      // ---------- AUTO SLIDE ----------
      autoplay: {
        delay: 2000,                 // 2 seconds — change to taste
        disableOnInteraction: false, // keep autoplaying after swipe
        pauseOnMouseEnter: false,    // set true to pause on hover
        stopOnLastSlide: false,      // keep going forever
        waitForTransition: false,    // don't wait for transition to finish
      },

      // ---------- TRANSITION ----------
      speed: 700,
      effect: "slide",

      // ---------- UI ----------
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      keyboard: { enabled: true },
      grabCursor: true,

      // ---------- TOUCH ----------
      simulateTouch: true,
      touchRatio: 1,
      resistanceRatio: 0.85,
    });

    return () => {
      swiperInstance.current?.destroy(true, true);
      swiperInstance.current = null;
    };
  }, []);

  // Track fullscreen state
  useEffect(() => {
    const handler = () => {
      const fs =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement;
      setIsFullscreen(!!fs);
    };

    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler);
    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler);
    };
  }, []);

  const toggleFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;

    if (!isFullscreen) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if ((el as any).webkitRequestFullscreen)
        (el as any).webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if ((document as any).webkitExitFullscreen)
        (document as any).webkitExitFullscreen();
    }
  };

  return (
    <>
      <section className="csm-intro">
 
        <p>
          CSM is a simple, offline app built for teachers who run their
          classroom on their own — with nothing but a phone. It handles your
          daily teaching admin so you can focus on teaching, not paperwork.
        </p>
        <p>
          No computers. No internet. No subscriptions. Just one small payment,
          and it's yours for life.
        </p>

      </section>

      <section className="csm-slider-section">
        <div
          className="csm-slider-frame"
          ref={frameRef}
          onPointerDown={(e) => {
            dragStart.current = { x: e.clientX, y: e.clientY };
          }}
          onPointerUp={(e) => {
            if (!dragStart.current) return;
            const dx = Math.abs(e.clientX - dragStart.current.x);
            const dy = Math.abs(e.clientY - dragStart.current.y);
            dragStart.current = null;
            if (dx < 8 && dy < 8) toggleFullscreen();
          }}
          role="button"
          tabIndex={0}
          aria-label="Click to view fullscreen"
        >
          <div className="swiper csm-swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {SLIDES.map((n) => (
                <div className="swiper-slide" key={n}>
                  <img
                    src={`${import.meta.env.BASE_URL}${n}.png`}
                    alt={`CSM Slide ${n}`}
                  />
                </div>
              ))}
            </div>

            <div className="swiper-pagination" />
          </div>

          {!isFullscreen && (
            <div className="csm-hint">
              <i className="fa-solid fa-expand" /> Click to view fullscreen
            </div>
          )}
        </div>
      </section>
    </>
  );
}