import React from "react";
import "./buttons.css";
export const Buttons = ({page,setPage,length,fetching}) =>{

  function handlePre (e){
    e.preventDefault();
    setPage((pre)=>pre-1);
    fetching(page);
  }

  function handleNext(e){
    e.preventDefault();
    setPage((pre)=>pre+1);
    fetching(page);
  }

 console.log(page);

    return (
        <div>
         <button id="b1" onClick={handlePre} disabled={page== 1}>Pre</button>
         <button id="b2" onClick={handleNext} disabled={page == Math.ceil(length/3)}>Next</button>
        </div>
    )
}