import React from 'react';
import Logo from '../images/page/Logo.png';
import Instagram from '../images/svg/instagram.svg';
import Youtube from '../images/svg/youtube.svg';
import Facebook from '../images/svg/facebook.svg';
import Phone from '../images/svg/phone.svg';
import '../styles/header.css';

const Header = () => {
    return (
        <div className="container">
            <img src={Logo} alt="logo"/>
            <ul>
                <a href="#home">HOME</a>
                <a href="#quemsomos">QUEM SOMOS</a>
                <a href="#servicos">SERVIÇOS</a>
                <a href="#noticias">NOTÍCIAS</a>
                <a href="#trabalheconosco">TRABALHE CONOSCO</a>
                <a href="#contato">CONTATO</a>
            </ul>
            <button className="hamburger" id="hamburger">≣</button>
            <div className="contacts">
                <img src={Facebook} alt=""/>
                <img src={Instagram} alt=""/>
                <img src={Youtube} alt=""/>
                <span>@COOPARCENTRO</span>
                <img src={Phone} alt=""/>
                <span>(55) 3211-1122</span>

            </div>
        </div>
    
    )
};

export default Header;