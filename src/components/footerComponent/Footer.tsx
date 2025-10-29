import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2f2f2f] text-white p-5 text-center">
      <p>&copy; 2025 Lascore. </p>
      <p>Todos los derechos reservados.</p>
      <a
        href="https//github.com/LascoreSS"
        target="_blank"
        className="flex items-center justify-center gap-2 mt-2 hover:underline"
      >
        <AiFillGithub size={24} />
        Visita nuestro GitHub
      </a>
    </footer>
  );
}

export default Footer;