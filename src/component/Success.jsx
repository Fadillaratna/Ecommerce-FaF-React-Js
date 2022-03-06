import React from 'react';
import { NavLink } from 'react-router-dom';


const Succes = () => {
    return (
        <div className='mt-4 text-center py-4'>
                <img src="assets/succes.png" alt="Illus" height="420px" width="400px" />
                <h2>Checkout success</h2>
                <p>Thanks you for shopping!</p>
                <NavLink className="btn btn-dark" to="/">
                    Kembali
                </NavLink>
        </div>
        // <div>
        //     <div className="container py-5 my-5">
        //         <div className="row">
                    
        //                 <img src="assets/illus.png" alt="Illus" height="400px" width="600px" />
        //         </div>
        //     </div>
        // </div>
    );
};

export default Succes;