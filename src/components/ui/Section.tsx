import React, { ReactNode } from 'react';
import AnimatedElement from './AnimatedElement';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  centerTitle?: boolean;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  centerTitle = false,
  dark = false,
}) => {
  return (
    <section 
      id={id} 
      className={`section ${dark ? 'bg-dark-800' : 'bg-dark-700'} ${className}`}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className={`mb-16 ${centerTitle ? 'text-center' : ''}`}>
            {title && (
              <AnimatedElement animation="slideUp">
                <h2 className="heading-lg mb-4 text-gradient">{title}</h2>
              </AnimatedElement>
            )}
            {subtitle && (
              <AnimatedElement animation="slideUp" delay={0.2}>
                <p className="text-lg text-gray-300 max-w-3xl">{subtitle}</p>
              </AnimatedElement>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;