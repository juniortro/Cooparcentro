import React from 'react';
import NoticeCard from './NoticeCard';
import EventCard from './EventCard';
import seta from '../images/svg/seta.svg';
import Notice1 from '../images/page/notice1.png'
import Notice2 from '../images/page/notice2.png'
import Notice3 from '../images/page/notice3.png'
import Notice4 from '../images/page/notice4.png'
import Evento1 from '../images/page/evento1.png'
import Evento2 from '../images/page/evento2.png'
import '../styles/noticepage.css';

const NoticePage = () => {
    return (
        <div className="noticepage">
            <div className="lastnews">
                <h2>ÚLTIMAS NOTÍCIAS</h2>
                <NoticeCard bg={Notice1} />
                <NoticeCard bg={Notice2} />
                <NoticeCard bg={Notice3} />
                <NoticeCard bg={Notice4} />
                <button className="btn-news">MAIS NOTÍCIAS <img src={seta} alt="seta" /></button>
            </div>

            <div className="nextevents">
                <h2>PRÓXIMOS EVENTOS</h2>
                <EventCard bg={Evento1} />
                <EventCard bg={Evento2} />


                <button className="btn-events">MAIS EVENTOS <img src={seta} alt="seta" /></button>
            </div>

        </div>
    )
};

export default NoticePage;