import { useRef } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import "./App.css"; 

const App = () => {
  // Створюємо референси для кожної секції
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  // Об'єкт для зручного доступу до секцій
  const sections = {
    gallery: galleryRef,
    services: servicesRef,
    team: teamRef,
    contact: contactRef,
  };

  // Функція для прокручування до відповідної секції
  const scrollToSection = (section) => {
    const ref = sections[section]?.current;
    if (ref) {
      const header = document.querySelector("header"); // Отримуємо висоту Header
      const headerHeight = header ? header.offsetHeight : 0;
      const yOffset = -headerHeight - 20; // Відступ, щоб секція не впиралася в Header

      const y = ref.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Передаємо функцію scrollToSection у Header */}
      <Header scrollToSection={scrollToSection} />

      <main className="content">
        {/* Кожній секції додаємо ref */}
        <section ref={galleryRef} id="gallery" className="section">
          <Gallery />
        </section>
        <section ref={servicesRef} id="services" className="section">
          <Services />
        </section>
        <section ref={teamRef} id="team" className="section">
          <Team />
        </section>
        <section ref={contactRef} id="contact" className="section">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
