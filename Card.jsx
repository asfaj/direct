import React from "react";
import img1 from "../img1.png"
import { myname } from "../App";

function Card(props){
    return(
    <>
    <img src={img1} alt="not found" style={{height: "100px"}}/>
    <h1>{props.title}</h1>
    <h2>{props.description} {props.new}</h2>
    <myname.Consumer>
        {firstName=>(<h1>my name is {firstName}</h1>)}
    </myname.Consumer>
    </>
    )

};
export default Card;