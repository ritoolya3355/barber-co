import { useState, useEffect } from "react";
import "./Services.css";

const fetchServicesData = async () => {
  const response = await fetch("/data/services.json");
  const data = await response.json();
  return data;
};

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const getServicesData = async () => {
      const data = await fetchServicesData();
      setServicesData(data);
    };
    getServicesData();
  }, []);

  return (
    <div className="services-section">
      <div className="services-container">
        {/* Блок із сервісами */}
        <div className="services-left">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-item rotate-${index}`}
              onClick={() => setSelectedService(service)}
            >
              <img src={service.image} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>

        {/* Фото праворуч */}
        <img
          className="services-right"
          src="/services/services-right.png"
          alt="Services"
        />
      </div>

      {/* Модальне вікно */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           <div className="modal-img"><img src={selectedService.image} alt={selectedService.name} /></div> 
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
            <button onClick={() => setSelectedService(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
