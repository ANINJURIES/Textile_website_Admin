import React from 'react'
// import Product from './myComponents/Product' 
import Lander from './myComponents/Home/Lander'
import Fabric from './myComponents/Fabric/Fabric'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './myComponents/Admin/Dashboard/Admin';
import AddFabric from './myComponents/Admin/AddFabric/AddFabric';
import UpdateFabric from './myComponents/Admin/UpdateFabric/UpdateFabric';
import ReplaceFabricInfo from './myComponents/Admin/ReplaceFabricInfo/ReplaceFabricInfo';
import DeleteFabric from './myComponents/Admin/DeleteFabric/DeleteFabric';
import Auth from './myComponents/Auth/Auth';




const App = () => {
  return (
    <>
     <Router>
      <Routes>
        
        <Route path="/" exact element={<Lander/>} />
        <Route path="/lander"  element={<Lander/>} />
        <Route path="/fabric" element={<Fabric/>} />
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/addfabric" element={<AddFabric/>}/>
        <Route path="/admin/updateinfo" element={<UpdateFabric/>}/>
        <Route path="/admin/replaceinfo" element={<ReplaceFabricInfo/>}/>
        <Route path="/admin/deletefabric" element={<DeleteFabric/>}/>

      </Routes>
    </Router>
      
    </>
  )
}

export default App