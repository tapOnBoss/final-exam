import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    
    return (
    <header className="header">
        <div className="logo">Logo</div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
            <i className="fa fa-bars"></i>
            </button>
            {showSidebar && <Sidebar />}
    </header>
    );
}

export default Header;
