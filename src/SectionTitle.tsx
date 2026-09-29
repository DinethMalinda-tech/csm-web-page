import React from 'react';
import './SectionTitle.css';

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
  className = '',
  id,
}) => {
  return (
    <div className={`section-title ${className}`.trim()} id={id}>
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