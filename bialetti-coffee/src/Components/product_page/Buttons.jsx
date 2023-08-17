import React from "react";
import "./buttons.css";
export const Buttons = ({page,setPage,fetching}) =>{

  function handlePre (){
    setPage(page-1);
    fetching(page);
  }

  function handleNext(){
    setPage(page+1);
    fetching(page);
  }



    return (
        <div className="button_div">
         <button id="b1" onClick={handlePre} >Previous</button>
         <button id="b2" onClick={handleNext} >Next</button>
        </div>
    )
}