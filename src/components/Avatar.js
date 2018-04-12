import React from "react";
import "./Avatar.css";

function shuffleAndClick(props) {
    props.shuffleCats(); 
    props.clickedCat(props.id);
}

const Avatar = props => (
  <div className="avatar">
  <img alt={props.id} src={props.image} onClick={() => shuffleAndClick(props)}/>
  
  </div>
);

export default Avatar;
