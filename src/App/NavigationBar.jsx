import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function NavigationBar (){
    const movies = useSelector((state) => state.wishList.movies);

    return (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              <a className="navbar-brand" href="#"></a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse text-center"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav d-flex justify-content-around">
                  <li className="nav-item mx-5">
                  <NavLink to="/wishListe" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>MoviesDB</NavLink>

                  </li>
                  <li className="nav-item">
                    
                  <NavLink to="/moviess" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Movies</NavLink>
                  </li>

                  <li className="nav-item mx-5">
                    
                  <NavLink to="/wishList" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Wishlist{movies.length}</NavLink>
                  </li>

    
                  
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
export default NavigationBar;