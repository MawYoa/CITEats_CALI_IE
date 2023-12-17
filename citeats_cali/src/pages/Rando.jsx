import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route ,Routes} from 'react-router-dom'; // Update this line

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
import RestaurantOwnerLogin from './RestaurantOwnerLogin'
import ForgotPasswordResto from './ForgotPasswordResto';
import Header from '../components/Header';


const LoginContext = createContext()
export{
    LoginContext
}


export const App = () => {
    const [loggedIn, setLogin] = useState(false);

    const loginHandler = (ans) =>{
        setLogin(ans);
    }

    return(
        <>
        <LoginContext.Provider value={loggedIn}>
            <Header loginHandler={loginHandler}/>
            <Routes>
                <Route path="/" element={<GetStarted/>} />
                <Route path="/Login" element={<Login loginHandler={loginHandler}/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/BrowseRestaurants" element={<BrowseRestaurants/>} />
                <Route path="/Favorites" element={<Favorites/>} />
                <Route path="/JoinUs" element={<JoinUs/>} />
                <Route exact path="/UserProfile/:userId" element={<UserProfile/>} />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/ForgotPassword" element={<ForgotPassword/>} />
                <Route path="/ForgotPasswordResto" element={<ForgotPasswordResto/>} />
                <Route path="/RestaurantDetails/:restaurantId" element={<RestaurantDetails/>} />
                <Route path="/Reviews" element={<Reviews/>} />
                <Route path="/Menu" element={<Menu/>} />
                <Route path="/Food" element={<Food/>} />
                <Route path="/Ambience" element={<Ambience/>} /> 
                <Route path="/AboutUs" element={<AboutUs/>} /> 
                <Route path="/RestaurantProfile" element={<RestaurantProfile/>} /> 
                <Route path="/EditRestaurant/:restaurantId" element={<EditRestaurant/>} /> 
                <Route path="/GetStarted" element={<GetStarted/>} /> 
                <Route path="/RestaurantOwnerLogin" element={<RestaurantOwnerLogin/>}/> 
            </Routes>
        </LoginContext.Provider>
        </>
    )
}