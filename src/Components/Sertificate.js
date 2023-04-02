import React from "react";
import pic1 from './assets/Rectangle 396.png'
import pic2 from './assets/Rectangle 397.png'
import pic3 from './assets/Peoples/Rectangle 393.png'
import fingerprintLeft from './assets/pngwing 2.png'
import sert from './assets/sert.png' 
import ellipseLeft from './assets/Ellipse60.png'
import './Css/Sertificate.css'


export default function Sertificate() {
  return (
    <>
      <h1 className="sertificateH1">СЕРТИФИКАТЫ</h1>
      <div className="Sertificate">
        <div className="imageCardSertificate">
          <img src={pic1} />
        </div>
        <div className="imageCardSertificate">
          <img src={pic2} />
        </div>
        <div className="imageCardSertificate">
          <img src={pic3} />
        </div>
      </div>
      <hr className="oneLine" />
      <div className="imgSert">
        <img src={sert}/>
        <img src={fingerprintLeft}/>
      </div>
      <img className="ellipseSert" src={ellipseLeft}/>
    </>
  );
}
