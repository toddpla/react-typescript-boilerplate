import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Google Sign In</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/builder">Builder</Link>
            </li>
        </ul>
    </nav>
);

export default Header;
