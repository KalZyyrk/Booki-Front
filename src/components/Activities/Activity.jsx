import React from 'react';

const Activity = ({ name, img }) => {
    return (
        <article className='cart'>
            <div className='cart-img'>
                <img src={img} alt={'Photo ' + name} />
            </div>
            <div className='cart-name'>
                <h2>{name}</h2>
            </div>
        </article>
    );
}

export default Activity;
