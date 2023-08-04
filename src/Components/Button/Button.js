import React from 'react';
import "./Button.scss";

export default function Button({text, type="gold"}) {

  return(
    <button className={"button button_"+type}>
      {text}
    </button>
  )
}