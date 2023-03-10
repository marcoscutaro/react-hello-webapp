import React from "react";
import { Link } from "react-router-dom";

const Select = (props) => {
    return (
        <div className="selectSection">
            <div  className="selectImg">
                <Link className="cardsBtn" to="/CharactersView">
				    <button className="cardsTitle">Characters</button>
			    </Link>
			
			
			    <Link className="cardsBtn" to="/PlanetsViews">
				    <button className="cardsTitle">Planets</button>
			    </Link>
                <figure className="imgFigure">
                    <img src={props.bb8} alt="" />
                </figure>
            </div>
        </div>
    )
};

export default Select;