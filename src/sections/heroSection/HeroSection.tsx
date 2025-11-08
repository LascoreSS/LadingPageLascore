import { useEffect, useState, useLayoutEffect, useRef } from "react";
import Section from "../../components/sectionComponent/Section";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { gsap } from "gsap"; //IMPORTAR GSAP

const HeroSection: React.FC = () => {
  /* Variables valor del scroll */
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  /* Logica para capturar el valor del scroll */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //AÑADIR REFS PARA LOS ELEMENTOS A ANIMAR
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null); // Ref para el contenedor principal

  //TEXTO PARA EL H2 Y P
  const title = "Lascore";
  const slogan = "Tu magina, nosotros lo hacemos realidad.";

  //LÓGICA DE ANIMACIÓN CON GSAP
  useLayoutEffect(() => {
    // Usamos un 'context' de GSAP para 'limpiar' las animaciones si el componente se desmonta
    // y para seleccionar elementos de forma segura dentro de 'heroContentRef'
    const ctx = gsap.context(() => {
      if (h2Ref.current && pRef.current) {
        // Seleccionamos los 'span' (letras) dentro de cada elemento
        const h2Chars = h2Ref.current.children;
        const pChars = pRef.current.children;

        // Creamos la timeline
        const tl = gsap.timeline({ delay: 0.3 }); // Un pequeño delay general

        tl.from(h2Chars, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        })
          .from(
            pChars,
            {
              opacity: 0,
              y: 30,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.02,
            },
            "-=0.6" /* Le decimos que la empiece 0.6 antes de que la del H2 termine */
          )
          .to([h2Chars, pChars], { opacity: 1 });
      }
    }, heroContentRef);

    return () => ctx.revert();
  }, []); 

  return (
    <Section
      id="hero-section"
      className="bg-[url('/src/assets/wave-mobile.svg')] bg-no-repeat bg-cover bg-center md:bg-[url('/src/assets/wave-desktop.svg')] "
    >
      {/* Seccion Hero principal de la pagina */}
      <div
        ref={heroContentRef} 
        className="max-w-7xl z-1 flex items-start flex-col md:flex-row md:items-center"
      >
        <span className="p-4">
          <h2
            ref={h2Ref}
            className="text-[#fff] font-bold text-6xl font-zalando"
            aria-label={title} // Por accesibilidad
          >
            {title.split("").map((char, index) => (
              <span className="inline-block " key={index}>
                {char}
              </span>
            ))}
          </h2>

          <p
            ref={pRef}
            className="text-[#fff] font-semibold text-2xl"
            aria-label={slogan} // Por accesibilidad
          >
            {slogan.split("").map((char, index) => (
              <span className="inline-block" key={index}>
                {/* Reemplazamos espacios por un 'non-breaking space' para que no colapsen */}
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        </span>
        <span className="w-full h-fit">
          <img src="src/assets/iphone-15-mockup-with-back-panel.png" alt="" />
        </span>
      </div>

      {/* Texto con efecto bounce para invitar a scrollear */}
      <span
        className={`${
          scrollPosition > 0 ? "opacity-0" : "opacity-100"
        } fixed transition duration-300 ease-in-out bottom-10 flex flex-col items-center animate-bounce text-2xl px-10 font-bold text-center md:bottom-15 md:p-0`}
      >
        <p>Mas informacion sobre nosotros</p>
        <p>
          <MdKeyboardDoubleArrowDown></MdKeyboardDoubleArrowDown>
        </p>
      </span>
    </Section>
  );
};

export default HeroSection;
