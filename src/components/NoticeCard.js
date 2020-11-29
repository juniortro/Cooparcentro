import React from 'react';

const NoticeCard = ( background ) => {
    return (
        <div>
            <div className="noticecardtop">
                <img src={background.id} alt="bg"/>
                
            </div>
        </div>
    )
};

export default NoticeCard;