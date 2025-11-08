import React, { forwardRef } from "react"; // <--- 1. Importa forwardRef

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// 3. Envuelve tu componente con 'forwardRef'
// React.FC ya no se usa aquí.
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`section-base h-screen flex justify-center md:p-16 ${className}`}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
