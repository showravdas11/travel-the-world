import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import AboutUs from './components/AboutUs/AboutUs';
import BlogDetailPage from "./components/BlogDetailPage/BlogDetailPage";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Navigation from './components/Home/Navigation/Navigation';
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Login/Register/Register";
import ShareYourExperience from "./components/ShareYourExperience/ShareYourExperience";
import AuthProvider from "./context/AuthProvider/AuthProvider";
function App() {
  return (
       <AuthProvider>
         <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/detail/:detailId">
             <BlogDetailPage></BlogDetailPage>
            </PrivateRoute>
            <PrivateRoute path="/shareExperience">
             <ShareYourExperience></ShareYourExperience>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            
          </Switch>
        </BrowserRouter>
       </AuthProvider>
  );
}

export default App;
