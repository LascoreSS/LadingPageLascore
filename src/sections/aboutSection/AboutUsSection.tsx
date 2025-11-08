import type React from "react";
import { useLayoutEffect, useRef } from "react";
import Section from "../../components/sectionComponent/Section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection: React.FC = () => {
  // --- 1. Refs con nombres genéricos ---
  const gateContainerRef = useRef<HTMLDivElement>(null);
  const gateOneRef = useRef<HTMLDivElement>(null); // Antes 'leftGateRef'
  const gateTwoRef = useRef<HTMLDivElement>(null); // Antes 'rightGateRef'

  useLayoutEffect(() => {
    // Definimos las variables de las refs aquí para que estén en el scope
    const gateOne = gateOneRef.current;
    const gateTwo = gateTwoRef.current;

    const ctx = gsap.context(() => {
      // --- 3. Usamos ScrollTrigger.matchMedia para animaciones responsive ---
      ScrollTrigger.matchMedia({
        // --- Configuración Mobile (Arriba y Abajo) ---
        "(max-width: 767px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: gateContainerRef.current,
              start: "top top",
              end: "+=1500", // Misma duración de scroll
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          // Animación vertical para mobile
          tl.to(gateOne, {
            yPercent: -100, // Mover hacia ARRIBA
            ease: "none",
          }).to(
            gateTwo,
            {
              yPercent: 100, // Mover hacia ABAJO
              ease: "none",
            },
            "<"
          );
        },

        // --- Configuración Desktop (Izquierda y Derecha) ---
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: gateContainerRef.current,
              start: "top top",
              end: "+=1500",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          // Animación horizontal para desktop (la que tenías)
          tl.to(gateOne, {
            xPercent: -100, // Mover a la IZQUIERDA
            ease: "none",
          }).to(
            gateTwo,
            {
              xPercent: 100, // Mover a la DERECHA
              ease: "none",
            },
            "<"
          );
        },
      }); // Fin de matchMedia
    }, gateContainerRef); // 'scope' del contexto de GSAP

    return () => ctx.revert(); // Limpieza
  }, []);

  return (
    <Section
      ref={gateContainerRef}
      id="gate-section"
      // Importante: overflow-hidden para que las compuertas no generen scroll
      className="bg-gray-900 overflow-hidden"
    >
      {/* 1. Contenido que se revela (detrás de las puertas) */}
      <div className="max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-white text-center p-8 z-0">
        <h2 className="text-5xl font-bold mb-4">¡Contenido Revelado!</h2>
        <p className="text-xl">
          Esta es la sección que estaba oculta detrás de las compuertas. El
          scroll estuvo controlando la animación de apertura.
        </p>
      </div>

      {/* 2. Las Compuertas (encima de todo) */}

      {/* Compuerta Uno (Arriba / Izquierda) */}
      <div
        ref={gateOneRef}
        className="absolute top-0 left-0 z-10 flex justify-center items-center bg-[url('/src/assets/Top-door.webp')] bg-cover bg-center w-full h-[50.1%] md:bg-[url('/src/assets/Left-door.webp')] md:w-[50.1%] md:h-full md:bg-right"
      >
        <h2 className="text-6xl w-full h-full items-end justify-center flex md:items-center md:justify-end p-2 font-bold text-white">
          Sobre
        </h2>
      </div>

      {/* Compuerta Dos (Abajo / Derecha) */}
      <div
        ref={gateTwoRef}
        className="absolute bottom-0 left-0 z-10 flex justify-center items-center bg-[url('/src/assets/Down-door.webp')] bg-cover bg-center w-full h-[50.1%] md:bg-[url('/src/assets/Right-door.webp')] md:top-0 md:right-0 md:bottom-auto md:left-auto md:w-[50.1%] md:h-full "
      >
        <h2 className="text-6xl w-full h-full flex justify-center md:items-center md:justify-start p-2 font-bold text-white">
          Nosotros
        </h2>
      </div>
    </Section>
  );
};

export default AboutUsSection;
