import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Player(spotify) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <MainContent spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
