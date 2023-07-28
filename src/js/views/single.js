import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="container mt-5 bg-light rounded p-5">

				<h1>{store.peopleStarWars.length != 0 ? store.peopleStarWars[params.theid].name : 'loading'}</h1>
				<hr className="my-4" />

				<div className="row">
					<div clasname="col-6">
					<img className="card-img-left" src="https://placehold.co/200x200.png" alt="Card image cap"></img>
					</div>
					<div clasname="col-6">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>

				</div>

				<h1>{store.peopleStarWars.length != 0 ? store.peopleStarWars[params.theid].gender : 'loading'}</h1>








				<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

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
