import React, { useState } from 'react';
import './DeleteFabric.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteFabric = () => {
  const [fabricId, setFabricId] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/products/${fabricId}`)
      .then((response) => {
        console.log("Product Deleted ", response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div className="delete-fabric-container">
      <h2>Delete Fabric Information</h2>
      <input
        type="text"
        placeholder="Enter Fabric ID"
        value={fabricId}
        onChange={(e) => setFabricId(e.target.value)}
      />
      <button className="delete-button" onClick={handleDelete}>
        Delete Fabric
      </button>

      <button className='home' onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default DeleteFabric;
