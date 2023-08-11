import React from 'react'
import {Routes,Route} from 'react-router-dom';
import HomePage from '../Home/HomePage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        {/* <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp/>}/> */}
    </Routes>
  )
}

export default AllRoutes
