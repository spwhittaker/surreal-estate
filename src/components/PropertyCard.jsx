import React, { Component } from 'react';
import { NONAME } from 'dns';

const PropertyCard = ({ email, price, bedrooms, city, title, type, bathrooms }) => (
  <div>
    <h1>{title}</h1>
    <p>
      {type} - {city}
    </p>
    <p>{bedrooms} bedrooms</p>
    <p>{bathrooms} bathrooms</p>
    <p>£{price}</p>
    <p style={{ display: 'none' }}>{email}</p>
  </div>
);

export default PropertyCard;
