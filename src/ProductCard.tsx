import React, { useEffect, useRef, useState } from "react";
import "./ProductCard.css";

/* ---------- Types ---------- */

export interface FeatureGroup {
  /** Heading shown in uppercase above the nested list */
  title: string;
  /** Items shown inside the nested <ul> */
  items: readonly string[];
}

export interface ProductCardProps {
  /** Product image URL */
  imageSrc: string;
  /** Alt text for the image (default: "App preview") */
  imageAlt?: string;
  /** Short description below the image */
  description: string;
  /** Nested feature groups — each becomes a <ul> with a nested <ul> */
  featureGroups: readonly FeatureGroup[];
  /** Buy button label (default: "Buy now") */
  buyLabel?: string;
  /** Demo button label (default: "Demo video") */
  demoLabel?: string;
  /** Buy button click handler */
  onBuy?: React.MouseEventHandler<HTMLButtonElement>;
  /** Demo button click handler */
  onDemo?: React.MouseEventHandler<HTMLButtonElement>;
  /** Extra class names for the outer wrapper */
  className?: string;
  /** Titles that should be rendered as "special" (red title, blue items) */
  specialTitles?: readonly string[];
}

/* ---------- Component ---------- */

function ProductCard({
  imageSrc,
  imageAlt = "App preview",
  description,
  featureGroups,
  buyLabel = "Buy now",
  demoLabel = "Demo video",
  onBuy,
  onDemo,
  className,
  specialTitles = [],
}: ProductCardProps): React.ReactElement {
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cardClassName = [
    "product-card",
    className,
    isVisible ? "product-card--visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClassName} ref={ref}>
      <div className="card-main">
        <div className="product-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>

        <div className="card-content">
          <p className="product-description">{description}</p>

          <div className="feature-lists">
            {featureGroups.map((group) => {
              const isSpecial = specialTitles.includes(group.title);

              return (
                <ul
                  className={`feature-group${
                    isSpecial ? " feature-group--special" : ""
                  }`}
                  key={group.title}
                >
                  <li>
                    {group.title}
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      <div className="actions">
        <button className="btn btn-buy" type="button" onClick={onBuy}>
          {buyLabel}
        </button>
        <button className="btn btn-demo" type="button" onClick={onDemo}>
          {demoLabel}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;