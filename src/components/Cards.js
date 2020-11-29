import React from 'react';

const Cards = (props) => {
    return (
        <div className="cards">
            <h2>{props.title}</h2>
            <img src={props.image} alt="card"/>
        </div>
    )
}

export default Cards;