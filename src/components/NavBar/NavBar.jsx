import React, { useEffect, useState } from "react";
import logo from "../../assets/full_logo.svg";
import "./style.scss";

export default function NavBar() {
  const [isShrunk, setIsShrunk] = useState(true);

  const handler = () => {
    if (window.scrollY > 100) {
      setIsShrunk(false);
    } else {
      setIsShrunk(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className="nav">
      <img className="logo" src={logo} alt="logo" />
      <div>
        <button id="login" style={{ color: "100c16" }}>
          Get now
        </button>
      </div>
    </div>
  );
}
