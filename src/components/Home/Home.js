import React from 'react';
import useFirebae from '../../hooks/useFirebae';

const Home = () => {
    const {user} = useFirebae()
    return (
        <div>
            <h1>This is home</h1>
            <p>Current User: {user ? user.displayName : 'No body sign In'}</p>
        </div>
    );
};

export default Home;