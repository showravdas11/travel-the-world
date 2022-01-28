import { Alert, LinearProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, authError} = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <>
        <div className='d-flex justify-content-center mt-5'>
            <img src="http://www.ilcorsaronero.it/progettienvato/SiteParallax/ParallaxSite/site10/online/images/logo.png" alt=""/>
        </div>
        <div className='d-flex justify-content-center'>
        <h3 className='text-center login-head'>Please Register</h3>
        </div>
        <div className='register-form mt-5'>
            <div>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Name"
                                variant="standard"
                                name="name"
                                onChange={handleOnChange}
                            />
                            <br/>
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
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                name="password2"
                                variant="standard"
                                type="password"
                                onChange={handleOnChange}
                            />
                            <br/>
                            <button type="submit" className='Log-btn'>Register</button>
                            <br />
                            <Link to="/login" className='line'>already registerd? Please Login</Link>
            </form>}
            {isLoading && <LinearProgress color="success" />}
            {user?.email && <Alert severity="success">User created successfully</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </div>
        </div>
        </>
    );
};

export default Register;