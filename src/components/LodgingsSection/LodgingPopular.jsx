import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LodgingPopularCart from './lodgingPopularCart';
import { useState, useEffect } from 'react';
import fetchData from '../../funtion/fetchData';

const LodgingPopular = () => {
        const [lodging, setLodging] = useState(null)
    useEffect(() => {
        const data = async () => {
            const LodgData = await fetchData('lodging/popular');
                setLodging(LodgData)
        };
        data()
    }, []);
if(lodging) {
    return (
        <article className='popular'>
            <div className='popular-title'><h1>Les plus populaires</h1><FontAwesomeIcon icon={faChartLine} /></div>
            {lodging.map(lodging => 
                <LodgingPopularCart key={lodging._id} img={lodging.img} name={lodging.name} price={lodging.price} rating={lodging.rating} />
            )}
        </article>
    );
}
}

export default LodgingPopular;
