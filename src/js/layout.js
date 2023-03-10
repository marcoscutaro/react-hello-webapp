import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { SinglePlanets } from "./views/singlePlanets.js";
import CharactersView from "./views/charactersView.js";
import injectContext from "./store/appContext";
import { faHeart, faTrash, faBars} from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import starWars from "../img/starWars.png";
import sky from "../img/sky.jpg";
import fondo1 from "../img/fondo1.jpg";
import fondo2 from "../img/fondo2.jpg";
import fondo3 from "../img/fondo3.jpg";
import fondo5 from "../img/fondo5.png";
import bb8 from "../img/bb8.png";
import PlanetsView from "./views/planetsViews.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="fondo" style={{backgroundImage: `url(${sky})`}} >
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar faBars={faBars} starWars={starWars} faHeart={faHeart} faTrash={faTrash}/>
					<Routes>
						<Route path="/" element={<Home bb8={bb8} fondo5={fondo5} fondo3={fondo3} fondo2={fondo2} fondo1={fondo1} faHeart={faHeart} starWars={starWars} />} />
						<Route path="/single/:theid" element={<Single starWars={starWars}/>} />
						<Route path="/singlePlanets/:theid" element={<SinglePlanets starWars={starWars}/>} />
						<Route path="/CharactersView" element={<CharactersView sky={sky} starWars={starWars} faHeart={faHeart}/>} />
						<Route path="/PlanetsViews" element={<PlanetsView sky={sky} starWars={starWars} faHeart={faHeart}/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
