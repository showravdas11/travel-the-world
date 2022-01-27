import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import AboutUs from './components/AboutUs/AboutUs';
import BlogDetailPage from "./components/BlogDetailPage/BlogDetailPage";
import Home from "./components/Home/Home/Home";
import Navigation from './components/Home/Navigation/Navigation';
import ShareYourExperience from "./components/ShareYourExperience/ShareYourExperience";
function App() {
  return (
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
            <Route path="/detail/:detailId">
             <BlogDetailPage></BlogDetailPage>
            </Route>
            <Route path="/shareExperience">
             <ShareYourExperience></ShareYourExperience>
            </Route>
            
          </Switch>
        </BrowserRouter>
  );
}

export default App;
