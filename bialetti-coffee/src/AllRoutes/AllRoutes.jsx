import React from 'react'
import {Routes,Route} from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Cart from '../Components/Cart/Cart';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        {/* <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp/>}/> */}
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes
