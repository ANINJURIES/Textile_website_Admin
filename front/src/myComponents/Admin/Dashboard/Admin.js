import React from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MenuIcon from '@mui/icons-material/Menu';

const Admin = () => {
  const navigate = useNavigate();

  const addhandler = () => {
    return (
      navigate('/admin/addfabric')
    )
  }
  
  const deletehandler = () => {
    return (
      navigate('/admin/deletefabric')
    )
  }
  
  const updatehandler = () => {
    return (
      navigate('/admin/updateinfo')
    )
  }
  
  const replacehandler = () => {
    return (
      navigate('/admin/replaceinfo')
    )
  }

  const allhandler = () => {
    return (
      navigate('/fabric')
    )
  }

  const Homehandler = () =>{
    return (
      navigate('/lander')
    )
  }

  return (
    <>
      <h1>Admin</h1>

      <div className='adminNav'>
        <MenuIcon/>
        <h2 className='textadmin'> Admin Dashboard</h2>
      </div>

      <div className='buttons'>

        <div>

        <AddBoxIcon/>
        <button className='btn' onClick={addhandler} > Add Fabric</button>

        </div>

        <div>

        <DeleteForeverIcon/>
        <button className='btn' onClick={deletehandler} > Delete Fabric</button>

        </div>

        <div>

        <ChangeCircleIcon/>
        <button className='btn' onClick={updatehandler} > Update Fabric data</button>

        </div>

        <div>

        <UpdateIcon/>
        <button className='btn' onClick={replacehandler} > Replace Fabric data</button>

        </div>

        <div>

        <CheckroomIcon/>
        <button className='btn' onClick={allhandler}> Show all listed Fabrics</button>

        </div>

        <div>
          <button id='home' onClick={Homehandler}>Home</button>
        </div>
      </div>  

      {/* <div className='innersection'> 
        <h2>Admin inner section</h2>
      </div> */}
    
    </>
  )
}

export default Admin