import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const planetsCard = {
    width: "18rem",
    background: "#F2F2F2",
    textAlign: "left"
  };

export const Planets = () => {

    const {store, actions} = useContext(Context)

    return (
        <>
        <div className="row align-items-center ms-5">
        <h1 className="text-danger mt-5 mb-5">Planets</h1>
        {store.planetsStarWars.map((value, index) => {
    
            
            return(
                
                <div className="col-4 mx-3 m-auto rounded" style={planetsCard} key={index}>
                      <img src="" className="card-img-top" alt="..."></img>
                      <div className="card-body p-3">
                        <h3 className="card-title" >{value.name}</h3>
                        <p className="card-text" > Population: </p>
                        <p className="card-text" > Terrain: </p>
                        <Link to={"/single/" + index}>
                          <button className="btn btn-primary">Learn more!</button>
                        </Link>
                        <button class="btn btn-warning ms-5"><i class="fas fa-heart"></i></button>
                      </div>
                    </div>
                    
                
            )
        })}
        </div>
        </>
      )
}


