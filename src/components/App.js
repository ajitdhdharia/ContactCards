import React from "react";
import Contacts from "../contacts";
import Card from "./Card";

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
