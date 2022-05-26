import Box from "../main/box";
import Bubble from "../main/bubbles";
import Footer from "../navbar-footer/footer";
import dots from '../../media/dots.png'
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <Box num='Rone' />
            <Bubble bub='five' />
            <div className="about-cover1"></div>
            <div className="built-4-saas">
                <p>ABOUT US</p>
                <h1>Built for SaaS</h1>
                <h1>and E-commerce</h1>
                <div className="detail">Our tools are easy to set up and use with a user
                        friendly dashboard that enables you to set up,
                        launch, automate and manage multi-affiliate
                        campaigns in 5 minutes.
                </div>
            </div>
            <div className="value">
                <h2>Metricks was developed because just like you, we needed a product that could give us good value.</h2>
            </div>
            <div className="contents">
                <div className="section1">
                    <h3>WHY US?</h3>
                    <p>We pride ourselves in our ability to innovate and
                       create world-class tools that provide reliable and 
                       efficient touchpoints between advertisers and 
                       affiliates.
                    </p>
                    <div className="dots">
                        <img src={dots} alt="dots" />
                        <img src={dots} alt="dots" />
                    </div>
                </div>
                <div className="section2">
                    <Box num='Rtwo' />
                    <div className="about-cover2"></div>
                    <div className="grow">
                        <h3>GROWING WITH YOU</h3>
                        <p>Leveraging the best technology, we have developed an all-in-one
                           affiliate marketing tracking software, a genius tool to help
                           you track, automate and optimize your influencer campaigns,
                           all from one dashboard.
                        </p>
                        <p>Our team of experts are constantly brainstorming, testing and
                           developing neew solutions with only one thing in mind - your
                           business growth. Your success is our success and by giving you
                           the tools you need to scale, we grow as well.
                        </p>
                    </div>
                </div>
                <div className='question-about'>
                    <Box num='Rthree' />
                    <div className="about-cover3"></div>
                    <div className="question">
                    <h1>Got a Question?</h1>
                    <p>
                        See how Metricks can help your business grow with best affiliate marketing tracking software.
                    </p>
                    <NavLink className="link-about" to="/contact">Contact Us</NavLink>
                    </div>
                </div>
                <Footer foot='foot-about' />
            </div>
        </div>
    )
}

export default About;