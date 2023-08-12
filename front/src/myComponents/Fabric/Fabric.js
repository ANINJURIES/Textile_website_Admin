import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Fabric.css'

function Fabric() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  // price is not added 
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Render your component and make use of the fetched data
  return (
    <div>
      <h1>Fetched Data</h1>

      <div className='contnet_grid3_mtop'>
        {data.map((item, index) => {
          const { _id, id, title, description, image, price, stock, discount, fabricDensity, fabricPorosity, fabricBulkiness, fabricThickness, fabricStructure, fabricPattern } = item

          return (
            <>
              <div key={index}>


                <div className='image_box' key={index}>

                  <div className='id'>
                    <h4 className='id'> ID :{_id}</h4>
                  </div>

                  <div className='title'>
                    <img src={image} alt='Image' />
                  </div>

                  <div className='title'>
                    <h4 className='title'>{title}</h4>
                  </div>

                  <div className='desciption'>
                    <h6 className='desciption'>{description}</h6>
                  </div>


                </div>


              </div>


            </>
          )
        }




        )
        }






      </div>

    </div>
  );
}

export default Fabric;
