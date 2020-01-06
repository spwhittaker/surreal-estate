import React, { Fragment, Component } from 'react';
import PropertyCard from './PropertyCard';
import Axios from 'axios';
import Alert from './Alert';
import '../Styles/Properties.css';

class Properties extends Component {
  constructor(props) {
    super(props);

    this.state = { properties: [], isError: null, alertMessage: null, isSuccess: null };
    Axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data }) => {
        this.setState({ properties: data });
        console.log(data);
      })

      .catch(err =>
        this.setState({
          error: true,
          alertMessage: "Sorry, that didn't work",
          isError: true,
          isSuccess: false,
        }),
      );
  }

  render() {
    return (
      <div>
        <Alert
          style="display: block"
          message={this.state.alertMessage}
          success={this.state.isSuccess}
          error={this.state.isError}
        />
        <h3>Properties Page</h3>
        <br />
        <div className="allProperties">
          {this.state.properties.map(residence => {
            return <PropertyCard key={residence['_id']} {...residence} />;
          })}
        </div>
      </div>
    );
  }
}

export default Properties;
