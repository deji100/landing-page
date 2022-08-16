import CountDownTimer from "./countDownTimer";

const CountDown = () => {
    
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

  return (
    <div>
      <CountDownTimer targetDate={dateTimeAfterSevenDays} />
    </div>
    )
}

export default CountDown;