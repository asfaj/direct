import React from "react";
import Card from "./Card";

function Grandchild(props){
const description="this is a new descript"
return(
<>
<h1>grand child</h1>
<Card title={props.title1} description={description}/>
</>
)
}
export default Grandchild;