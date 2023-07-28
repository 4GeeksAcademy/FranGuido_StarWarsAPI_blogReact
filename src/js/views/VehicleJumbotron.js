import React, {useContext} from 'react';
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleJumbotron = () => {

    const { store, actions } = useContext(Context);
	const params = useParams();

  return (
    <>
			<div className="container mt-5 bg-light rounded p-5">

			<h1>{store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].name : 'loading'}</h1>

				<hr className="my-4" />


				<div class="container">
					<div class="row">
						<div class="col-sm-3">
							<img className="card-img" src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} alt="PFFFF YOU LOOKIN' FOR A PIC LIKE YOU CAN AFFORD THIS VEHICLE!"></img>
						</div>
						<div class="col-sm-3">
							<h6>Model: {store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].model : 'loading'}.</h6>
							<h6>Class: {store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].vehicle_class : 'loading'}.</h6>
							<h6>Manufacturer: {store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].manufacturer : 'loading'}.</h6>
							<h6>Passenger: {store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].passengers : 'loading'}.</h6>
							<h6>Crew: {store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].crew : 'loading'}.</h6>
							


						</div>
						<div class="col-sm-6">
							<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
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

VehicleJumbotron.propTypes = {
	match: PropTypes.object
};

