import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BrowseRestaurants from './BrowseRestaurants';
import Favorites from './Favorites';
import JoinUs from './JoinUs';
import UserProfile from './UserProfile';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import RestaurantDetails from './RestaurantDetails';
import Reviews from './Reviews';
import Menu from './Menu';
import Food from './Food';
import Ambience from './Ambience';
import AboutUs from './AboutUs';
import GetStarted from './GetStarted';
import RestaurantProfile from './RestaurantProfile';
import EditRestaurant from './EditRestaurant';
import RestaurantOwnerLogin from './RestaurantOwnerLogin';
import ForgotPasswordResto from './ForgotPasswordResto';
import Header from '../components/Header';

const LoginContext = createContext();

export { LoginContext };

export const App = () => {
    const [userLoggedIn, setLogin] = useState(false);
    const [restoLoggedIn, setRestoLogin] = useState(false);

    const loginHandler = (ans) => {
        setLogin(ans);
    }

    const restoLoginHandler = (ans) => {
        setRestoLogin(ans);
    }

    return (
        <>
            <LoginContext.Provider value={{ userLoggedIn, restoLoggedIn }}>
                
                    <Routes>
                        <Route path="/" element={<GetStarted />} />
                        <Route path="/Login" element={<Login loginHandler={loginHandler}/>} />
                        <Route path="/Home" element={<Home loginHandler={loginHandler} restoLoginHandler={restoLoginHandler}/>} />
                        <Route path="/BrowseRestaurants" element={<BrowseRestaurants loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/Favorites" element={<Favorites loginHandler={loginHandler} restoLoginHandler={restoLoginHandler}/>} />
                        <Route path="/JoinUs" element={<JoinUs loginHandler={loginHandler} restoLoginHandler={restoLoginHandler}/>} />
                        <Route exact path="/UserProfile/:userId" element={<UserProfile loginHandler={loginHandler} />} />
                        <Route path="/Signup" element={<Signup loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/ForgotPassword" element={<ForgotPassword loginHandler={loginHandler} restoLoginHandler={restoLoginHandler}/>} />
                        <Route path="/ForgotPasswordResto" element={<ForgotPasswordResto loginHandler={loginHandler} restoLoginHandler={restoLoginHandler}/>} />
                        <Route path="/RestaurantDetails/:restaurantId" element={<RestaurantDetails loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/Reviews" element={<Reviews loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/Menu" element={<Menu loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/Food" element={<Food loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/Ambience" element={<Ambience loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/AboutUs" element={<AboutUs loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/RestaurantProfile" element={<RestaurantProfile restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/EditRestaurant/:restaurantId" element={<EditRestaurant loginHandler={loginHandler} restoLoginHandler={restoLoginHandler} />} />
                        <Route path="/RestaurantOwnerLogin" element={<RestaurantOwnerLogin loginHandler={loginHandler} restoLoginHandler={restoLoginHandler}/>} />
                    </Routes>
                
            </LoginContext.Provider>
        </>
    )
}
