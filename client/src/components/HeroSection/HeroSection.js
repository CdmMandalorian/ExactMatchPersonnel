import '../../App.css';
import Type from './Type';
import { Button } from '../Button/Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className="headline">EXACT MATCH PERSONNEL</h1>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          APPLY
        </Button>
      <div className='progressQuotes'>
      <br className='pq1'></br>
      <br className='pq2'></br>
      <Type />
      </div>
    </div>
  );
}

export default HeroSection;