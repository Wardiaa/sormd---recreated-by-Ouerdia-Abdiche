import type { CSSProperties, ReactNode } from 'react';

interface HeroBannerProps {
  image: string;
  alt: string;
  titre: ReactNode;
  sousTitre?: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  sectionStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  children?: ReactNode;
}

export default function HeroBanner({
  image,
  alt,
  titre,
  sousTitre,
  id,
  className,
  containerClassName,
  sectionStyle,
  containerStyle,
  children
}: HeroBannerProps) {
  return (
    <section
      className={`hero-banner${className ? ` ${className}` : ''}`}
      id={id}
      style={sectionStyle}
    >
      <img src={image} alt={alt} className="hero-image" />
      <div className="hero-overlay">
        <div
          className={`container${containerClassName ? ` ${containerClassName}` : ''}`}
          style={containerStyle}
        >
          <h1>{titre}</h1>
          {sousTitre ? <p>{sousTitre}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
