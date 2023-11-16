import React from 'react';
import './style.css';
import CardItem from '../CardItem/CardItem';

function Services() {
  return (
    <div className='cards'>
      <h1>SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jana-bemol-uh_eCMdG5Z0-unsplash.jpg'
              text='Exact Match Personnel values your Conection, Time and Energy. We are Open and Understanding. '
              label='Connection'
              
            />
            <CardItem
              src='images/claudio-schwarz-L8iPDE99z9c-unsplash.jpg'
              text='Safety is A Priority. We Will Establish Safety Protocols to Mantain High Safety Standards.'
              label='Safety'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/lindsay-henwood-7_kRuX1hSXM-unsplash.jpg'
              text='Clear Pathways for Proggression '
              label='Progress'
              
            />
            <CardItem
              src='images/marko-petek-tuxGxnwZP4A-unsplash.jpg'
              text='Committed From Iception'
              label='Commitment'
              
            />
            <CardItem
              src='images/federico-beccari-ahi73ZN5P0Y-unsplash.jpg'
              text='A Diverse Range of Connections'
              label='Diverse'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;