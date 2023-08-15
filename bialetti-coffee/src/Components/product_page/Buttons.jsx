import React from "react";
import "./buttons.css";
export const Buttons = ({page,setPage,length}) =>{

  function handlePre (){
    setPage(page+1);
  }

  function handleNext(){
    setPage(page-1);
  }



    return (
        <div>
         <button id="b1" onClick={handlePre} disabled={page== -1}>{page}</button>
         <button id="b2" onClick={handleNext} disabled={page == Math.ceil(length/3)}>Next</button>
        </div>
    )
}