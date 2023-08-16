import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./productDetails.css";

export const ProductDetails = () => {

  let {id} = useParams();

  const[myData,setMyData] = useState({});
  
  const fetching = async (page)=>{
    try{ 
      const response = await axios.get(`https://bialetti-coffee.onrender.com/products/${id}`);
      console.log(response.data);
       setMyData(response.data)
    }
    catch(err){
        console.log(err);
    }
}


useEffect(()=>{
fetching();
},[])




const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

  return (
    <div id="card-wrapper">
        
    <div class = "card">
    <div class = "product-imgs">
      <div class = "img-display">
        <div class = "img-showcase">
          <img src = {myData.img} alt = "image"/>
          <img src = {myData.img2} alt = "image"/>
          <img src = {myData.img3} alt = "image"/>
          <img src = {myData.img4} alt = "image"/>
        </div>
      </div>
      <div class = "img-select">
        <div class = "img-item">
          <a href = "#" data-id = "1">
            <img src ={myData.img} alt = "image" />
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "2">
            <img src = {myData.img2} alt = "image"/>
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "3">
            <img src = {myData.img3} alt = "image"/>
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "4">
            <img src = {myData.img4} alt = "image"/>
          </a>
        </div>
      </div>
    </div>

    
    <div class = "product-content">
     <h2 class = "product-title">{myData.title}</h2>
     

      <div class = "product-detail">
        <h2>
          {myData.desc}
        </h2>  
      </div>

      <div class = "product-price">
        <p class = "last-price">Price: <span>{myData.price}</span></p>
      </div>

    </div>


   
  </div>
  <hr></hr>

  <div className="lower_div">
  <p><b>How to prepare coffee: </b> fill the boiler up to the safety valve with water, insert the funnel tank and add the ground coffee for moka without pressing; close the moka pot and place it on the hob. Wait for coffee to gurgle as it rises to the collector (upper chamber), turn off the gas and, finally, enjoy your delicious coffee!</p>
  <p><b>Cleaning instructions: </b>the Bialetti Venus should only be rinsed with water after each use. Do not use detergents.</p>
  </div>
  
</div>
  )
}
