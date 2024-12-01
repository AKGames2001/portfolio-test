import React from "react";
import MacS2Prototype from "../../assets/images/mac-s2-prototype.png";
import Rendering from "../../assets/images/rendering.png";
import ThrusterInAction from "../../assets/images/thruster-in-action.png";
// import SampleImage from "../../assets/images/self-image.png";

function Projects() {
    return (
        <div className="home-projects">
            <div className="container">
                <h1>Projects</h1>
                <div className="home-project-grid">
                    <div className="grid-display-format-1">
                        <div className="image">
                            <img src={MacS2Prototype} alt="/" />
                        </div>
                        <div className="image">
                            <img src={Rendering} alt="/" />
                        </div>
                        <div className="image">
                            <img src={ThrusterInAction} alt="/" />
                        </div>
                        {/* <img src={Rendering} alt="/" />
                    <img src={ThrusterInAction} alt="/" /> */}
                    </div>
                    <div className="grid-display-format-2">
                        <div className="image">
                            <img src={ThrusterInAction} alt="/" />
                        </div>
                        <div className="image">
                            <img src={Rendering} alt="/" />
                        </div>
                        <div className="image">
                            <img src={MacS2Prototype} alt="/" />
                        </div>
                        {/* <img src={ThrusterInAction} alt="/" />
                    <img src={MacS2Prototype} alt="/" />
                    <img src={Rendering} alt="/" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;