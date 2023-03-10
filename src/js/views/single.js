import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Individual from "../component/individual.js";

export const Single = (props) => {

  const API_PEOPLE = "https://www.swapi.tech/api/people/";
  const [infoCharacter, setInfoCharacter] = useState([])
  const [loading, setLoading] = useState(true)
  const theid = useParams();

  const getData = async ()=>{
	fetch(`${API_PEOPLE}${theid.theid}`)
			.then(response => response.json())
			.then(data => setInfoCharacter(data.result.properties))
			setLoading(false)
	}

	useEffect(()=>{
		getData()
	},[])

	if(loading){
		return (
			<div className="lds-circle"><div></div></div>
		)
	}

	return (
		<>

		<div>
			<Individual starWars={props.starWars} info={infoCharacter}/>
		</div>

      	<Link className="backBtn" to="/">
        	<span className="btn btn-primary btn-lg" href="#" role="button">
          		Back home
        	</span>
      	</Link>
	</>
	)
};

Single.propTypes = {
  match: PropTypes.object,
};