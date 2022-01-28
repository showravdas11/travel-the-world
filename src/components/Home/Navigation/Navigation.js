import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
  const { user, logout, admin } = useAuth();
    return (
        <>
        <div>
             <nav class="navbar navbar-expand-lg header-nav shadow-lg">
      <div class="container-fluid">
        <img
          src="http://www.ilcorsaronero.it/progettienvato/SiteParallax/ParallaxSite/site10/online/images/logo.png"
          alt=""
          width="200"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
                <Link to="/home" className="nav-link topic">
                Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/about" className="nav-link topic">
                About Us</Link>
            </li>
            <li class="nav-item">
                <Link to="/shareExperience" className="nav-link topic">
                Share Your Experience</Link>
            </li>
            {admin && (
              <li className="nav-item  fitpal-nav-item me-4">
                <Link className="nav-link topic" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          <div className='d-flex justify-content-center'>
          {
                                user?.email ?
                                    <button className="dash-btn mx-2" onClick={logout}>Logout</button> :
                                    <Link className="dash-link" to="/login"><button className="dash-btn">Login</button></Link>
                            }

{user.email && (
            <div className="mx-3">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt=""
              />
              <span className="text-light">
                {" "}
                {user?.displayName}
              </span>
            </div>
          )}
          </div>
        </div>
      </div>
    </nav>
        </div>
        </>
    );
};

export default Navigation;