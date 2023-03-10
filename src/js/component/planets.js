import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Planets = (props) => {
    
	const { store, actions } = useContext(Context);
   
    const planetsData = store.planets.map((item, index) => {

        const theid = item.id;

        return (
            <div key={index} className="card" style={{width: "24rem"}}>
                    <img src={props.starWars} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"></p>
                </div>
                <div className="btnCotainer">
                    <Link to={`/singlePlanets/${theid}`}>
                        <button className="btn btn-primary">Learn more!</button>
                    </Link>
                    <button onClick={() => actions.addFavoritesPlanet(theid)} className="favoritesBtn btn btn-outline-warning"><FontAwesomeIcon icon={props.faHeart} /></button>
                </div>
            </div>
        )
    })

    return (
        <div className="cardSection">
            {planetsData}
        </div>
    )
    
};

export default Planets;