import { useEffect } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ scrollToSection }) => {
  const handleLogoClick = (e) => {
    e.preventDefault(); // Блокуємо стандартну поведінку посилання
    // Прокручуємо сторінку до верху при натисканні на лого
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Прокручуємо сторінку до верху при першому завантаженні
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src="/logo.svg" alt="logo" />
      </div>
      <nav>
        <ul className="nav__menu">
          <li>
            <a href="#gallery" onClick={() => scrollToSection("gallery")}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection("services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => scrollToSection("team")}>
              Team
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Додаємо перевірку типів пропсів
Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Header;
