const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className="counter">
        <p style={{fontWeight: '700', fontSize: '2rem'}}>{value}</p>
        <span>{type}</span>
      </div>
    );
  };
  
  export default DateTimeDisplay;