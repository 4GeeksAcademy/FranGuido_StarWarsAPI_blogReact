import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<div className="container mt-5  bg-light rounded">
      <nav className="navbar navbar-light bg-light mb-3 ">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1280px-Star_wars2.svg.png" width="100px"></img>
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/home">
            <div class="dropdown">
              <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
              </ul>
            </div>
          </Link>
        </div>
      </nav>
    </div>
	);
};
