import React from "react";
// import style from "./card.modules.css";
import './card.css';
import { Link } from "react-router-dom";

export const Card = ({title,img,img2,id,price})=>{
    return (
        <div key={id} >
            <div  id="card_container" style={{margin:"10px",width:"300px", height:"400px"}} >
             <img src={img} style={{width:"100%"}} /> 
            
            </div>
        <Link to={`/products/${id}`} style={{textAlign:"left" ,paddingLeft:"10px",}}>{title}</Link>
        <p>{price}</p>
        </div>     
    )
}