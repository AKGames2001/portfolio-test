import React from "react";
import contactImage from "../../assets/images/temp-self.jpg";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-left">
                <img src={contactImage} alt="/" />
            </div>
            <div className="contact-right">
                <h1>Contact</h1>
                <div className="contact-detail">
                    <p>Email: abc@email.com</p>
                    <p>Phone: +91-3254879895</p>
                </div>
                <div className="contact-icons">
                    <i class='bx bxl-linkedin' ></i>
                    <i class='bx bxl-github' ></i>
                    <i class='bx bx-envelope' ></i>
                </div>
            </div>
        </div>
    )
}

export default Contact;