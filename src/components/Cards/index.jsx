import React from "react";
import cards from "../../assets/cards.png";
import "./style.scss";

export default function Cards() {
  return <div className="cards">
    <img className="card" src={cards} alt="" />
  </div>;
}
