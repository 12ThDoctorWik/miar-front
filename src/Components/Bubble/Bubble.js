import {React, useEffect} from 'react';
import "./Bubble.scss";

export default function Bubble({text, myId, anim}) {

  const exampleKeyframes = `
    #${myId} {
      animation-name: float_${myId};
      top: ${anim.start.top};
      left: ${anim.start.left};
    }
    @keyframes float_${myId} {
      0% {
        transform: translate(${anim.start.left}, ${anim.start.top})
      }
      50% {
        transform: translate(${anim.half.left}, ${anim.half.top})
      }
      100% {
        transform: translate(${anim.end.left}, ${anim.end.top})
      }
    }
  `;

  return(
    <>
      <style>{exampleKeyframes}</style>
      <div className="bubble" id={myId}>
        <div className="bubble__circle"></div>
        <div className="bubble__text">{text}</div>
      </div>
    </>
  )
}