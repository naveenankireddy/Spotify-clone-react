import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import spotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./store/StateProvider";
import Player from "./Components/Player";

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();
  let spotify = new spotifyWebApi();

  useEffect(() => {
    let hash = getTokenFromUrl();
    window.location.hash = "";
    let token = hash.access_token;

    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token: token,
      });
      // setToken(token);
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });

        // console.log(user, "hey im fucking user");
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
    // console.log("i have a tokken", token);
  }, []);
  // console.log(token, "hey im fucking token");

  return (
    <div className="App">
      {/* <h1>Hey chinnodu lets make a spotify clone </h1> */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
