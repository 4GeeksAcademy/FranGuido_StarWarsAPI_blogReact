import React, {useContext} from 'react';
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetsJumbotron = () => {

    const { store, actions } = useContext(Context);
	const params = useParams();

  return (
    <>
			<div className="container mt-5 bg-light rounded p-5">

				<h1>{store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].name : 'loading'}</h1>

				<hr className="my-4" />


				<div class="container">
					<div class="row">
						<div class="col-sm-3">
							<img className="card-img" src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} alt="NO TELESCOPE CAN TAKE A PIC OF THIS"></img>
						</div>
						<div class="col-sm-3">
							<h6>Population: {store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].pupulation : 'loading'}.</h6>

							<h6>Climate: {store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].climate : 'loading'}.</h6>

							<h6>Terrain: {store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].terrain : 'loading'}.</h6>

                            <h6>Gravity: {store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].gravity : 'loading'}.</h6>

                            <h6>Rotation period: {store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].rotation_period : 'loading'}.</h6>


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

PlanetsJumbotron.propTypes = {
	match: PropTypes.object
};


