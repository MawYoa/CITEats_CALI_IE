import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";

const UserProfileContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 10px;
  font-family: 'Kumbh Sans';
  padding: 10px;
`;

const UserProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: maroon;
  color: #fff;
  padding: 10px;
  border-radius: 0px;
  height: 200px;
  width: 200px;
  margin-right: 10px;
`;

const UserProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
  align-self: center;
`;

const UserProfileButton = styled.button`
  width: 170px;
  height: 30px;
  font-weight: bold;
  font-size: 14px;
  background-color: gold;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    background-color: #FFC78F;
  }
`;

const UserProfileInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

const UserProfileInfo = styled.div`
  
  margin-left: 250px;
  padding: 20px;
  width: 1800px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;

`;

const UserProfileInfoHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const UserProfileInfoItem = styled.div`
  margin-bottom: 10px;
  margin-top: 5px;
`;

const UserProfileInfoLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
`;

const UserProfileInfoValue = styled.div`
  font-size: 18px;
  max-height: 300px;
  overflow-y: auto;
`;

const MenuItemContainer = styled.div`
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: white;
  border: 2px solid black;
  padding: 10px;
  max-height: 150px;
  overflow-y: auto;
`;

const CommonBorder = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
`;

const UserProfileInfoItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 5px;
`;

const UserReviewsContainer = styled.div`
  width: 100%;
  text-align: left;
  max-height: 300px;
  overflow-y: auto;
  padding: 0 10px;
  height: 300px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  border-bottom: 2px solid black;
  margin-bottom: 5px;
`;

const ReviewsHeader = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
`;

const Review = styled.div`
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: white;
  border: 2px solid black;
  padding: 10px;
`;
const CuisineTypeDropdown = styled.select`
  width: 150px; // Adjust the width as needed
  padding: 10px;
`;
const Star = styled.span`
  font-size: 18px;
  color: yellow;
`;

const ReviewRating = styled.span`
  font-size: 16px;
  margin-right: 50px;
  text-align: left;
`;

const ReviewText = styled.p`
  font-size: 16px;
`;

const AdditionalTextBelowUserProfile = styled.p`
  font-size: 18px;
  text-align: left;
`;

const AdditionalTextContainer = styled.div`
  margin-top: -350px;
  position: absolute;
  left: 10px;
  font-weight: bold;
`;

const AddMenuItemButton = styled.button`
  width: 150px;
  height: 30px;
  font-weight: bold;
  font-size: 14px;
  background-color: gold;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #FFC78F;
  }
`;

const AddMenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

  
  const EditRestaurant = () => {
    const [restaurantData, setRestaurantData] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [restaurantName, setrestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [restaurantOpeningHours, setrestaurantOpeningHours] = useState('');
    const { restaurantId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [editableMenuItemId, setEditableMenuItemId] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedPrice, setEditedPrice] = useState('');
    const [editingMenuItem, setEditingMenuItem] = useState(null);
    const location = useLocation('');
    const [selectedCuisineType, setSelectedCuisineType] = useState('');
    const [cuisineTypes, setCuisineTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/cuisinetypes/getAllCuisineTypes');
        
        // Extract the 'typeName' values from the response data
        const cuisineTypeNames = result.data.map((cuisineType) => cuisineType.typeName);

        // Set the cuisineTypeNames to your state
        setCuisineTypes(cuisineTypeNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get(`http://localhost:8080/restaurants/${restaurantId}`); // Update the API endpoint
          setRestaurantData(result.data);
  
          // Set the initial values, handling the case where they might be null or undefined
          setrestaurantName(result.data.restaurantName ?? '');
          setAddress(result.data.address ?? '');
          setCuisineType(result.data.cuisineType ?? '');
          setPhoneNumber(result.data.phoneNumber ?? '');
          setrestaurantOpeningHours(result.data.restaurantOpeningHours ?? '');
          setWebsite(result.data.website ?? '');

        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handlerestaurantNameChange = (e) => {
      setrestaurantName(e.target.value);
    };
  
    const handleWebsiteChange = (e) => {
      setWebsite(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
  
    const handleCuisineTypeChange = (e) => {
      setCuisineType(e.target.value);
    };
  
    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    const handlerestaurantOpeningHoursChange = (e) => {
      setrestaurantOpeningHours(e.target.value);
    };
  
    const handleToggleEdit = () => {
      setEditMode(!editMode);
    };
  
    const handleSaveProfile = async () => {
      try {
        const response = await axios.put(`http://localhost:8080/restaurants/updateRestaurantsProfile/${restaurantId}`, {
          
          restaurantId: restaurantData.restaurantId,
          restaurantName,
          website,
          address,
          cuisineType,
          phoneNumber,
          restaurantOpeningHours,
        });
  
        // Update the restaurant data state using the response data
        setRestaurantData(response.data);
  
        handleToggleEdit(); // Toggle back to view mode after saving
      } catch (error) {
        console.error(error);
      }
    };
  
    console.log(reviews);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get('http://localhost:8080/cuisinetypes/getAllCuisineTypes');
          
          // Extract the 'typeName' values from the response data
          const cuisineTypeNames = result.data.map((cuisineType) => cuisineType.typeName);
    
          // Set the cuisineTypeNames to your state
          setCuisineTypes(cuisineTypeNames);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const reviewsResult = await axios.get(`http://localhost:8080/reviews/getReviewsByRestaurantId/${restaurantId}`);
          const filteredReviews = reviewsResult.data.filter(review => {
            console.log('Review.restaurantId Type:', typeof review.restaurantId);
            console.log('restaurantId Type:', typeof restaurantId);
            return review.restaurantId.toString() === restaurantId;
          });
          
          console.log('Filtered Reviews:', filteredReviews);
          setReviews(filteredReviews);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, [restaurantId]);

    useEffect(() => {
      console.log(restaurantId);
      const fetchMenuItems = async () => {
        try {
          const result = await axios.get(`http://localhost:8080/menuitems/getByRestaurantId/${restaurantId}`);
          setMenuItems(result.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchMenuItems();
    }, [restaurantId]);

    const [newMenuItem, setNewMenuItem] = useState({
      name: '',
      description: '',
      price: 0,
    });
    

    const handleNewMenuItemChange = (e) => {
      const { name, value } = e.target;
      setNewMenuItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    };
    

    const handleAddMenuItem = async () => {
      // Check if any of the required fields are missing
      if (!newMenuItem.name || !newMenuItem.description || !newMenuItem.price) {
        alert("Please fill in all required fields.");
        return;
      }
    
      // Display a confirmation dialog
      const confirmAdd = window.confirm("Are you sure you want to add this menu item?");
    
      if (confirmAdd) {
        try {
          // Assuming you have an API endpoint to add a new menu item
          const response = await axios.post('http://localhost:8080/menuitems/createMenuItem', {
            // Pass the new menu item data to the backend
            name: newMenuItem.name,
            description: newMenuItem.description,
            price: newMenuItem.price,
            restaurantId, // You may need to add the restaurant ID as well
          });
    
          // Assuming your backend returns the newly added menu item
          const addedMenuItem = response.data;
    
          // Update the menu items state
          setMenuItems([...menuItems, addedMenuItem]);
    
          // Clear the form fields
          setNewMenuItem({
            name: '',
            description: '',
            price: 0,
          });
    
          alert('Menu item created successfully!');
        } catch (error) {
          console.error(error);
        }
      }
    };
    
    const handleUpdateMenuItem = (menuItem) => {
      setEditableMenuItemId(menuItem.menuItemId);
      setEditedName(menuItem.name);
      setEditedDescription(menuItem.description);
      setEditedPrice(menuItem.price);
    };

    const handleSaveMenuItemUpdate = async () => {
      try {
        // Assuming you have an API endpoint to update a menu item
        const response = await axios.put(`http://localhost:8080/menuitems/updateMenuItem/${restaurantId}`, {
          menuItemId: editableMenuItemId,
          name: editedName,
          description: editedDescription,
          price: editedPrice,
        });
  
        // Update the menu items state with the updated menu item
        setMenuItems((prevMenuItems) =>
          prevMenuItems.map((item) =>
            item.menuItemId === editableMenuItemId
              ? { ...item, name: editedName, description: editedDescription, price: editedPrice }
              : item
          )
        );
  
        // Reset inline editing state
        setEditableMenuItemId(null);
        setEditedName('');
        setEditedDescription('');
        setEditedPrice('');
      } catch (error) {
        console.error(error);
      }
    };

    const handleDeleteMenuItem = async (menuItemId) => {
      // Display a confirmation dialog
      const isConfirmed = window.confirm('Are you sure you want to delete this menu item?');
    
      if (!isConfirmed) {
        // If not confirmed, do nothing
        return;
      }
    
      try {
        // Assuming you have an API endpoint to soft delete a menu item
        const response = await axios.put(`http://localhost:8080/menuitems/softDeleteMenuItem/${menuItemId}`);
    
        if (response.data.status === 'success') {
          // Update the menu items state after soft deletion
          setMenuItems((prevMenuItems) => prevMenuItems.filter((item) => item.menuItemId !== menuItemId));
          alert(response.data.message); // Display a success message
        } else {
          alert(response.data.message); // Display an error message
        }
      } catch (error) {
        console.error(error);
        handleCancelUpdate();
      }
    };

    const handleCancelUpdate = () => {
      // Display a confirmation dialog
      const isConfirmed = window.confirm('Are you sure you want to cancel the update? Any unsaved changes will be lost.');
    
      if (isConfirmed) {
        // User confirmed, reset the editing state
        setEditingMenuItem(null);
        setEditableMenuItemId(null);
        setEditedName('');
        setEditedDescription('');
        setEditedPrice('');
      }
    };
    

  return (
    <div> 
      <Header restaurantId={location.state.restaurantId} restaurantName={location.state.restaurantName}/>
      <UserProfileContainer>
   
        <UserProfileInfo>
        <UserProfileInfoContainer>
            <UserProfileInfoHeader>General Information</UserProfileInfoHeader>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserProfileButton onClick={handleToggleEdit} style={{ marginRight: '10px' }}>
                {editMode ? 'Cancel Changes' : 'Edit Profile'}
              </UserProfileButton>
              {editMode && (
                <UserProfileButton onClick={handleSaveProfile}>
                  Save Changes
                </UserProfileButton>
              )}
            </div>
          </UserProfileInfoContainer>
          <UserProfileInfoItem>
          <UserProfileInfoLabel>Restaurant Name:</UserProfileInfoLabel>
          {editMode ? (
            <input
              type="text"
              value={restaurantName}
              placeholder={restaurantData.restaurantName}
              onChange={handlerestaurantNameChange}
            />
          ) : (
            <UserProfileInfoValue>{restaurantData.restaurantName}</UserProfileInfoValue>
          )}
        </UserProfileInfoItem>
          <UserProfileInfoItem>
          <UserProfileInfoLabel>Website:</UserProfileInfoLabel>
          {editMode ? (
            <input
              type="text"
              value={website}
              placeholder={restaurantData.website}
              onChange={handleWebsiteChange}
            />
          ) : (
            <UserProfileInfoValue>{restaurantData.website}</UserProfileInfoValue>
          )}
        </UserProfileInfoItem>
        <UserProfileInfoItem>
          <UserProfileInfoLabel>Address:</UserProfileInfoLabel>
          {editMode ? (
            <input
              type="text"
              value={address}
              placeholder={restaurantData.address}
              onChange={handleAddressChange}
            />
          ) : (
            <UserProfileInfoValue>{restaurantData.address}</UserProfileInfoValue>
          )}
          </UserProfileInfoItem>
          
          <UserProfileInfoItem>
            <UserProfileInfoLabel>CuisineType:</UserProfileInfoLabel>
            {editMode ? (
              <CuisineTypeDropdown
                value={cuisineType}
                onChange={(e) => handleCuisineTypeChange(e)}
              >
                <option value="" disabled>Select Cuisine Type</option>
                
                {cuisineTypes.map((cuisineType) => (
                  <option key={cuisineType} value={cuisineType}>
                    {cuisineType}
                  </option>
                ))}
              </CuisineTypeDropdown>
            ) : (
              <UserProfileInfoValue>{restaurantData.cuisineType}</UserProfileInfoValue>
            )}
          </UserProfileInfoItem>
              <UserProfileInfoItem>
                <UserProfileInfoLabel>Opening Hours:</UserProfileInfoLabel>
                {editMode ? (
                  <input
                    type="text"
                    value={restaurantOpeningHours}
                    placeholder={restaurantData.restaurantOpeningHours}
                    onChange={handlerestaurantOpeningHoursChange}
                  />
                ) : (
                  <UserProfileInfoValue>{restaurantData.restaurantOpeningHours}</UserProfileInfoValue>
                )}
              </UserProfileInfoItem>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1>Add Menu Items</h1>
                <AddMenuItemButton onClick={handleAddMenuItem}>
                  Add New Item
                </AddMenuItemButton>
              </div>
              <Line />

              {/* Form to Create a New Menu Item */}
              <UserProfileInfoItemContainer>
                <UserProfileInfoLabel>Create New Menu Item:</UserProfileInfoLabel>
                <form>
                  <label style={{ marginTop: '10px' }}>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={newMenuItem.name}
                      onChange={handleNewMenuItemChange}
                    />
                  </label>
                  <label>
                    Description:
                    <input
                      type="text"
                      name="description"
                      value={newMenuItem.description}
                      onChange={handleNewMenuItemChange}
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="number"
                      name="price"
                      value={newMenuItem.price}
                      onChange={handleNewMenuItemChange}
                    />
                  </label>
                </form>
              </UserProfileInfoItemContainer>
              <h1>Your Menu Items</h1>
            <Line />
            <table style={{ width: '100%', borderCollapse: 'collapse' ,fontSize:'12px'}}>
              <thead>
                <tr>
                  <th>Menu Item Id</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((menuItem) => (
                  <tr key={menuItem.menuItemId}>
                    <td>{menuItem.menuItemId}</td>
                    <td>{menuItem.name}</td>
                    <td>{menuItem.description}</td>
                    <td>{menuItem.price}</td>
                    <td>
                      {editableMenuItemId === menuItem.menuItemId ? (
                        <div>
                          <div>
                            <label>Name:</label>
                            <input
                              type="text"
                              value={editedName}
                              onChange={(e) => setEditedName(e.target.value)}
                            />
                          </div>
                          <div>
                            <label>Description:</label>
                            <textarea
                              value={editedDescription}
                              onChange={(e) => setEditedDescription(e.target.value)}
                            />
                          </div>
                          <div>
                            <label>Price:</label>
                            <input
                              type="number"
                              value={editedPrice}
                              onChange={(e) => setEditedPrice(e.target.value)}
                            />
                          </div>
                          <button
                            style={{
                              backgroundColor: 'green',
                              color: 'white',
                              padding: '8px 15px',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              marginTop: '10px',
                            }}
                            onClick={handleSaveMenuItemUpdate}
                          >
                            Save
                          </button>
                          <button
                            style={{
                              backgroundColor: 'red',
                              color: 'white',
                              padding: '8px 15px',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              marginLeft: '5px',
                            }}
                            onClick={handleCancelUpdate}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            style={{
                              backgroundColor: '#4a7c47',
                              color: 'white',
                              padding: '8px 15px',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              marginRight: '5px',
                            }}
                            onClick={() => handleUpdateMenuItem(menuItem)}
                          >
                            Update
                          </button>
                          <button
                            style={{
                              backgroundColor: 'red',
                              color: 'white',
                              padding: '8px 15px',
                              borderRadius: '5px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleDeleteMenuItem(menuItem.menuItemId)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ReviewsHeader>Your Restaurant Reviews</ReviewsHeader>
            <UserReviewsContainer>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Date Posted</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.reviewId}>
                      <td>{review.userId}</td>
                      <td>
                        <Star>⭐</Star> {review.rating}
                      </td>
                      <td>{review.comment}</td>
                      <td>{new Date(review.datePosted).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </UserReviewsContainer>

        </UserProfileInfo>
      </UserProfileContainer>

      <Footer />
    </div>
  );
};

export default EditRestaurant;