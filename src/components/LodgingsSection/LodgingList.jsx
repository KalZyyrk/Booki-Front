import React from 'react';
import { useEffect, useState } from 'react';
import LodgingCart from './LodgingCart';
import fetchData from '../../funtion/fetchData';


const LodgingList = () => {
    const [lodging, setLodging] = useState(null)
    useEffect(() => {
        const data = async () => {
            const LodgData = await fetchData('lodging');
            console.log(LodgData);
                setLodging(LodgData)
        };
        data()
    }, []);

    if (lodging) {
    return (
        <article className='list'>
            <h1>Hébergements à Marseille</h1>
            {lodging.map(lodging =>
                <LodgingCart key={lodging._id} name={lodging.name} img={lodging.img} price={lodging.price} rating={lodging.rating} />
            )}
            <h2>Afficher plus</h2>
        </article>
    );}
}

export default LodgingList;
