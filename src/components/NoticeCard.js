import React from 'react';

const NoticeCard = (props) => {
    return (
        <div className="noticecard">
            <img src={props.bg} alt="bg" />


            <button className="notice-btn">Nome da Categoria</button>
            <h5>19 DE MARÇO DE 2020</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
    )
};

export default NoticeCard;