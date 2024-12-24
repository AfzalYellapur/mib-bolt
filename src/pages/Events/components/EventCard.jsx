function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={onClick}>
      <img src={event.image} alt={event.title} />
      <div className="event-content">
        <h2>{event.title}</h2>
        <p className="date">{event.date}</p>
        <p className="short-desc">{event.shortDesc}</p>
      </div>
    </div>
  );
}

export default EventCard;