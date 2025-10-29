import React from "react";
import { MdOutlineKeyboardArrowRight, MdClose, MdMenu } from "react-icons/md";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const links = ["Inicio", "Quienes Somos", "Proyectos", "Contactanos"];
  const [isMenuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [linkHovered, setLinkHovered] = React.useState<number>();
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  const handlerBurgerMenuButton = (isOpen: boolean) => {
    setMenuOpen(isOpen);
  };

  const handlerLinkHovered = (indexOfLink: number) => {
    setLinkHovered(indexOfLink);
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  React.useEffect(() => {
    const menu = menuRef.current;

    if (!menu) return;

    if (isMenuOpen) {
      gsap.killTweensOf(menu);
      gsap.set(menu, { y: "-100%", opacity: 0, display: "flex" });
      gsap.to(menu, {
        y: "0%",
        opacity: 1,
        duration: 0.45,
        ease: "power4.out",
      });
    } else {
      gsap.killTweensOf(menu);
      gsap.to(menu, {
        y: "-100%",
        opacity: 0,
        duration: 0.45,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 bg-[#2f2f2f] text-white z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4 md:px-8">

        {/* logo */}
        <h2 className="text-xl font-semibold tracking-wide select-none">
          Lascore
        </h2>

        {/* Menú desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase">
          {links.map((link, i) => (
            <a
              key={i}
              href="#"
              onMouseEnter={() => handlerLinkHovered(i)}
              onMouseLeave={() => handlerLinkHovered(10)}
              className="relative transition-all duration-200 ease-in-out hover:text-gray-300"
            >
              {link}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-200 ease-in-out ${
                  linkHovered === i ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Burger menu button */}
        <button
          onClick={() => handlerBurgerMenuButton(true)}
          className="md:hidden text-2xl"
        >
          <MdMenu className="cursor-pointer"/>
        </button>
      </div>

      {/* mobile menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 flex flex-col gap-5 p-5 w-screen h-screen bg-[#2f2f2f] font-bold md:hidden ${isMenuOpen ? "" : "hidden"}`}
      >
        <div className="w-full flex justify-end">
          <button
            onClick={() => handlerBurgerMenuButton(false)}
            className="cursor-pointer text-2xl transition duration-100 ease-in-out relative active:scale-85"
          >
            <MdClose />
          </button>
        </div>

        <ul className="text-2xl leading-10 uppercase">
          {links.map((link, i) => (
            <div
              key={i}
              onMouseEnter={() => handlerLinkHovered(i)}
              onMouseLeave={() => handlerLinkHovered(10)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p>{link}</p>
              <span
                className={`${
                  linkHovered === i ? "opacity-100 translate-x-2" : "opacity-0"
                } items-center flex transition delay-50 duration-100 ease-in-out relative`}
              >
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
