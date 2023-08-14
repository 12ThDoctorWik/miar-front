import React from "react";
import "./Navigate.scss";

export default function Navigate({changeInfo}) {

  function setNewInfo(id) {
    switch(id){
      case 'navigate__players':
        changeInfo('players')
        break;
      case 'navigate__dm':
        changeInfo('dm')
        break;
      case 'navigate__clubs':
        changeInfo('clubs')
        break;
      default:
        break;
    }
  }

  function handleClick(event) {
    let elem = event.target;
    if(!elem.classList.contains("navigate__block")) elem = elem.parentNode;

    let parent = elem.parentNode;
    [...parent.children].map((el)=>{
      if(el.classList.contains("navigate__block_active")){
        el.classList.remove("navigate__block_active");
      }
    })

    elem.classList.add("navigate__block_active");

    setNewInfo(elem.id)
  }

  return (
    <div className="navigate">
      <div
        className="navigate__block navigate__block_active"
        onClick={handleClick} id="navigate__players"
      >
        Для гравців
      </div>
      <div className="navigate__block" onClick={handleClick} id="navigate__dm">
        Для ДМ
      </div>
      <div className="navigate__block" onClick={handleClick} id="navigate__clubs">
        Для Клубів
      </div>
    </div>
  );
}
