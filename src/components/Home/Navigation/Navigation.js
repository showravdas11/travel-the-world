import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
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
{/* 
            {user?.email && (
              <li className="nav-item  fitpal-nav-item me-4">
                <Link className="nav-link topic" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )} */}

            {/* {user?.email ? (
              <button
                onClick={logOut}
                style={{ outline: 0, border: 0, borderRadius: "3px" }}
              >
                LogOut
              </button>
            ) : (
              <li className="nav-item fitpal-nav-item me-4">
                <Link className="nav-link topic login-btn" to="/login">
                  Login
                </Link>
              </li>
            )} */}
          </ul>

          {/* {user.email && (
            <div className="mx-3">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt=""
              />
              <span className="text-light">
                {" "}
                {user?.displayName} | {admin ? "Admin" : "Subscriber"}
              </span>
            </div>
          )} */}

          <div>
              <i class="fas fa-shopping-cart"></i>
          </div>
          <div>
              <button type="button">LOGIN</button>
          </div>
        </div>
      </div>
    </nav>
        </div>
        </>
    );
};

export default Navigation;