import { AnimateOnScroll } from "animate-on-scroll-framer";
import React from "react";
import comp1 from "../../assets/comp1.png";
import comp2 from "../../assets/comp2.png";
import comp3 from "../../assets/comp3.png";
import comp4 from "../../assets/comp4.png";
import comp5 from "../../assets/comp5.png";
import comp6 from "../../assets/comp6.png";
import comp7 from "../../assets/comp7.png";
import comp8 from "../../assets/comp8.png";
import comp9 from "../../assets/comp9.png";
import "./style.scss";

export default function Company() {
  return (
    <div className="company">
      <div className="companies">
        <AnimateOnScroll duration={2} delay={1} animation="flipIn">
          <div className="cnt div">
            <div className="txt">Trusted by 1000+ Companies</div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll duration={2} delay={1} animation="flipIn">
          <div className="logo">
            <div>
              <img src={comp1} alt="" />
              <img src={comp2} alt="" />
              <img src={comp3} alt="" />
              <img src={comp4} alt="" />
              <img src={comp5} alt="" />
            </div>
            <div className="c1">
              <img src={comp6} alt="" />
              <img src={comp7} alt="" />
              <img src={comp8} alt="" />
              <img src={comp9} alt="" />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
