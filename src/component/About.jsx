import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 class="mb-4">About Us</h1>
                        <p className="lead">
                        FaF is a store or e-commerce that provides various needs including women's clothing, 
                        men's clothing, jewelry, electronics. FaF is made to make it easier for people who 
                        want to shop for necessities in an easy, fast, modern, efficient, and quality manner. 
                        <b> Let's shop at FaF</b></p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/illus.png" alt="Illus" height="400px" width="600px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;