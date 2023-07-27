import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const planetsCard = {
  width: "16rem",
  height: "27rem",
    background: "#F2F2F2",
    textAlign: "left",
  };

export const Planets = () => {

    const {store, actions} = useContext(Context)

    return (
        <>
        <div className="row align-items-center ms-2">
        <h1 className="text-warning mt-5 mb-5">Planets</h1>
        {store.planetsStarWars.map((value, index) => {
    
            
            return(
                
                <div className="col-4 mx-3 mb-5 rounded" style={planetsCard} key={index}>
                      <img src={`https://starwars-visualguide.com/assets/img/planets/` + (index +1 ) + `.jpg`} className="card-img-top mt-3" alt="..."></img>
                      <div className="card-body p-3">
                        <h5 className="card-title" >{value.name}</h5>
                        <p className="card-text" > Population: {value.population} </p>
                        <p className="card-text" > Climate: {value.climate} </p>
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


