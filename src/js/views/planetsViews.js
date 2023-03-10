import React from "react";
import Planets from "../component/planets.js";

const PlanetsView = (props) => {
    return <Planets faHeart={props.faHeart} starWars={props.starWars}/>
}

export default PlanetsView;