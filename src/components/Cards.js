import React from 'react';


const Cards = ({title, image}) => {
    return (
        <div className="Cards">
            <h2>{title}</h2>
            <img src={image} alt="card"/>
        </div>
    )
}

export default Cards;