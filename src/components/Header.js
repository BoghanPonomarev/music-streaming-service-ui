import React from 'react';

import '../style/App.css';
import '../style/main.css';


function Header(props) {
    return (
        <header id="header">
            <h1><a href="../App.js"><strong>Multiverse</strong> by HTML5 UP</a></h1>
            <nav>
                <ul>
                    <li><a href="#footer" className="icon solid fa-info-circle">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
