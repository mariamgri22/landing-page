import React from "react";
import outlinePrice from "../../assets/outlinePrice.png";
import "./style.scss";
import done from "../../assets/done.svg";
import { AnimateOnScroll } from "animate-on-scroll-framer";

export default function Price() {
  return (
    <div className="prices">
      <AnimateOnScroll duration={1} animation="flipIn">
        <h3>
          Benefit both ways - <span>monthly</span> or <span>yearly</span>{" "}
        </h3>
      </AnimateOnScroll>
      <AnimateOnScroll duration={1} delay={1} animation="flipIn">
        <div className="price">
          <div className="priceMonth">
            <div className="benefits">
              <img className="outlinePrc" src={outlinePrice} alt="" />
              <div className="fifty">50%</div>
            </div>
            <div className="table">
              <h2>Monthly</h2>
              <div className="allPr">
                {" "}
                <h4 className="oldPrice">
                  $4.99<div className="line"></div>
                </h4>
                <h1 className="price">$2.49</h1>
              </div>
              <h3>peruser/month</h3>
              <ul>
                <li>
                  {" "}
                  <img src={done} alt="" /> 14 day Free Trial
                </li>
                <li>
                  {" "}
                  <img src={done} alt="" /> Access to All
                </li>
                <li>
                  {" "}
                  <img src={done} alt="" /> Features 24/7 Support
                </li>
              </ul>
              <button>Get your deal</button>
            </div>
            <div className="gradientBlue"></div>
          </div>
          <div className="priceMonth">
            <div className="benefits">
              <img className="outlinePrc" src={outlinePrice} alt="" />
              <div className="fifty">50%</div>
            </div>
            <div className="table">
              <h2>Yearly</h2>
              <div className="allPr">
                {" "}
                <div className="line"></div>
                <h4 className="oldPrice">
                  $4.99
                  <div className="line"></div>
                </h4>
                <h1 className="price">$2.05</h1>
              </div>
              <h3>peruser/month</h3>
              <ul>
                <li>
                  <img src={done} alt="" /> 14 day Free Trial
                </li>
                <li>
                  <img src={done} alt="" /> Access to All
                </li>
                <li>
                  {" "}
                  <img src={done} alt="" /> Features 24/7 Support
                </li>
              </ul>
              <button>Get your deal</button>
            </div>
            <div className="gradientPink"></div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
