import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    console.log("came from", location.state?.from)

    const redirect_uri = location.state?.from || '/home'; //jodi direct aikhane login page a ashe
    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
    );
};

export default Login;