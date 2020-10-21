import React from "react";
import "../styles/sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import { useStateProviderValue } from "../store/StateProvider";
function Sidebar() {
  const [{ playlists }, dispatch] = useStateProviderValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="image"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryIcon} title="Your Library" />
      <br />
      <strong className="sidebar-title">Playlists</strong>
      <hr />
      {console.log(playlists)}

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
