import React from 'react';
import NoticeCard from './NoticeCard';
import Notice1 from '../images/page/notice1.png'

const NoticePage = () => {
    return (
        <div>
            <div className="lastnews">
                <h2>ÚLTIMAS NOTÍCIAS</h2>
                <NoticeCard id={Notice1}/>
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
            </div>

            <div className="nextevents">

            </div>
        </div>
    )
};

export default NoticePage;