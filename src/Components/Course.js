import React from "react";
import pic1 from "./assets/Rectangle 389.png";
import pic2 from "./assets/Rectangle 390.png";
import pic3 from "./assets/Rectangle 391.png";
import arrow from "./assets/Arrow 5.png";
import ellipseCourse from "./assets/Ellipse63.png";
import fingerprintRight from './assets/pngwing 5.png'
import ellipseRight from "./assets/Ellipse60.png";
import "./Css/Course.css";

export default function Course() {
  return (
    <>
      <h1 className="courseName">КУРСЫ</h1>
      <img className="fingerprintRight" src={fingerprintRight}/>
      <img className="ellipseRight" src={ellipseRight}/>
      <div className="Course">
        <div className="cardCourse">
          <img src={pic1} />
          <div className="titleCourse">
            <h4>
              Lorem ipsum dolor <br /> sit amet
            </h4>
            <h3>
              20 <br /> марта
            </h3>
          </div>
          <div className="tekst">
            <h6>
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Amet donec rutrum habitasse eu interdum dignissim arcu.{" "}
            </h6>
          </div>
          <div className="imagesCourse">
            <img src={arrow} />
            <img src={ellipseCourse} />
          </div>
        </div>
        <div className="cardCourse">
          <img src={pic2} />
          <div className="titleCourse">
            <h4>
              Lorem ipsum dolor <br /> sit amet
            </h4>
            <h3>
              20 <br /> марта
            </h3>
          </div>
          <div className="tekst">
            <h6>
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Amet donec rutrum habitasse eu interdum dignissim arcu.{" "}
            </h6>
          </div>
          <div className="imagesCourse">
            <img src={arrow} />
            <img src={ellipseCourse} />
          </div>
        </div>
        <div className="cardCourse">
          <img src={pic3} />
          <div className="titleCourse">
            <h4>
              Lorem ipsum dolor <br /> sit amet
            </h4>
            <h3>
              20 <br /> марта
            </h3>
          </div>
          <div className="tekst">
            <h6>
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Amet donec rutrum habitasse eu interdum dignissim arcu.{" "}
            </h6>
          </div>
          <div className="imagesCourse">
            <img src={arrow} />
            <img src={ellipseCourse} />
          </div>
        </div>
      </div>
      <button className="allCource">ВСЕ КУРСЫ</button>
    </>
  );
}
