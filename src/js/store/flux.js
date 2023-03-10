import React, { useEffect } from "react";
import { useParams } from "react-router";
const getState = ({ getStore, getActions, setStore }) => {

	const API_PEOPLE = "https://www.swapi.tech/api/people/";
	const API_PLANETS = "https://www.swapi.tech/api/planets/";

	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			loading: true,
			loadingPlanets: true
		},
		actions: {
			loadCharactersFetch: useEffect(() => {
				const store = getStore();
				for (let i = 1; i <= 10; i++) {
				  fetch(`${API_PEOPLE}${i}`)
					.then(response => response.json())
					.then(data => setStore({characters: [...store.characters, {...data.result.properties, id: i}]}))
				}
				store.characters.sort()
				setStore({loading: false})
			  }, []),
			
			loadPlanetsFetch: useEffect(() => {
				const store = getStore();
				for (let i = 1; i <= 10; i++) {
				  fetch(`${API_PLANETS}${i}`)
					.then(response => response.json())
					.then(data => setStore({planets: [...store.planets, {...data.result.properties, id: i}]}))
				}
				store.planets.sort()
				setStore({loadingPlanets: false})
			  }, []),

			addFavoritesCharacter: (theid) => {
				const store = getStore();
				store.characters.map((item) => {
					if (item.id === theid && !store.favorites.find(f => f.id === theid)) {
						setStore({favorites: [...store.favorites, { id: item.id, name: item.name }]});
					}
				})
			},

			addFavoritesPlanet: (theid) => {
				const store = getStore();
				store.planets.map((item) => {
					if (item.id === theid && !store.favorites.find(f => f.id === theid)) {
						setStore({favorites: [...store.favorites, { id: item.id, name: item.name }]});
					}
				})
			},

			deleteFav: (favId) => {
				const store = getStore();
				let eliminateFav = store.favorites.filter((element) => element.id !== favId)
				setStore({favorites: [...eliminateFav]})
			}
		}
	};
};

export default getState;
