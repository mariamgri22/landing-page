import React from "react";
import getapp from "../../assets/get-app.svg";
import capterra from "../../assets/capterra.svg";
import crowd from "../../assets/crowd.svg";
import completed from "../../assets/completed.svg";
import star from "../../assets/star.svg";
import off from "../../assets/off.png";
import outline from "../../assets/outline.png";
import "./style.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home1">
        <div className="text">
          <div className="textArea">
            <div className="t1">
              <h1>Cyber Monday</h1>
              <h2>means </h2>
            </div>
            <div className="t1">
              <h2> an even</h2>
              <h1> Bigger Sale</h1>
            </div>
          </div>
          <h3>
            Cyber Monday saves you money, <br />
            WebWork saves you time.
          </h3>

          <button>
            <div className="h4">SAVE BIG NOW</div>{" "}
          </button>
          <div className="time">
            <img className="completed" src={completed} alt="clock" />
            <h3 className="freeTrial">
              14-day free trial
              <div className="line"> </div> No credit card required
            </h3>
          </div>
          <div className="review">
            <div className="rating stats">
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
            </div>
            <h3 className="str">
              Reviews from 51K+ happy users below and beyond
            </h3>
          </div>
          <div className="icons">
            <img src={capterra} alt="" />
            <img src={crowd} alt="" />
            <img src={getapp} alt="" />
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="offPic">
          <img className="off" src={off} alt="" />
          <img className="outline" src={outline} alt="" />
        </div>
      </div>
    </div>
  );
}
