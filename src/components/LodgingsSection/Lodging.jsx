import React from 'react';
import LodgingList from './LodgingList';
import LodgingPopular from './LodgingPopular';

const Lodging = () => {
    return (
        <section className='lodging' id='lodging'>
            <LodgingList />
            <LodgingPopular />
        </section>
    );
}

export default Lodging;
