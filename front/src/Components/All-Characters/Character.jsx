import React from "react";
import "./AllCharacters.scss";

const Character = (props) => {
    return (
        <div className="character">
            <img src={props.Image} key={props.index} alt="GANTZ Character" className="image-character"/>
        </div>
    )
}

export default Character;