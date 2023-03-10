import React from "react";
import Characters from "../component/character.js";

const CharactersView = (props) => {
    return <Characters faHeart={props.faHeart} starWars={props.starWars}/>
}

export default CharactersView;