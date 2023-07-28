import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const imageStyle ={
	height: "5rem",
}

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="container mt-5 bg-light rounded p-5">

				<h1>{store.peopleStarWars.length != 0 ? store.peopleStarWars[params.theid].name : 'loading'}</h1>

				<hr className="my-4" />


				<div class="container">
					<div class="row">
						<div class="col-sm-3">
							<img className="card-img" src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} alt="Card image cap"></img>
						</div>
						<div class="col-sm-3">
							<h6>Birth Year: {store.peopleStarWars.length != 0 ? store.peopleStarWars[params.theid].birth_year : 'loading'}.</h6>

							<h6>Gender: {store.peopleStarWars.length != 0 ? store.peopleStarWars[params.theid].gender : 'loading'}.</h6>

							<h6>Height: {store.peopleStarWars.length != 0 ? store.peopleStarWars[params.theid].height : 'loading'}.</h6>

							<h6>Mass: {store.peopleStarWars.length != 0 ? store.peopleStarWars[params.theid].mass : 'loading'}.</h6>

						</div>
						<div class="col-sm-6">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
				</div>

				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
