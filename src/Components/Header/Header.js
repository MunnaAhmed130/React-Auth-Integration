import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import'./Header.css'

const Header = () => {
    const { user, handleLogout} = useAuth();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/shipping'>Shipping</Link>
            <span>{user.displayName}</span>
            {user?.displayName &&
                <button onClick={handleLogout}>Log Out</button>
            }
        </div>
    );
};

export default Header;