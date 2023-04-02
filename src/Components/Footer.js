import React from "react";
import "./Css/Footer.css";
import logo from "./assets/brainhigh.png";
import vector from "./assets/Vector.png";
import logo1 from './assets/icon-social/Frame 163.png'
import logo2 from './assets/icon-social/Frame 164.png'
import logo3 from './assets/icon-social/Frame 165.png'
import logo4 from './assets/icon-social/Frame 166.png'


export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="logoandtext">
          <div className="logoo">
            <img src={logo} />
            <div className="textFo">
              <h3>АКАДЕМИЯ ИСКУССТВА ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ</h3>
              <h4>ТИМУРА АРИПОВА</h4>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipis <br /> cing elit.
              Amet, vestibulum euismod nullam the <br /> elementum. Urna,
              posuere nisi sit gravid.
            </h4>
          </div>
        </div>
        <div className="rowChange">
          <div className="navbarFoo">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>About Us</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>Graduation</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>Scholarship</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>Admissions</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>International</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>Events</h4>
            </div>
          </div>
        </div>


        <div className="rowChange navbarTer">
          <div className="navbarFoo">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>Language</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>WordPress</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>Privacy</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>FAQs</h4>
            </div>
          </div>
          <div className="navbarFoo rowChange">
            <div className="imgtextFoo">
              <img src={vector} />
              <h4>Support</h4>
            </div>
          </div>
        </div>

        <div className="zvonki">
            <h4>Звонок по Узбекистану бесплатный</h4>
            <h5>+998 (99) 99-99-99</h5>
            <button>Перезвоните нам</button>
            <div className="iconSocial">
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
            </div>
        </div>

      </footer>
    </>
  );
}
