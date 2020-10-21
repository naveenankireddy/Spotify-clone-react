import React from "react";
import Footer from "./Footer";
import Body from "./Body";
import Sidebar from "./Sidebar";
import "../styles/player.css";
function Player() {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
