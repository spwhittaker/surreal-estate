import React, { Fragment, Component } from 'react';
import PropertyCard from './PropertyCard';
import Axios from 'axios';

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = { properties: [] };
  }
  render() {
    return (
      <div>
        <Fragment>Properties Page</Fragment>
        <PropertyCard
          title="Test Place"
          bathrooms="3"
          bedrooms="7"
          type="Flat"
          city="Scunthorpe"
          price="23455432"
          email="test@example.biz"
        />
      </div>
    );
  }
}

export default Properties;

/* const Properties = () => (
  <div>
    <Fragment>Properties Page</Fragment>
    <PropertyCard
      title="Test Place"
      bathrooms="3"
      bedrooms="7"
      type="Flat"
      city="Scunthorpe"
      price="23455432"
      email="test@example.biz"
    />
  </div>
);

export default Properties;
 */
