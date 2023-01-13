import React from "react";
import time1 from "../../assets/time1.svg";
import teme2 from "../../assets/time2.svg";
import tasks from "../../assets/tasks.svg";
import person from "../../assets/person-done.svg";
import calendar from "../../assets/calendar.svg";
import chat from "../../assets/chat.svg";
import done from "../../assets/done.svg";
import time from "../../assets/time-pink.svg";
import download from "../../assets/download.svg";
import fb from "../../assets/fb.png";
import picter from "../../assets/picter.png";
import nd from "../../assets/2nd.png";
import picture from "../../assets/picture.svg";
import outPic from "../../assets/outPic.png";
import "./style.scss";
import { AnimateOnScroll } from "animate-on-scroll-framer";

export default function Time() {
  return (
    <div className="title">
      <AnimateOnScroll duration={1} delay={1} animation="flipIn">
        <div className="tl">
          <h2>
            Save Big on All Features <br />
          </h2>
          <span>no exceptions</span>{" "}
        </div>
      </AnimateOnScroll>

      <div className="centre">
        <div className="time">
          <div className="progress">
            <div className="icons">
              <ul className="justifyUl">
                <li>
                  <img src={time1} alt="" />
                  <span>Time Tracking with Screenshots</span>
                </li>
                <li>
                  <img src={person} alt="" />
                  <span>Productivity Monitoring</span>
                </li>
                <li>
                  <img src={tasks} alt="" />
                  <span>Task Management</span>
                </li>
                <li>
                  <img src={chat} alt="" />
                  <span>Communication Channels</span>
                </li>
                <li>
                  <img src={calendar} alt="" />
                  <span>HR Tools</span>
                </li>
                <li>
                  <img src={teme2} alt="" />
                  <span>Online Reports</span>
                </li>
              </ul>
            </div>
            <div className="progressLine">
              <div className="strongLine"></div>
            </div>
            <AnimateOnScroll duration={1} delay={1} animation="flipIn">
              <div className="description">
                <div>
                  <h1>
                    Track the time your employees spend on work and get detailed
                    information
                  </h1>
                  <ul>
                    <li>
                      <img src={done} alt="" />4 Screenshot Modes
                    </li>
                    <li>
                      <img src={done} alt="" />
                      Idle Time Tracking
                    </li>
                    <li>
                      <img src={done} alt="" />
                      Synchronized Tracking
                    </li>
                    <li>
                      <img src={done} alt="" />
                      Billable Hours
                    </li>
                  </ul>
                  <button>reserve your seat</button>
                </div>

                <div className="picture">
                  <div className="display">
                    <img src={time} alt="" />
                    <span>Total 04:20</span>
                    <span> </span>
                    <span></span>
                  </div>
                  <div className="end">
                    <button id="select">
                      {" "}
                      <span>select all</span>{" "}
                    </button>
                    <div className="download">
                      <img src={download} alt="" />
                    </div>
                  </div>
                  <input type="date" />
                  <div className="pics">
                    <div>
                      <div className="pic">
                        <div className="picTxt">
                          <span></span>
                        </div>
                        <img src={picter} alt="" />
                        <div className="picDiv">
                          <div id="green"></div>
                        </div>
                      </div>
                      <div className="pic">
                        <div className="picTxt">
                          <span></span>
                        </div>
                        <img src={picture} alt="" />
                        <div className="picDiv">
                          <div id="red"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img src={nd} alt="" />
                      </div>
                      <div className="pic">
                        <div className="picTxt">
                          <span></span>
                        </div>
                        <img src={fb} alt="" />
                        <div className="picDiv">
                          <div id="yellow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="side">
                    <img src={outPic} alt="" />
                    <input type="text" />
                    <div className="buts">
                      <button
                        className="buttons"
                        style={{ background: "#16CF96" }}
                      >
                        {" "}
                        <span>Save</span>{" "}
                      </button>
                      <button
                        className="buttons"
                        style={{ background: "#EE5B60" }}
                      >
                        {" "}
                        <span>Delete</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
