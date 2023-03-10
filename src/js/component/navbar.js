import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
	  		<Link className="img-container" to="/">
				<img src={props.starWars} alt="star wars logo" />
			</Link>
        <button
          className="navbar-toggler collapseBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon className="favoritesHeart" icon={props.faBars} />
        </button>
		
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navCont navbar-nav me-auto mb-2 mb-lg-0 ul-cont">
            <li className="nav-item size">
				      <Link className="btnNav" to="/CharactersView">
				        <button className="charactersBtn cardsTitle">Characters</button>
			        </Link>
            </li>
            <li className="nav-item size">
				      <Link className="btnNav" to="/PlanetsViews">
				        <button className="cardsTitle">Planets</button>
			        </Link>
            </li>
            <Dropdown faTrash={props.faTrash} faHeart={props.faHeart}/>
          </ul>
        </div>
      </div>
    </nav>
  );
};
