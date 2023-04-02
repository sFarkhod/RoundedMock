import React from "react";
import "./Css/Partner.css";
import pic1 from "./assets/Peoples/Rectangle 392.png";
import pic2 from "./assets/Peoples/Rectangle 393.png";
import pic3 from "./assets/Peoples/Rectangle 394.png";
import pic4 from "./assets/Peoples/Rectangle 395.png";
import ellipseRight from  './assets/Ellipse64.png'
import fingerprintRight from './assets/pngwing 2.png'

export default function Partener() {
  return (
    <>
      <h1 className="partnerH1">НАСТАВНИКИ</h1>
      <div className="Partner">
        <div className="imageCard">
          <img src={pic2} />
          <h4>Алина</h4>
        </div>
        <div className="imageCard">
          <img src={pic1} />
          <h4 style={{ color: "#F1023D" }}>Мадина</h4>
        </div>
        <div className="imageCard">
          <img src={pic3} />
          <h4>Арина</h4>
        </div>
        <div className="imageCard">
          <img src={pic4} />
          <h4 style={{ color: "#F1023D" }}>Андрей</h4>
        </div>
      </div>
      <hr className="twoLine" />
      <div className="PartnerInfo">
        <div className="amount">
          <h3>60 000</h3>
          <h4>Lorem ipsum dolor <br/> sit amet</h4>
        </div>
        <div className="amount">
          <h3>150+</h3>
          <h4>Lorem ipsum dolor <br/> sit amet</h4>
        </div>
        <div className="amount">
          <h3>183 000</h3>
          <h4>Lorem ipsum dolor <br/> sit amet</h4>
        </div>
      </div>
        
        <img className="fingerprintPartner" src={fingerprintRight}/>
        <img className="ellipsePartner" src={ellipseRight}/>

    </>
  );
}
