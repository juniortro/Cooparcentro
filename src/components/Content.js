import React from 'react';
import seta from '../images/svg/seta.svg';
import mouse from '../images/svg/mouse.svg';
import '../styles/content.css';

const Content = () => {
    return (
        <div className="pagecontent">

            <div className="leftside">
                <span>SEJA BEM-VINDO À COOPARCENTRO</span>
                <h1>SEMPRE AO LADO DO</h1> 
                <h1>HOMEM DO CAMPO.</h1>
                <button>SAIBA MAIS <img src={seta} /></button>
            </div>

            <div className="roll">
                <button href="#roll"><a href="#roll">ROLE A PÁGINA</a> <img src={mouse} /></button>
            </div>

        </div>
    )
};

export default Content;