import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="row w-100 pb-4">
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

        // <ul className="list list-group list-group-horizontal">
        //     <li className="list-group-item">Clicky Game</li>
        //     <li className="list-group-item">Click an image to begin!</li>
        //     <li className="list-group-item">Score:</li>
        // </ul>
    );
};

export default Navbar;