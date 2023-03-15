import React from 'react';
import FilterChoice from './FilterChoice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/filterData.json'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const Filter = () => {
    return (
        <div className='filter'>
            <h1>Filtres</h1>
            {data.map(filter =>
                <FilterChoice key={filter.name} name={filter.name} icon={<FontAwesomeIcon icon={filter.icon} />} />
            )}
        </div>
    );
}

export default Filter;
