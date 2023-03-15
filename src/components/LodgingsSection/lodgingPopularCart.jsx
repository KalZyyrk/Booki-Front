import React from 'react';
import Rating from '../Rating';

const LodgingPopularCart = ({ name, img, price, rating }) => {
    return (
        <div className='cart'>

            <div className='cart-image'><img src={img} alt={"photo de " + name} /></div>
            <div className='cart-desc'>
                <div>
                    <h2>{name}</h2>
                    <p>Nuit à partir de {price}<span className='bold'>€</span></p>
                </div>
                <div className='rating'><Rating rate={rating} /></div>
            </div>
        </div>
    );
}

export default LodgingPopularCart;
