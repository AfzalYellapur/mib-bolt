import { useState, useEffect } from "react";
import { events } from "./data/events";
import { upcomingevents } from "./data/events";
import EventCard from "./components/EventCard";
import Header from "./components/Header";
import { Header2 } from "./components/Header";
import "./CSS/animations.css";
import "./CSS/event.css";

function EventPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [animatedCards, setAnimatedCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      animateCards();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const animateCards = () => {
    events.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedCards((prev) => [...prev, index]);
      }, index * 200);
    });
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className={`intro-overlay ${!showIntro ? "fade-out" : ""}`}>
        <h1 className="intro-title">MiB Events</h1>
      </div>

      <div className="app">
        {/* ````````````````````````````````````````````````````````````````events```````````````````````````````````` */}
        <Header />
        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={animatedCards.includes(index) ? "card-enter" : ""}
              style={{ opacity: animatedCards.includes(index) ? 1 : 0 }}
            >
              <EventCard
                event={event}
                onClick={() => handleEventClick(event)}
              />
            </div>
          ))}
        </div>

        {/* ````````````````````````````````````````````````````````````````upcoming events```````````````````````````````````` */}
        <Header2 />

        <div className="events-grid">
          {upcomingevents.map((event, index) => (
            <div
              key={event.id}
              className={animatedCards.includes(index) ? "card-enter" : ""}
              style={{ opacity: animatedCards.includes(index) ? 1 : 0 }}
            >
              <EventCard
                event={event}
                onClick={() => handleEventClick(event)}
              />
            </div>
          ))}
        </div>
        {/* ````````````````````````````````````````````````````````````````card logic```````````````````````````````````` */}
        <div
          className={`modal-overlay ${selectedEvent ? "active" : ""}`}
          onClick={closeModal}
        >
          {selectedEvent && (
            <div
              className="modal-content modal-animate"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="modal-image"
              />
              <h2 className="modal-title">{selectedEvent.title}</h2>
              <p className="modal-date">{selectedEvent.date}</p>
              <p className="modal-description">{selectedEvent.fullDesc}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EventPage;
