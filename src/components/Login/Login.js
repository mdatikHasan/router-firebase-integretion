import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.pathname ||  '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(()=>{
            navigate(from, {replace: true})
        })
    }
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
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;