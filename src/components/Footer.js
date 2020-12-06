import React from 'react';
import Logo from '../images/page/Logo-white.png';
import Instagram from '../images/svg/instagram.svg';
import Youtube from '../images/svg/youtube.svg';
import Facebook from '../images/svg/facebook.svg';
import Location from '../images/svg/localizacao.svg';
import Phone from '../images/svg/phone.svg';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">

            <div className="logo-footer">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="mapa">
                <h2>MAPA DO SITE</h2>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#quemsomos">QUEM SOMOS</a></li>
                    <li><a href="#servicos">SERVIÇOS</a></li>
                    <li><a href="#noticias">NOTÍCIAS</a></li>
                    <li><a href="#eventos">EVENTOS</a></li>
                    <li><a href="#faleconosco">FALE CONOSCO</a></li>
                    <li><a href="#trabalheconosco">TRABALHE CONOSCO</a></li>
                </ul>
            </div>

            <div className="midias">
                <h2>MÍDIAS SOCIAIS</h2>
                <div className="footer-icons">
                    <img src={Facebook} alt="facebook" /> <p>@COOPARCENTRO</p>
                </div>
                <div className="footer-icons">
                    <img src={Instagram} alt="instagram" /> <p>@COOPARCENTRO</p>
                </div>
                <div className="footer-icons">
                    <img src={Youtube} alt="youtube" /> <p>@COOPARCENTRO</p>
                </div>
            </div>

            <div className="footer-contacts">
                <h2>CONTATOS</h2>
                <div className="footer-icons">
                    <img src={Phone} alt="fone" /> <p>(55) 3211-1122</p>
                </div>
                <div className="footer-icons">
                    <img src={Location} alt="localizacao" /> <p>ROD. BR-392, KM. 348 97070-160, SANTA MARIA/RS</p>
                </div>
            </div>

            <div className="endpage">
                <p>© TODOS DIREITOS RESERVADOS. COOPARCENTRO 2020.</p>
            </div>
        </div>
    )
};

export default Footer;