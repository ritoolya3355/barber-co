import { useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    // Додаємо клас "show" після завантаження компонента для анімації
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 200); // Додаємо затримку для кожного елемента
    });
  }, []);

  return (
    <div className="gallery-section">
      <div className="gallery-item gallery-item-left">
        <img src="/gallery/gallery1.png" alt="Gallery 1" />
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/gallery/gallery3.png" alt="Gallery 3" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/gallery4.png" alt="Gallery 4" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/gallery5.png" alt="Gallery 5" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/gallery6.png" alt="Gallery 6" />
        </div>
      </div>
      <div className="gallery-item gallery-item-right">
        <img src="/gallery/gallery2.png" alt="Gallery 2" />
      </div>
    </div>
  );
};

export default Gallery;
