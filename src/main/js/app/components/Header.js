import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';


function Header(props) {
    return (
        <header id="header">
            <h1><a href="../main/js/app/components/App.js"><strong>Multiverse</strong> by HTML5 UP</a></h1>
            <nav>
                <ul>
                    <li><a href="#footer" className="icon solid fa-info-circle">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
