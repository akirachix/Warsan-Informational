import React from "react";
import './style.css'
const About = () =>{
    return (
        <div>
            <h1>ABOUT US</h1>
        <div className="about" >
            <div className="aboutcards" data-testid="about-card1"> 
            <h1 className="h1text">Vision</h1>
            <p>
                Our vision is to enable NGOs to increase <br />
                immunization coverage in Somalia for <br />
                children under the age of 5 years.
            </p>
            </div>
            <div className="aboutcards" data-testid="about-card2">
                <h1 className="h1text">Mission</h1>
                <p>
                To shape a resilient generation that's  <br />
                safeguarded against preventable diseases <br />
                and equipped for a brighter future.
                </p>
            </div>
            </div>
        </div>
    )
}
export default About;