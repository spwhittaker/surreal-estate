import React from 'react';
import '../Styles/AddProperty.css';
import Alert from './Alert';
import Axios from 'axios';
//import { getConsoleOutput } from '@jest/console';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
        price: '',
        bathrooms: 1,
        bedrooms: 1,
        email: '',
      },
      alertMessage: null,
      isSuccess: false,
      isError: false,
    };
    // this.handleAddProperty = this.handleAddProperty.bind(this);
  }

  render() {
    return (
      <div className="AddProperty">
        <h2>Add Property Page</h2>
        <form onSubmit={this.handleAddProperty}>
          <Alert
            message={this.state.alertMessage}
            success={this.state.isSuccess}
            error={this.state.isError}
          />
          <div className="inputField">
            <h4>Name of property</h4>
            <input
              type="text"
              required
              name="title"
              value={this.state.fields.title}
              onChange={this.handleFieldChange}
            ></input>
          </div>

          <div className="inputField">
            <h4>Type of property:</h4>
            <select
              name="type"
              className="selectDropdown"
              value={this.state.fields.type}
              onChange={this.handleFieldChange}
            >
              <option value="Flat" label="Flat" />
              <option value="Detached" label="Detached" />
              <option value="Semi-Detached" label="Semi-Detached" />
              <option value="Terraced" label="Terraced" />
              <option value="End of Terrace" label="End of Terrace" />
              <option value="Cottage" label="Cottage" />
              <option value="Bungalow" label="Bungalow" />
            </select>
          </div>
          <div className="inputField">
            <h4>City:</h4>
            <select
              name="city"
              className="selectDropdown"
              value={this.state.fields.city}
              onChange={this.handleFieldChange}
            >
              <option value="Manchester" label="Manchester" />
              <option value="Leeds" label="Leeds" />
              <option value="Sheffield" label="Sheffield" />
              <option value="Liverpool" label="Liverpool" />
            </select>
          </div>
          <div className="inputField">
            <h4>Number of bathrooms</h4>
            <input
              type="number"
              name="bathrooms"
              min="1"
              max="10"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="inputField">
            <h4>Number of bedrooms</h4>
            <input
              type="number"
              name="bedrooms"
              min="1"
              max="10"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="inputField">
            <h4>Email Address*</h4>
            <input
              type="email"
              required
              name="email"
              placeholder="Please enter your email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="inputField">
            <h4>Price</h4>
            <input
              type="number"
              min="1"
              placeholder="price of property"
              name="price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
            />
          </div>

          <button type="submit" label="Add">
            Add
          </button>
        </form>
      </div>
    );
  }
  handleAddProperty = event => {
    event.preventDefault();
    this.setState(() => {
      return {
        ...this.state,
        alertMessage: '',
        isSuccess: false,
        isError: false,
      };
    });
    Axios.post('/api/v1/PropertyListing', this.state.fields)
      .then(res => {
        this.setState({
          isSuccess: true,
          alertMessage: 'Your property has been added to the list',
          isError: false,
        });
        console.log(res);
      })
      .catch(err => {
        this.setState({ isSuccess: false, alertMessage: "Sorry, that didn't work", isError: true });
      });
  };
  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };
}

export default AddProperty;
