import React from 'react';
import './Business.css';

const Business = ({ business }) => {
  const googleMapsUrl = `https://www.google.com/maps/place/${business.address}, ${business.city}, ${business.state} ${business.zipCode}`;

  return (
    <div className='Business'>
      <div className='image-container'>
        <a href={business.website} target='_blank' rel='noopener noreferrer'>
          <img src={business.imageSrc} alt='Business'/>
        </a>
      </div>
      <h2>{business.name}</h2>
      <div className='Business-information'>
        <div className='Business-address'>
          <p>
            <a href={googleMapsUrl} target='_blank' rel='noopener noreferrer'>{business.address}</a>
          </p>
          <p>{business.city}</p>
          <p>{business.state} {business.zipCode}</p>
        </div>
        <div className='Business-reviews'>
          <h3>{business.category}</h3>
          <h3 className='rating'>{business.rating}</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
