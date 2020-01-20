import React, { Fragment, Component } from 'react';
import PropertyCard from './PropertyCard';
import Axios from 'axios';
import Alert from './Alert';
import '../Styles/Properties.css';
import { Link } from 'react-router-dom';
import qs from 'qs';

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
  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      Axios.get(`/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }
  buildQueryString = (operation, valueObj) => {
    const {
      location: { search },
    } = this.props;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = { ...currentQueryParams, [operation]: JSON.stringify(valueObj) };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  render() {
    return (
      <div className="flexContainer">
        <div className="sidebar">
          <div>
            <div>
              <Link to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
            </div>
            <div>
              <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
            </div>
            <div>
              <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
            </div>
            <div>
              <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
            </div>
            <div>
              <Link to={''}>See All</Link>
            </div>
            <div>
              <Link to={this.buildQueryString('sort', { price: -1 })}>Price Descending</Link>
            </div>
          </div>
        </div>
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
              return (
                <div key={residence['_id']} className="col">
                  <PropertyCard {...residence} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Properties;
