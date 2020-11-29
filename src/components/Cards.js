import React from 'react';
import imagem from '../static/images/card1.png';

const Cards = ({title, image}) => {
    return (
        <div className="cards">
            <h2>{title}</h2>
            <img src={imagem} alt="card"/>
        </div>
    )
}

export default Cards;