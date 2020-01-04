import React from 'react';

const Alert = ({ message, success, error }) => (
  <div className={`Alert${success ? ' success' : error ? ' error' : ''}`}>{message}</div>
);

export default Alert;
