import Bubble from "./bubbles";

const ContactForm = () => {
    return (
        <>
            <Bubble bub={"four"} />
            <div className="contact-form">
                <label htmlFor="first-name">First Name</label>
                <br />            
                <br />
                <input className="contact-input" type="text" placeholder="Enter Your First Name" id="first-name" />
                <br />            
                <br />
                <label htmlFor="last-name">Last Name</label>
                <br />            
                <br />
                <input className="contact-input" type="text" placeholder="Enter Your Last Name" id="last-name" />
                <br />            
                <br />
                <label htmlFor="email">Email Address</label>
                <br />            
                <br />
                <input className="contact-input" type="text" placeholder="Enter Your Emaii Address" id="email" />
                <br />            
                <br />
                <label htmlFor="textarea">Tell Us What You Need Help With</label>
                <br />            
                <br />
                <textarea className="contact-input" id="textarea" cols="30" rows="10" placeholder="Enter A Topic, Like 'Channel Problem.'"></textarea>
                <br />            
                <button>SEND NOW</button>
                <br />
                <br />
            </div>
        </>        
    )
}

export default ContactForm;