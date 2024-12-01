import React from "react";
import { Link } from "react-router";

function AboutMe() {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat dolorem molestias omnis, sit quasi ab facilis. Quis beatae explicabo, maiores veniam alias deserunt enim fugiat dolores accusamus, qui ipsa.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quaerat animi quae, voluptas tenetur voluptatum beatae sed dicta doloribus quia dolorem explicabo velit dolorum iste esse, inventore, qui possimus quos.</p>
            <Link>View Full Resume</Link>
        </div>
    )
}

export default AboutMe;