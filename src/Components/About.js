import React from "react";
import people from "./assets/people_hand.png";
import aboutus from "./assets/abutus.png";
import fingerBg from './assets/pngwing 2.png'
import "./Css/About.css";

export default function About() {
  return (
    <>
      <div className="AboutPage">
        <div className="textAbout">
          <h2>О НАС</h2>
          <div>
            <h4>
              Lorem ipsum dolor sit amet consectetur. Urna <br /> semper urna
              viverra pellentesque volutpat et vitae. Consequat felis ut in
              pellentesque feugiat <br /> malesuada varius. Aliquam egestas orci
              dui est eu. Commodo lobortis dolor volutpat enim. Tempor <br />{" "}
              interdum aliquet at lorem nisi. Amet nec vel donec aliquet rhoncus
              faucibus. Bibendum dictumst ullamcorper nulla.
            </h4>
          </div>
        </div>
        <div className="imagesAbout">
          <img src={people} />
          <img src={aboutus} />
          <div className="imageText"></div>
        </div>
      </div>
      <div className="bgEffectFinger">
            <img src={fingerBg}/>
        </div>
    </>
  );
}
