import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.img}></Avatar>
      </div>
      <Details phoneNumber={props.phone} emailID={props.email}></Details>
    </div>
  );
}

export default Card;
