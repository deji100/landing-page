import CountDown from "../countDownComp/countDown";
import Title from "./title";
import Description from "./description";
import Forms from "./forms";
import Bubble from "./bubbles";

const Landing = () => {
    return (
        <div className="main">
            <Title />
            <Description />
            <Bubble bub="one" />
            <Bubble bub="two" />
            <Bubble bub="three"/>
            <CountDown />
            <Forms />
        </div>
    )
}

export default Landing;