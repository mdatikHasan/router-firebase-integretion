import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebae from '../../hooks/useFirebae';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebae()
    return (
        <div className='header'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/orders'>Orders</NavLink>
                <NavLink to='/reviews'>Reviews</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <span>{user?.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={handleSignOut}>Signout</button>
                        :
                        <NavLink to='/login'>Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;