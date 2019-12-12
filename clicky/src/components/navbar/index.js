import React from "react";
import "./style.css";

function Navbar(props) {

  return(
    <nav className="navbar">
      <h1>clickyGame</h1>
      <h1>{props.status}</h1>
      <h1>Score: {props.score} | Highscore: {props.highscore}</h1>
    </nav>
  )
}

export default Navbar