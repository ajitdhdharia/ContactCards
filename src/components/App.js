import React from "react";
import Contacts from "../contacts";

function Card(props){
    return(<div className="card">
    <div className="top">
      <h2 className="name">{props.name}</h2>
      <img
        className="circle-img"
        src={props.img}
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  </div>);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name = {Contacts[0].name}
        img = {Contacts[0].imgURL}
        phone = {Contacts[0].phone}
        email = {Contacts[0].email}
        ></Card>
        <Card
        name = {Contacts[1].name}
        img = {Contacts[1].imgURL}
        phone = {Contacts[1].phone}
        email = {Contacts[1].email}
        ></Card>
        <Card
        name = {Contacts[2].name}
        img = {Contacts[2].imgURL}
        phone = {Contacts[2].phone}
        email = {Contacts[2].email}
        ></Card>
    </div>
  );
}

export default App;
