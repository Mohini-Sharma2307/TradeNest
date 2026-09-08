import React from "react";
import "./TopBar.css";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <span className="index">NIFTY 50</span>

          <span className="index-points">25,178.80</span>

          <span className="percent up">▲ +0.62%</span>
        </div>

        <div className="sensex">
          <span className="index">SENSEX</span>

          <span className="index-points">82,450.30</span>

          <span className="percent up">▲ +0.55%</span>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;