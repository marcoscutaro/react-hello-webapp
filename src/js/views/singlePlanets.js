import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import IndividualPlanets from "../component/individualPlanets.js";

export const SinglePlanets = (props) => {

  const API_PLANETS = "https://www.swapi.tech/api/planets/";
  const [infoPlanet, setInfoPlanet] = useState([])
  const [loadingPlanet, setLoadingPlanet] = useState(true)
  const theid = useParams();

	const getList = async ()=>{
		await fetch(`${API_PLANETS}${theid.theid}`)
				.then(response => response.json())
				.then(data => setInfoPlanet(data.result.properties))
				setLoadingPlanet(false)
		}

	useEffect(()=>{
		getList()
	},[])

	if(loadingPlanet) return <h2>Loading</h2>

	return (
		<>

		<div>
			<IndividualPlanets starWars={props.starWars} info={infoPlanet} faHeart={props.faHeart}/>
		</div>

      	<Link className="backBtn" to="/">
        	<span className="btn btn-primary btn-lg" href="#" role="button">
          		Back home
        	</span>
      	</Link>
	</>
	)
};

SinglePlanets.propTypes = {
  match: PropTypes.object,
};