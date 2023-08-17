import React from 'react';
import './Opening.scss';
import MPBlock from '../../../Modules/MainPage//MPBlock/MPBlock.js';

export default function Opening() {
  return (
    <div className="opening container">
      <div className="bg smoke-bg"></div>
      <div className="bg smoke"></div>
      <MPBlock />
    </div>
  );
}
