import React from 'react'
import {Routes,Route} from 'react-router-dom';
import {Product} from "../Components/product_page/Product";
import { ProductDetails } from '../Components/product_page/ProductDetails';
const AllRoutes = () => {
  return (
     <Routes>
        <Route path='/products' element={<Product/>} />
        <Route path='/products/:id' element={<ProductDetails/>}/>
     </Routes>
  )
}

export default AllRoutes