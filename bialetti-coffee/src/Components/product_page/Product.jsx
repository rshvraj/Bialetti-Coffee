import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import { Buttons } from "./Buttons";
import './product.css';
import { Title } from "./Title";



 const Product = ()=>{
    const[data,setData] = useState([]);
    const[filterBy,setFilterBy] = useState("");
    const[sortBy,setSortBy] = useState("");
    const[page,setPage] = useState(1);
    

    const myApi = (url,filterBy,sortBy)=>{
        if(filterBy){
            return `${url}&category=${filterBy}`   
        }
        else if(sortBy){
            return `${url}&_sort=${sortBy}&_order=asc`
        }
        return url;
    }
    
    const fetching = async ()=>{
        try{ 
          const myUrl = myApi(`https://bialetti-coffee.onrender.com/products?_page=${page}&_limit=6`,filterBy,sortBy);
          const response = await axios.get(myUrl);
        //   console.log(response);
          setData(response.data)
        }
        catch(err){
            console.log(err);
        }
    }

    const length = data.length;

   useEffect(()=>{
   fetching();
   },[filterBy,sortBy])
   
   const handleGroundsFilter = ()=>{
    setFilterBy("Grounds");
 }
 
   const handleMugsFilter = ()=>{
    setFilterBy("Mugs");
 }
 const handleMakersFilter = ()=>{
  setFilterBy("Coffee Makers");
}
const handleAccessFilter = ()=>{
  setFilterBy("Accesseries");
}

    return(
        <div id="Main_div">
            <label style={{paddingLeft:"68%"}}>
          Sort by:
          <select className="sort-by" onChange={(b)=>{
            setSortBy(b.target.value)
          }}>
            <option value="">Select an option</option>
            <option value="title">Name</option>
            <option value="price">Price</option>
          </select>
        </label>
        <div id="Main_Container" style={{display:"flex",justifyContent:"space-around"}}>

        <div id="filter_container">
        {/* <label>Filter-by : */}
        <h1>Filter by :</h1>
        <h3 value="Grounds" onClick={handleGroundsFilter} style={{cursor:"pointer"}}>Grounds</h3>
        <h3 value="Mugs" onClick={handleMugsFilter} style={{cursor:"pointer"}}>Mugs</h3>
        <h3 value="Mugs" onClick={handleMakersFilter} style={{cursor:"pointer"}}>Coffee Makers</h3>
        <h3 value="Mugs" onClick={handleAccessFilter} style={{cursor:"pointer"}}>Accesseries</h3>
        {/* </label> */}
        </div>

    <div  style={{display:"grid" ,gridTemplateColumns:"repeat(3,1fr)",marginTop:"20px"}} >
        {
            data.map((elem)=>(
                <Card  key={elem.id}{...elem} /> 
            ))    
            
        }  
    </div>
    </div>
    <Buttons length={length} setPage={setPage} page={page}/>
    </div>
    )
}

export default Product;