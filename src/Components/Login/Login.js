import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <button onClick={signInUsingGithub}>Github Sign In</button>
            <button onClick={signInUsingFacebook}>Facebook Sign In</button>
            {/* <button onClick={signInUsingTwitter}>Twitter Sign In</button> */}
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;