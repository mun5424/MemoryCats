import React from "react";
import "./Avatar.css";

const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Memory Game</a>
      </div>
      <ul className="nav navbar-nav navbar-center">
        <li id="status"> {props.statusMessage} </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li id="scores"> Score: {props.score} | Top Score: {props.topScore} </li>
      </ul>
    </div>
  </nav>


);

export default Navbar;
