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

const Alert = ({ message }) => <div className="Alert">{message}</div>;

export default Alert;
