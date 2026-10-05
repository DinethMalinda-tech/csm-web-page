import { useEffect, useRef, useState } from "react";
import "./SectionTitle.css";

interface SectionTitleProps {
  /** Main title text (usually the big uppercase heading) */
  title: string;
  /** Optional small script text above the title (e.g. "What we do") */
  subtitle?: string;
  /** Optional custom class for extra styling */
  className?: string;
  /** Optional id for anchor linking */
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = "",
  id,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
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
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`section-title ${className} ${
        isVisible ? "section-title--visible" : ""
      }`.trim()}
      id={id}
    >
      {subtitle && <h3 className="section-title__subtitle">{subtitle}</h3>}

      <div className="section-title__row">
        <span className="section-title__line" aria-hidden="true" />
        <h2 className="section-title__text">{title}</h2>
        <span className="section-title__line" aria-hidden="true" />
      </div>
    </div>
  );
};

export default SectionTitle;