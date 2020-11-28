import React from 'react';
import Cards from './Cards';
import database from '../static/data/data.json';

const CardPage = () => {
    return (
        <div className="container">
            {database.map( (item) => {
            return <Cards title={item.title} image={item.image} />
            })}
        </div>
    )
};

export default CardPage;