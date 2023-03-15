import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const FilterChoice = ({ icon, name }) => {
    return (
        <div className='choice'>
            {icon}
            <h2>{name}</h2>
        </div>
    );
}

export default FilterChoice;
