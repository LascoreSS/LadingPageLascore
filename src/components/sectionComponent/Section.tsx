import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={`section-base ${
        className || "h-screen flex justify-center bg-[#f1eada] p-16"
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
