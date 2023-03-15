import React from 'react';

const Footer = () => {
    return (
        <footer>
            <article>
                <ul>
                    <li className='title'>À propos</li>
                    <li>Fonctionnement du site</li>
                    <li>Conditions générales</li>
                    <li>Données et confidentialité</li>
                </ul>
            </article>
            <article>
                <ul>
                    <li className='title'>Nos hébergements</li>
                    <li>Charte qualité</li>
                    <li>Proposer votre hôtel</li>
                </ul>
            </article>
            <article>
                <ul>
                    <li className='title'>Assistance</li>
                    <li>Centre d'aide</li>
                    <li>Nous contacter</li>
                </ul>
            </article>
        </footer>
    );
}

export default Footer;
