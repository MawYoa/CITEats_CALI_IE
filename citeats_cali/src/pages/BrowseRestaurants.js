import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const RestaurantCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  link {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  div {
    padding: 15px;
  }

  h4 {
    color: #333;
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    color: #777;
    margin: 5px 0;
  }
`;

const RestaurantSection = styled.div`
  margin: 20px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;

  /* Add the following styles for responsive wrapping */
  flex-wrap: wrap;

  /* Adjust the width based on the number of cards you want in each row */
  & > * {
    width: calc(20% - 20px); /* Adjust the width as needed */
    flex: 0 0 auto;
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0; /* Remove margin for the last card in the row */
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FilterSection = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const imageMapping = {
  1: "milkteahouse.jpg",
  2: "samueleatery.png",
  3: "tataysisig.png",
  4: "hazelbakery.jpg",
  5: "jasonlounge.jfif",
  6: "deliciousbite.jpg",
  7: "spicynoodlehouse.jfif",
  8: "mediterranean.jpg",
  9: "sushihaven.jpg",
  10: "tastytandoor.png",
  11: "seafood.jpg",
  12: "veggie.jpg",
  13: "bbqresto.jpg",
  14: "frenchbistro.webp",
  15: "burgerhaven.jpg",
  16: "healthtea.jpg",
  17: "Tex-Mex-Fiesta-Bake.jpg",
  18: "Cozy.jpg",
  19: "thai.jpg",
  20: "mongol.jpg",
  // Add more mappings as needed
};

const BrowseRestaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [cuisineTypes, setCuisineTypes] = useState([]);
  const [wildPickCards, setWildPickCards] = useState([]);
  const [topRatedCards, setTopRatedCards] = useState([]);
  const [allRestaurantsCards, setAllRestaurantsCards] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch cuisine types from the backend
    const fetchCuisineTypes = async () => {
      try {
        const response = await fetch("http://localhost:8080/cuisinetypes/getAllCuisineTypes");
        const data = await response.json();
        setCuisineTypes(data);
      } catch (error) {
        console.error("Error fetching cuisine types:", error);
      }
    };

    fetchCuisineTypes();
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    const fetchData = async () => {
      const wildPickData = await renderRestaurantCards(4);
      const topRatedData = await renderTopRatedRestaurants(10, selectedCuisines);
      const allRestaurantsData = await renderRestaurantCards(20);

      setWildPickCards(wildPickData);
      setTopRatedCards(topRatedData);
      setAllRestaurantsCards(allRestaurantsData);
    };

    fetchData();
  }, [searchTerm, selectedCuisines]); 

  const handleCheckboxChange = (cuisine) => {
    setSelectedCuisines((prevCuisines) =>
      prevCuisines.includes(cuisine)
        ? prevCuisines.filter((c) => c !== cuisine)
        : [...prevCuisines, cuisine]
    );
  };

  const renderCuisineCheckboxes = () => {
    return cuisineTypes.map((cuisine) => (
      <div key={cuisine.cuisineTypeId}>
        <input
          type="checkbox"
          id={cuisine.typeName}
          checked={selectedCuisines.includes(cuisine.typeName)}
          onChange={() => handleCheckboxChange(cuisine.typeName)}
        />
        <label htmlFor={cuisine.typeName}>{cuisine.typeName}</label>
      </div>
    ));
  };

  const renderTopRatedRestaurants = async (count, cuisines) => {
    try {
      const response = await axios.get("http://localhost:8080/restaurants/getAllRestaurants");
      const allRestaurants = response.data;

      // Filter top-rated restaurants
      const topRatedRestaurants = allRestaurants.filter((restaurant) => parseFloat(restaurant.rating) >= 4);

      // Filter top-rated restaurants based on selected cuisines
      const filteredTopRatedRestaurants = topRatedRestaurants
        .filter((restaurant) =>
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((restaurant) =>
        selectedCuisines.length === 0 || // If no cuisines selected, show all
        selectedCuisines.includes(restaurant.cuisineType)
        )
        .slice(0, count);

      return filteredTopRatedRestaurants.map((restaurant, index) => (
        <RestaurantCard key={index}>
          <Link to={`/RestaurantDetails/${restaurant.restaurantId}`} 
            state={{
              userId:location.state.userId,
              restaurantId:restaurant.restaurantId,
              userType:location.state.userType
              }}style={{ textDecoration: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/" + imageMapping[restaurant.restaurantId]}
              alt={`Restaurant ${index + 1}`}
            />
            <h4>{restaurant.name}</h4>
            <p style={{ fontSize: "14px" }}>{parseFloat(restaurant.rating).toFixed(1)}/5.0</p>
            <p style={{ fontSize: "14px" }}>{restaurant.cuisineType}</p>
            <p style={{ fontSize: "10px" }}>{restaurant.restaurantOpeningHours}</p>
          </Link>
        </RestaurantCard>
      ));
    } catch (error) {
      console.error("Error fetching top-rated restaurants:", error);
      return []; // Return an empty array in case of an error
    }
  };
  
  const renderRestaurantCards = async (count) => {
    try {
      const response = await axios.get("http://localhost:8080/restaurants/getAllRestaurants");
      const restaurants = response.data
        .filter(
          (restaurant) =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((restaurant) =>
          selectedCuisines.length === 0 || // If no cuisines selected, show all
          selectedCuisines.includes(restaurant.cuisineType)
        )
        .slice(0, count);

      return restaurants.map((restaurant, index) => (
        <RestaurantCard key={index}>
          <Link to={`/RestaurantDetails/${restaurant.restaurantId}`} state={{
              userId:location.state.userId,
              restaurantId:restaurant.restaurantId,
              userType:location.state.userType
              }}
              style={{ textDecoration: "none" }}>
            <img
              src={process.env.PUBLIC_URL + "/" + imageMapping[restaurant.restaurantId]}
              alt={`Restaurant ${index + 1}`}
            />
            <h4>{restaurant.name}</h4>
            <p style={{ fontSize: "14px" }}>{parseFloat(restaurant.rating).toFixed(1)}/5.0</p>
            <p style={{ fontSize: "14px" }}>{restaurant.cuisineType}</p>
            <p style={{ fontSize: "10px" }}>{restaurant.restaurantOpeningHours}</p>
          </Link>
        </RestaurantCard>
      ));
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      return []; // Return an empty array in case of an error
    }
  };

  return (
    <div>
      <Header userId={location.state.userId} userType={location.state.userType}/>
      <div style={{ display: "flex", fontFamily: "Kumbh Sans" }}>
        <RestaurantSection style={{ width: "20%" }}>
          <FilterSection>
            <h2>Filter</h2>
            <h3>Cuisines</h3>
            {renderCuisineCheckboxes()}
          </FilterSection>
        </RestaurantSection>

        <div style={{ marginLeft: "20px", width: "70%" }}>
          <br></br>
          <SearchBar
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <RestaurantSection>
            <h2>Wild Pick</h2>
            <CardRow>{wildPickCards}</CardRow>
          </RestaurantSection>

          <RestaurantSection>
            <h2>Top 10 Rated Restaurants</h2>
            <CardRow>{topRatedCards}</CardRow>
          </RestaurantSection>

          <RestaurantSection>
            <h2>All Restaurants</h2>
            <CardRow>{allRestaurantsCards}</CardRow>
          </RestaurantSection>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseRestaurants;
