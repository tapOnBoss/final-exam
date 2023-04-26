import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src='/images/logo.png' alt='Logo' />
            </div>
            <Navbar />
        </header>
    )
}

export default Header;