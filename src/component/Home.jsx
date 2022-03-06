import React from 'react';
import Products from './Products';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero">
            <div>
            <div className="card bg-light text-light border-0">
                <img src="assets/backg.png" className="card-img" alt="Background" height="640px"></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center me-1000">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                            <NavLink to="/login" className="btn btn-dark">LOGIN</NavLink>

                            <NavLink to="/register" className="btn btn-outline-light  ms-3"> REGISTER</NavLink>
                        </div>
                        
                    </div>
            </div>
        </div>
        <Products/>
        </div>

        
    );
};

export default Home;