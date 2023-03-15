import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({ rate }) => {
    const range = [1, 2, 3, 4, 5];
    return range.map((rangeElem, key) =>
        rangeElem <= rate ? (
            <div className='star' key={key} >< FontAwesomeIcon icon={faStar} /></div>

        ) : (
            <div className='star-empty' key={key} ><FontAwesomeIcon icon={faStar} className='gray-star' /></div>
        ));
}

export default Rating;
