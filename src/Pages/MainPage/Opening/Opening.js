import React from 'react';
import './Opening.scss';
import MPBlock from '../../../Modules/MainPage//MPBlock/MPBlock.js';

export default function Opening() {
  return (
    <div className="opening container">
      <div class="bg smoke-bg"></div>
      <div class="bg smoke"></div>
      <MPBlock />
    </div>
  );
}
