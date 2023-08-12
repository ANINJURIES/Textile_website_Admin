// UpdateProduct.js

import React, { useState } from 'react';
import axios from 'axios';
import './UpdateFabric.css';
import { useNavigate } from 'react-router-dom';

const UpdateFabric = () => {
  const navigate = useNavigate()
  const [productData, setProductData] = useState({
    "id": '',
    "title": '',
    "description": '',
    "image": '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleUpdate = () => {
    console.log(productData)   

    axios
      .patch(`http://localhost:8080/api/products/${productData.id}`, productData)
      .then((response) => {
        setResponseMessage(response.data.message);
        setProductData({
          id: '',
          title: '',
          description: '',
          image: '',
        });
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        setResponseMessage('Error updating product');
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="update-product-container">
      <h2>Update Product</h2>
      <input
        type="text"
        name="id"
        placeholder="Database ID"
        value={productData.id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={productData.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Product Description"
        value={productData.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={productData.image}
        onChange={handleInputChange}
      />
      <button className="update-button" onClick={handleUpdate}>
        Update Product
      </button>

      <button onClick={() => navigate('/admin')}>Admin</button>
      <p className="response-message">{responseMessage}</p>
    </div>
  );
};

export default UpdateFabric;
