import React from 'react';

const EventCard = ( props ) => {
    return (
        <div>
            <div className="eventcard">
                <img src={props.bg} alt="bg"/>
                <div className="event-text">
                    <h5>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h5>
                    <p>19 DE MARÇO DE 2020</p>
                </div>
            </div>
        </div>
    )
};

export default EventCard;