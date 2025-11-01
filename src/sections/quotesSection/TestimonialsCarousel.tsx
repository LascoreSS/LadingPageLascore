import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaQuoteLeft } from "react-icons/fa";
import Section from "../../components/sectionComponent/Section";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "María López",
    role: "Gerente de E-commerce",
    text: "El equipo de Lascore superó nuestras expectativas con un diseño optimizado y tiempos de carga excelentes. Un socio confiable para escalar nuestro negocio online.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Julián Pérez",
    role: "Fundador de TiendaNova",
    text: "Nos ayudaron a automatizar procesos clave y mejorar la conversión del sitio. Excelente atención y soporte post-lanzamiento.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Camila Díaz",
    role: "CMO en Trendify",
    text: "Profesionales, rápidos y con gran sentido estético. El resultado final reflejó exactamente lo que buscábamos.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Andrés Gómez",
    role: "Director de Marketing en ShopEase",
    text: "La colaboración con Lascore fue fluida y productiva. Su experiencia en UX/UI realmente marcó la diferencia en nuestro sitio web.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Sofía Ramírez",
    role: "CEO de BuySmart",
    text: "Gracias a Lascore, nuestro sitio web ahora es más atractivo y funcional. Hemos visto un aumento significativo en las ventas desde el relanzamiento.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Diego Fernández",
    role: "CTO en MarketPlus",
    text: "El equipo de Lascore demostró gran profesionalismo y conocimiento técnico. La integración con nuestras plataformas existentes fue impecable.",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  }
];

export const TestimonialsCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const items = track.children;
      const itemWidth = items[0].clientWidth + 48;
      const totalItems = items.length;

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: `-=${itemWidth * totalItems / 2}`,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (itemWidth * totalItems / 2)),
        },
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-10">
        Lo que dicen nuestros clientes
      </h2>
      <div className="carousel-container flex items-center overflow-hidden h-[260px] w-4/5 relative">
        <div ref={trackRef} className="carousel-track flex w-max h-full">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center mr-6 ml-6 flex-none h-full justify-center w-1/6 md:w-1/6"
            >
              <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
              <p className="text-gray-700 italic mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
