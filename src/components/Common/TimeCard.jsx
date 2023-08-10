function TimeCard({ title, time }) {
  return (
    <div className="time-card">
      {/* <hr /> */}
      <span className="title">{title}</span>
      {/* <br /> */}
      <span className="time">{time > 9 ? time : `0${time}`}</span>
    </div>
  );
}

export default TimeCard;
