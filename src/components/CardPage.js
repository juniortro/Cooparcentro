import React from 'react';
import Cards from './Cards';
import seta from '../images/svg/seta.svg';
import '../styles/cardpage.css';
import card1 from '../static/images/card1.png';
import card2 from '../static/images/card2.png';
import card3 from '../static/images/card3.png';
import card4 from '../static/images/card4.png';
import card5 from '../static/images/card5.png';

const CardPage = () => {
    return (
        <div className="cardpage" id="cardpage">
                <div className="maincard">
                    <h2>LOREM IPSUM DOLOR SIT</h2>
                    <h2>AMET, CONSECTETUR ADIPISCING ELIT.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor non enim praesent elementum facilisis leo, vel fringila est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.</p>
                </div>

                <Cards title={'DEFENSIVOS'} image={card1} />
                <Cards title={'NUTRIÇÃO'} image={card2} />
                <Cards title={'FERTILIZANTES'} image={card3} />
                <Cards title={'SEMENTES'} image={card4} />
                <Cards title={'GRÃOS'} image={card5} />

                <button>SAIBA MAIS <img src={seta} alt="seta" /></button>
            
        </div>

    )
};

export default CardPage;