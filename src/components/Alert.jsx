/* import React from 'react';

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Alert">{this.props.message}</div>;
  }
}

export default Alert;
 */

import React from 'react';

const Alert = ({ message, success, error }) => (
  <div className={`Alert${success ? ' success' : error ? ' error' : ''}`}>{message}</div>
);

/* const Alert = ({ message, success }) => (
  <div className={`Alert${success ? ' success' : ''}`}>
    {message}
  </div>
); */

export default Alert;
