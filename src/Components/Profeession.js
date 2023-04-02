import React from "react";
import "./Css/Profession.css";
import ellipseBG from "./assets/Ellipse63.png";
import icon1 from "./assets/Icons/microscope.png";
import icon2 from "./assets/Icons/users.png";
import icon3 from "./assets/Icons/wallet.png";
import icon4 from "./assets/Icons/graduation-cap.png";
import rightEllipse from './assets/Ellipse64.png'

export default function Profeession() {
  return (
    <>
      <div className="bgProf">
        <div className="flexIcon">
          <div className="iconProf">
            <div className="imgProf">
              <img src={ellipseBG} />
              <img src={icon1} />
            </div>
            <div style={{ width: "200px", marginLeft:"23px"}}>
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>
          </div>
          <div className="iconProf">
            <div className="imgProf">
              <img src={ellipseBG} style={{ marginLeft: "33px" }} />
              <img src={icon2} style={{ marginLeft: "29px" }} />
            </div>
            <div style={{ width: "200px", marginLeft:"75px" }}>
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>{" "}
          </div>
          <div className="iconProf">
            <div className="imgProf">
              <img src={ellipseBG} style={{ marginLeft: "25px" }} />
              <img src={icon3} style={{ marginLeft: "13px" }} />
            </div>
            <div style={{ width: "200px", marginLeft:"65px" }}>
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>{" "}
          </div>
          <div className="iconProf">
            <div className="imgProf">
              <img src={ellipseBG} style={{ marginLeft: "28px" }} />
              <img src={icon4} style={{ marginLeft: "20px" }} />
            </div>
            <div style={{ width: "200px", marginLeft:"65px" }}>
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="rightEllipse">
        <img src={rightEllipse}/>
      </div>
    </>
  );
}
