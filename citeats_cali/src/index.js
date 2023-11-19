import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Router, Route, Switch ,Routes} from 'react-router-dom'; // Update this line

import Home from './pages/Home';
import BrowseRestaurants from './pages/BrowseRestaurants';
import Favorites from './pages/Favorites';
import JoinUs from './pages/JoinUs';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import RestaurantDetails from './pages/RestaurantDetails';
import Reviews from './pages/Reviews';
import Menu from './pages/Menu';
import Food from './pages/Food';
import Ambience from './pages/Ambience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/BrowseRestaurants" element={<BrowseRestaurants/>} />
        <Route path="/Favorites" element={<Favorites/>} />
        <Route path="/JoinUs" element={<JoinUs/>} />
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/RestaurantDetails" element={<RestaurantDetails/>} />
        <Route path="/Reviews" element={<Reviews/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Food" element={<Food/>} />
        <Route path="/Ambience" element={<Ambience/>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 