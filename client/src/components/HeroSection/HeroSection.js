import React from 'react';
import '../../App.css';
import './style.css';
import Type from './Type';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className="headline">EXACT MATCH PERSONNEL</h1>
      <div className='progressQuotes'>
      <br className='pq1'></br>
      <br className='pq2'></br>
      <Type />
      </div>
    </div>
  );
}

export default HeroSection;