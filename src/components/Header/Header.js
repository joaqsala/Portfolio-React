import React from 'react';
import Title from './Title';
import NavTabs from './NavTabs';

function Header() {
    return (
        <header className="header">
            <Title />
            <NavTabs />
        </header>
    );
}

export default Header;

