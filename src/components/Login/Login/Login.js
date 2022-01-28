import { Alert, LinearProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, signInWithGoogle, authError} = useAuth()

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser (loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history)
    }
    return (
        <>
        <div className='d-flex justify-content-center mt-5'>
            <img src="http://www.ilcorsaronero.it/progettienvato/SiteParallax/ParallaxSite/site10/online/images/logo.png" alt=""/>
        </div>
        <div className='d-flex justify-content-center'>
        <h3 className='text-center login-head'>Please Login</h3>
        </div>
        <div className='login-form mt-5'>
        <div>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                name="email"
                                type='email'
                                onChange={handleOnChange}
                            />
                            <br />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                variant="standard"
                                type="password"
                                onChange={handleOnChange}
                            />
                            <br />
                            <div className='d-flex justify-content-center'>
                            <button type="submit" className='Log-btn'>Login</button>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <button onClick={handleGoogleSignIn} type="submit" className='google-btn'>Google Sign In</button>
                            </div>
                            <br />
                            <Link to="/register" className='line'>New user? Please register</Link>
            </form>}
            {isLoading && <LinearProgress color="success" />}
            {user?.email && <Alert severity="success">User created successfully</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </div>
        </div>
        </>
    );
};

export default Login;