import React from 'react';
import Cards from './Cards';
import database from '../static/data/data.json';
import seta from '../images/svg/seta.svg';
import '../styles/cardpage.css';

const CardPage = () => {
    return (
        <div className="cardpage">
            <div className="maincard">
                <h2>LOREM IPSUM DOLOR SIT</h2>
                <h2>AMET, CONSECTETUR ADIPISCING ELIT.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor non enim praesent elementum facilisis leo, vel fringila est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.</p>
            </div>
            {database.map( item => {
            return <Cards title={item.title} image={item.image} />
            })}

            <button>SAIBA MAIS <img src={seta} /></button>
            
        </div>
    )
};

export default CardPage;