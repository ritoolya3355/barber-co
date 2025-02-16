import { useState, useEffect } from "react";
import "./Team.css";

const Team = () => {
  const [barbers, setBarbers] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointments, setAppointments] = useState(() => {
    return JSON.parse(localStorage.getItem("appointments")) || [];
  });
  const [message, setMessage] = useState(""); //  Додаємо повідомлення про запис
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/barbers.json")
      .then((response) => response.json())
      .then((data) => setBarbers(data))
      .catch((error) => console.error("Error loading barbers:", error));
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!date || !time) {
      setError("Please select a date and time");
      return;
    }

    const newAppointment = { barberId: selectedBarber.id, date, time };

    // Перевірка на зайнятість
    const isBooked = appointments.some(
      (appt) => appt.barberId === selectedBarber.id && appt.date === date && appt.time === time
    );

    if (isBooked) {
      setError("Selected date and time are already booked");
      return;
    }

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setMessage(`✅ You have successfully booked ${selectedBarber.name} on ${date} at ${time}.`);
    setError("");
    setSelectedBarber(null);
  };

  return (
    <div className="team-section">
      <h2 className="team-title">Meet Our Highly Skilled Experts</h2>
      <div className="team-container">
        {barbers.map((barber) => (
          <div key={barber.id} className="team-card" onClick={() => setSelectedBarber(barber)}>
            <div className="team-card-image">
              <img src={barber.image} alt={barber.name} />
            </div>
            <div className="team-card-button">{barber.name}</div>
          </div>
        ))}
      </div>

      {/* Повідомлення про успішний запис */}
      {message && <p className="success-message">{message}</p>}

      {/* Модальне вікно запису */}
      {selectedBarber && (
        <div className="modal-overlay" onClick={() => setSelectedBarber(null)}>
          <div className="modal-content-team" onClick={(e) => e.stopPropagation()}>
            <h2>Book an Appointment with {selectedBarber.name}</h2>
            <form onSubmit={handleBooking}>
              <label>
                Select Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </label>
              <label>
                Select Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
              </label>
              {error && <p className="error-message">{error}</p>}
              <button className="btn-team" type="submit">Confirm</button>
            </form>
            <button className="btn-team btn-flex-self" onClick={() => setSelectedBarber(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
