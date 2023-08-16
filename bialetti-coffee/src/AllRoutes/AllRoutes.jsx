import React from 'react'
import {Routes,Route} from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Cart from '../Components/Cart/Cart';
import Product from "../Components/product_page/Product"
import Singup from "../Components/product_page/Login-SignUp/Signup"
import Login from "../Components/product_page/Login-SignUp/Login"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>}/>

        <Route path='/signup' element={<Singup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Product/>} />
    </Routes>
  )
}

export default AllRoutes
