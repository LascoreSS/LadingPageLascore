import "./App.css";
import Section from "./components/sectionComponent/Section";

/* Crema Latte,Primario Claro (Fondo),#F5E0DC
Marrón Mocha,Primario Oscuro (Texto),#573C33
Marrón Suave,Secundario (Bordes/Íconos),#79594F
Verde Menta,Acento (Éxito),#A6D189
Naranja Mango,Acento (Alerta),#EED49F
Rojo Pastel,Acento (Error),#E78284
Azul Glaciar,Acento (Información/Enlaces),#8AADF4
Rosa Pálido,Detalle/Resaltado,#F4B8E4 */

function App() {
  return (
    <>
      <Section id="home">
        <div className="max-w-7xl">
          <h2 className="text-[#584738] font-bold text-6xl">Lascore</h2>
          <p className="text-[#302f2c] font-semibold text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non harum
            inventore velit officiis dolor quisquam at tempora quidem,
            voluptatibus repellat?
          </p>
        </div>
      </Section>
    </>
  );
}

export default App;
