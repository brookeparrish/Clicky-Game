import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="row w-100 pb-4 pt-4">
            <div className="col text-center">
                Clicky Game
            </div>
                
            <div className="col text-center">
                Click an image to begin!
            </div>

            <div className="col text-center">
                Score:
            </div>
        </div>
    );
};

export default Navbar;