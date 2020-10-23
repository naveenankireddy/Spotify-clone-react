import React from "react";
import Footer from "./Footer";
import Body from "./Body";
import Sidebar from "./Sidebar";
import "../styles/player.css";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
