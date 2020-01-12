import React from 'react';
import './cards.css';

const Card = (props) => {
    return (
        <div className="col-3">
            <img className="img-fluid pb-2" src={props.image} />
        </div>
    );
};

export default Card;