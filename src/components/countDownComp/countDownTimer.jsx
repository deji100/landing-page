import { useCountdown } from "../hooks/useCountdown";
import ExpiredNotice from "./expiredNotice";
import ShowCounter from "./showCounter"

const CountDownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    }else {
        return (
            <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            />
        )
    }
}

export default CountDownTimer;