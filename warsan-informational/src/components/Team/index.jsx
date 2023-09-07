import React from "react";
import './style.css'
const Team = ()=>{
    return (
        <>
        <h1>OUR TEAM</h1><br></br>
        <div className="team-container">
          <div className="team-member" data-testid = "Aniso" >
            <img src={process.env.PUBLIC_URL + '/images/aniso.jpg'} alt="Aniso" />
            <p>Aniso Mohamed Kilas <br></br>Frontend Developer</p>
          </div>
          <div className="team-member" data-testid = "Eunice">
            <img src={process.env.PUBLIC_URL + '/images/eunice .jpg'} alt="Eunice" />
            <p>Eunice Musenyia <br></br> Full Stack Developer</p>
          </div>
          <div className="team-member" data-testid = "Susan">
            <img src={process.env.PUBLIC_URL + '/images/susan.jpg'} alt="Susan" />
            <p>Susan Maina <br></br>Software Developer</p>
          </div>
          <div className="team-member" data-testid = "Clever">
            <img src={process.env.PUBLIC_URL + '/images/clever.jpg'} alt="Clever" />
            <p>Clever Kayitaramirwa<br></br>Full Stack Developer</p>
          </div>
          <div className="team-member" data-testid = "Joy">
            <img src={process.env.PUBLIC_URL + '/images/joy.jpg'} alt="Joy" />
            <p>Joy Mitingi<br></br>Mobile Developer</p>
          </div>
        </div>
        </>
      );
    }
export default Team;