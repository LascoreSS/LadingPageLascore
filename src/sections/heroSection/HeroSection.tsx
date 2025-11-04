import Section from "../../components/sectionComponent/Section";

const HeroSection = () => {
  return (
    <Section
      id="hero-section"
      className="bg-[url('/src/assets/wave-mobile.svg')] bg-no-repeat bg-cover bg-center md:bg-[url('/src/assets/wave-desktop.svg')] "
    >
      <div className="max-w-7xl z-1 flex items-start flex-col md:flex-row md:items-center">
        <span className="p-4">
          <h2 className="text-[#fff] font-bold text-6xl font-zalando">
            Lascore
          </h2>
          <p className="text-[#fff] font-semibold text-2xl">
            Imagina, que nosotros hacemos tu pagina realidad.
          </p>
        </span>
        <span className="w-full h-fit">
          <img src="src/assets/iphone-15-mockup-with-back-panel.png" alt="" />
        </span>
      </div>
    </Section>
  );
};

export default HeroSection;
