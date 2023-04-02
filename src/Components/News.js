import React from "react";
import pic1 from "./assets/Rectangle 398.png";
import pic2 from "./assets/Rectangle 399.png";
import fingerprintLeft from "./assets/pngwing 5.png"
import newsImg from './assets/news.png'
import './Css/News.css'

export default function News() {
  return (
    <>
      <h1 className="NewsH1">НОВОСТИ</h1>
      <div className="News">
        <div className="NewsImage">
          <img src={pic1} />
          <img src={pic2} />
        </div>
        <h4>
          Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
          pellentesque volutpat et vitae. Consequat felis ut in pellentesque
          feugiat malesuada varius. Aliquam egestas orci dui est eu. <br/> Commodo
          lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi.
          <br/>Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst
          ullamcorper nulla.
        </h4>
      </div>
      <div className="imgsNews">
        <img src={newsImg}/>
        <img src={fingerprintLeft}/>
      </div>
    </>
  );
}
