import React, { useState ,useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link, useLocation} from "react-router-dom";

const RestaurantCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  link{
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

const BrowseRestaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [cuisineTypes, setCuisineTypes] = useState([]);
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
  


  const renderRestaurantCards = (count) => {
    return Array.from({ length: count }, (_, index) => (
      
      <RestaurantCard key={index}>
        <Link to="/RestaurantDetails" style={{textDecoration:'none'}}>
        <img src={`chickfront${index + 1}.jpg`} alt={`Restaurant ${index + 1}`} />
        <h4>Restaurant {index + 1}</h4>
        <p>3.4/5 (300+)</p>
        <p>₱₱₱, Asian</p>
        </Link>
      </RestaurantCard>
    ));
  };


  return (
    
    <div>
      <Header userId={location.state.userId} />
      <div style={{ display: "flex" ,fontFamily: 'Kumbh Sans'}}>
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
            <CardRow>{renderRestaurantCards(4)}</CardRow>
          </RestaurantSection>

          <RestaurantSection>
            <h2>Top 10 Rated Restaurants</h2>
            <CardRow>{renderRestaurantCards(10)}</CardRow>
          </RestaurantSection>

          <RestaurantSection>
            <h2>All Restaurants</h2>
            <CardRow>{renderRestaurantCards(20)}</CardRow>
          </RestaurantSection>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseRestaurants;
