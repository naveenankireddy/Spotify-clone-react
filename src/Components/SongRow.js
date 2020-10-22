import React from "react";
import "../styles/songRow.css";

function SongRow({ track = "test" }) {
  return (
    <div className="songRow">
      <img src={track.album.images[0].url} alt="" className="songRow-album" />
      <div className="songRow-info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(",")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
