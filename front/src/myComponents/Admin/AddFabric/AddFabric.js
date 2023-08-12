// AddProductForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './AddFabric.css';
import { useNavigate } from 'react-router-dom';


const AddFabric = () => {

  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    id: 0,
    title: '',
    image: '',
    description: '',
    price: 0,
    stock: 0,
    discount: 0,
    fabricDensity: 0,
    fabricPorosity: 0,
    fabricBulkiness: 0,
    fabricThickness: 0,
    fabricStructure: 0,
    fabricPattern: 0,
  });

  const handleAddProduct = () => {
    axios.post('http://localhost:8080/api/products/', productData)
    .then((response) => {
      console.log('Product added:', response.data);
      // Reset form fields after successful submission
      setProductData({
        id: 0,
        title: '',
        image: '',
        description: '',
        price: 0,
        stock: 0,
        discount: 0,
        fabricDensity: 0,
        fabricPorosity: 0,
        fabricBulkiness: 0,
        fabricThickness: 0,
        fabricStructure: 0,
        fabricPattern: 0,
      });
    })
    .catch((error) => {
      console.error('Error adding product:', error);
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
    <div className="add-product-form-container">
      <h2>Add Product</h2>
      <div className="form-columns">
        <div className="form-column">
          <div>
            <h4>Product Title</h4>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={productData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h4>Product Description</h4>
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={productData.description}
              onChange={handleInputChange}
            />
          </div>
         
        </div>
        <div className="form-column">
          <div>
            <h4>Image URL</h4>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={productData.image}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h4>Product Price (₹/500meter)</h4>
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              value={productData.price}
              onChange={handleInputChange}
            />
          </div>
          {/* Add input fields with h4 tags for the rest of the properties */}
        </div>
      </div>
      <button className="submit-button" onClick={handleAddProduct}>
        Add Product
      </button>

      <button onClick={() => navigate('/admin')}> Admin </button>
    </div>
  );
};

export default AddFabric;
