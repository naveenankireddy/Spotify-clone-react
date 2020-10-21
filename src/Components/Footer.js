import React from "react";
import "../styles/footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>footer left</p>
      </div>
      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>
      <div className="footer-right">
        <p>footer right</p>
      </div>
    </div>
  );
}

export default Footer;
