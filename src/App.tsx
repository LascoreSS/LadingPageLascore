import "./App.css";
import Footer from "./components/footerComponent/Footer";
import Header from "./components/headerComponent/Header";
import Section from "./components/sectionComponent/Section";
import { TestimonialsCarousel } from "./sections/quotesSection/TestimonialsCarousel";

function App() {
  return (
    <>
      <Header />
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
      <TestimonialsCarousel />
      <Footer />
    </>
  );
}

export default App;
