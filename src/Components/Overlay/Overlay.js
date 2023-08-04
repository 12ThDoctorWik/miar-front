import React from 'react';
import "./Overlay.scss";

export default function Overlay() {

  function hidePopups(event){
    document.getElementById("popupAuth").classList.remove("popupAuth_open");
    // [...document.getElementsByClassName("popup")].map((el)=>{
    //   el.style.display = "none"
    //   return null;
    // })
    event.target.style.display = "none";
  }

  return(
    <div id="overlay" className='overlay' onClick={hidePopups}></div>
  )
}