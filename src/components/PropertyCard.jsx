import React, { Component } from 'react';
import '../Styles/PropertyCard.css';
import PropTypes from 'prop-types';

const PropertyCard = ({ email, price, bedrooms, city, title, type, bathrooms, userID }) => (
  <div className="PropertyCard">
    <h1>{title}</h1>
    <p>
      {type} - {city}
    </p>
    <p>{bedrooms} bedrooms</p>
    <p>{bathrooms} bathrooms</p>
    <p>£{price}</p>
    <p style={{ display: 'none' }}>{email}</p>
    {userID && <button>Save</button>}
  </div>
);

export default PropertyCard;
