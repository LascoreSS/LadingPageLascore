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
    const menu = menuRef.current;

    if (!menu) return;

    if (isMenuOpen) {
      gsap.killTweensOf(menu);
      gsap.set(menu, { y: "-100%", opacity: 0, display: "flex" });
      gsap.to(menu, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
      });
    } else {
      gsap.killTweensOf(menu);
      gsap.to(menu, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 bg-[#2f2f2f]">
      <div className="flex p-5 items-center gap-5">
        <h2 className="grow-1 flex ">Lascore</h2>
        <button
          onClick={() => handlerBurgerMenuButton(true)}
          className=" md:hidden"
        >
          <MdMenu />
        </button>
      </div>

      <div
        ref={menuRef}
        className="fixed inset-0 flex flex-col gap-5 p-5 w-screen h-screen bg-[#2f2f2f] font-bold md:hidden hidden"
      >
        <div className="w-full flex justify-end" id="menu-bar-options">
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
