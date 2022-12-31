import React from "react";
import "./style.scss";

import runner from "../../assets/Selfie.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="discount">
        <span>Save 50% now </span>
        <button>
          <div className="h4">get my discount</div>
        </button>
      </div>
      <div className="circle">
        <div className="sm circle">
          <div className="divCen">
            {" "}
            <div className="active">
              <div className="bgDv">
                <div className="bk">
                  <h3>Activity</h3>
                  <div className="mk">
                    <span className="tk">+45%</span>
                    <span className="y1">yesterday</span>
                  </div>
                </div>
                <div className="tm">
                  <span>2h 34m</span>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="fk">
                  <div className="act">active users</div>
                  <span className="num">50</span>
                </div>
                <div className="fk">
                  <div className="act">active projects</div>
                  <span className="num">35</span>
                </div>
              </div>
            </div>
            <div className="girl">
              <img src={runner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
