import React from 'react';
import logo from '../../assets/images/logo/Booki.png'

const Header = () => {
    return (
        <header className='header wrapper'>
            <div className='main-logo'><img src={logo} alt="logo Booki" /></div>
            <nav>
                <p className='nav-button'>Hébergements</p>
                <p className='nav-button'>Activités</p>
            </nav>
        </header>
    );
}

export default Header;
