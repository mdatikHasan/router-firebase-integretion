import React from 'react';
import useFirebae from '../../hooks/useFirebae';

const Login = () => {
    const {user, signInWithGoogle} = useFirebae()
    return (
        <div>
            <div>
                <h3>Please Login</h3>
                <form action="">
                    <input type="name" placeholder='Your email' />
                    <br />
                    <input type="password" placeholder='Your password' />
                    <br />
                    <input type="submit" value='Login' />
                </form>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;