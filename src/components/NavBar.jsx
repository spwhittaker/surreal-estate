import React from 'react';
import '../Styles/NavBar.css';
import ReactDOM, { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

let fbButtons;
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NavBar">
        <ul className="nav">
          <img src={require('../img/house.png')} alt="weird house" />
          <Link className="item" to="/">
            View properties
          </Link>
          <Link className="item" to="/add-property">
            Add a property
          </Link>
          <FacebookLogin
            appId="2526719230789556"
            fields="name,email,picture"
            callback={this.props.onLogin}
          />

          <div>
            <Link className="item" callback={this.props.onLogout}>
              <img src={this.props.state.picture} alt={this.props.state.name} />
              <span>{this.props.state.name}</span>Sign out
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
