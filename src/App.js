import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let hash = getTokenFromUrl();
    window.location.hash = "";
    let token = hash.access_token;

    if (token) {
      setToken(token);
    }
    console.log("i have a tokken", token);
  }, []);

  return (
    <div className="App">
      {/* <h1>Hey chinnodu lets make a spotify clone </h1> */}
      {token ? <h1>hey you are logged in man</h1> : <Login />}
    </div>
  );
}

export default App;
