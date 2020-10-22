import React from "react";
import { useStateProviderValue } from "../store/StateProvider";
import "../styles/body.css";
import Header from "./Header";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
function Body() {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();
  return (
    <div className="body">
      <Header />
      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleOutlineIcon className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
