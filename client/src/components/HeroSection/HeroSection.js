import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './style.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>EXACT MATCH PERSONNEL</h1>
      <p>Opportunity To Progress Awaits</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;