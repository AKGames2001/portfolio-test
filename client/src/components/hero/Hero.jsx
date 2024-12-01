import React from "react";
import HeroImage from "../../assets/images/self-image.png";

function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <p>hi,</p>
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