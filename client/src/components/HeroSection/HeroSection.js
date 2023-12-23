import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './style.css';
import Type from './Type';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className="headline">EXACT MATCH PERSONNEL</h1>
      <p>Your Journey, Your Opportunity</p>
      
      <div className='progressQuotes'>
      <br></br>
      <br></br>
      <Type />
      </div>
    </div>
  );
}

export default HeroSection;