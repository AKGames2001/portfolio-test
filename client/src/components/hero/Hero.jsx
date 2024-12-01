import React from "react";
// import HeroImage from "../../assets/images/self-image.png";
import HeroImage from "../../assets/images/temp-self.jpg";

function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h3>Hey I'm,</h3>
                <h1>Nimish Pachhapurkar</h1>
                <p>R & D Engineer & Mechanical at heart</p>
            </div>
            <div className="hero-image">
                <img src={HeroImage} alt="/" />
            </div>
        </div>
    )
}

export default Hero;