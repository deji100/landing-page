import Form from "./standardForm";
import EmailForm from "./emailform";

const Forms = () => {
    return (
        <div className="forms">
            <div className="standard">
                <Form label={"First Name.."} />
                <Form label={"Last Name.."} />
            </div>
            
            <div>
                <EmailForm />
            </div>
        </div>
    )
}

export default Forms;