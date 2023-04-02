import React from "react";
import fingerprint from "./assets/fingerprints.png";
import shadowYellow from './assets/Ellipse60.png'
import roundYellow from './assets/Ellipse63.png'
import eclipse75 from "./assets/Ellipse75.png";
import arrow from './assets/Arrow.png'
import { Typewriter } from "react-simple-typewriter";
import './Css/Home.css'

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="image">
          <img src={fingerprint} />
          <div className="blackShadow"></div>
        </div>
        <div className="about-rounded">
          <div className="h1sDiv">
            <h1>
                Lorem ipsum dolor sit amet
              {/* <Typewriter
                words={["Lorem ipsum dolor sit amet"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /> */}
            </h1>
            <img src={eclipse75} />
          </div>
          <div className="h3sDiv">
            <img src={arrow} />
            <h3>
              Lorem ipsum dolor sit amet consectetur. Tincidunt aliquet dictum
              sodales bibendum etiam viverra mollis amet. Urna sed molestie
              auctor nisi.
            </h3>
          </div>
          <div className="btns">
            <button>Lorem ipsum dolor</button>
            <button>Lorem ipsum dolor</button>
          </div>
        </div>
        <div className="bgEffect">
        {/* <img src={roundYellow}/> */}
        <img src={shadowYellow}/>
      </div>
      </div>
    </>
  );
}
