import DateTimeDisplay from "./dateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <DateTimeDisplay value={minutes} type={'Minutes'} isDanger={false} />
          <DateTimeDisplay value={seconds} type={'Second'} isDanger={false} />
      </div>
    );
  };

  export default ShowCounter;