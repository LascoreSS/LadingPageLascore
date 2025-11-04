import "./App.css";
import Footer from "./components/footerComponent/Footer";
import Header from "./components/headerComponent/Header";
import HeroSection from "./sections/heroSection/HeroSection";
import { TestimonialsCarousel } from "./sections/quotesSection/TestimonialsCarousel";

function App() {
  return (
    <>
      <Header />
      <HeroSection></HeroSection>
      <TestimonialsCarousel />
      <Footer />
    </>
  );
}

export default App;
