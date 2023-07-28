import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const vehicleCard = {
  width: "16rem",
  height: "28rem",
  background: "#F2F2F2",
  textAlign: "left",
};

export const Vehicles = () => {

  const { store, actions } = useContext(Context)

  return (
    <>
      <div className="row align-items-center ms-1">
        <h1 className="text-warning mb-5 mt-5">Vehicles</h1>
        {store.vehiclesStarWars.map((value, index) => {


          return (

            <div className="col-4 mx-3 mt-2 mb-5 rounded" style={vehicleCard} key={index}>
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/` + (index + 1) + `.jpg`} className="card-img-top mt-3" alt="..." onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://placehold.co/600x400.png";
              }} ></img>
              <div className="card-body p-3">
                <h3 className="card-title" >{value.name}</h3>
                <p className="card-text" > Model: {value.model} </p>
                <p className="card-text" > Passengers: {value.passengers} </p>
                <p className="card-text" > Crew: {value.crew} </p>
                <Link to={"/VehicleJumbotron/" + index}>
                  <button className="btn btn-primary">Learn more!</button>
                </Link>
                <button class="btn btn-warning ms-5" onClick={()=> actions.addFavorites(value.name) } ><i class="fas fa-heart"></i></button>
              </div>
            </div>


          )
        })}
      </div>
    </>
  )
}




