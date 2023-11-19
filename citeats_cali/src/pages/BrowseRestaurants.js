import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
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

  const handleCheckboxChange = (cuisine) => {
    setSelectedCuisines((prevCuisines) =>
      prevCuisines.includes(cuisine)
        ? prevCuisines.filter((c) => c !== cuisine)
        : [...prevCuisines, cuisine]
    );
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
      <Header />
      <div style={{ display: "flex" }}>
        <RestaurantSection style={{ width: "20%" }}>
          <FilterSection>
            <h2>Filter</h2>
            <h3>Cuisines</h3>
            {[
              "American", "Asian", "BBQ", "Beverages", "Bread", "Burgers", "Cakes", "Chicken",
              "Coffee", "Desserts", "Donut", "Fast Food", "Filipino", "Fish", "Fries", "Ice Cream",
              "Indian", "Italian", "Japanese", "Korean", "Pizza", "Sisig", "Western", "Noodles",
              "Lechon", "Milk Tea", "Meat",
            ].map((cuisine) => (
              <div key={cuisine}>
                <input
                  type="checkbox"
                  id={cuisine}
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => handleCheckboxChange(cuisine)}
                />
                <label htmlFor={cuisine}>{cuisine}</label>
              </div>
            ))}
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
            <CardRow>{renderRestaurantCards(5)}</CardRow>
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
