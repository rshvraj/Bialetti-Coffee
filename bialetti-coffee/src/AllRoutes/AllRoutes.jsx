import React from 'react'
import {Routes,Route} from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Cart from '../Components/Cart/Cart';
// <<<<<<< HEAD
// import { Product } from '../Components/product_page/Product';
// import { ProductDetails } from '../Components/product_page/ProductDetails';

// =======
// import Product from "../Components/product_page/Product"
import Singup from "../Components/product_page/Login-SignUp/Signup"
import Login from "../Components/product_page/Login-SignUp/Login"
import Product from '../Components/product_page/Product';
import ProductDetails from '../Components/product_page/ProductDetails';
import Payment from '../Components/Payments/Payment';
// >>>>>>> 855974e2631aad89b871baa08011f8cbb19e5f5c

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Product/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
    </Routes>
  )
}

export default AllRoutes
