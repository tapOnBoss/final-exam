import React from 'react';


const Sidebar = ({isOpen})=>{
    return(
    <div className="sidebar">
            <ul className="sidebar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        

        <aside className={isOpen ? 'open' : 'closed'}>
            <h3>Sidebar</h3>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                <li>Menu Item 4</li>
            </ul>
        </aside>
    </div>
    );
}

export default Sidebar;