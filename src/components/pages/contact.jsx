import ContactForm from "../main/contactform";
import Landing from "../main/landing";
import Footer from "../navbar-footer/footer";
import HomeButton from "../main/home-button";
import { useState, useEffect } from "react";

const Contact = () => {
    const [transition, setTransition] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTransition(true)
        }, 1)
    }, [])

    return (
        <div>  
            <HomeButton />
            <div className={transition? "comingSoon-cover": null}></div>
            <Landing />
            <Footer foot='foote' />
            <div className="contact-container">
                <div className="contact-title">
                    <h3>Hey, we are still in the works,</h3>
                    <h3>but you can send us a message!</h3>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;