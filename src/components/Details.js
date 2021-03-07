import React from "react";

function Details(props){
    console.log(props);
    return(
        <div className="bottom">
      <p>{props.phoneNumber}</p>
      <p>{props.emailID}</p>
    </div>
    );
}


export default Details;