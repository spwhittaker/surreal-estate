import React from 'react';
import '../Styles/App.css';
import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router';
import Properties from './Properties';
import AddProperty from './AddProperty';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 6,
      isLoggedIn: false,
      name: '',
      email: '',
      picture: '',
      accessToken: '',
    };
  }
  /* handleLogin = (req, res) => console.log('log in!'); */
  handleLogin = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken,
    });
  };

  handleLogout = () => {
    console.log('log out!');
  };

  render() {
    return (
      <div>
        <NavBar
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          state={this.state}
          userID={this.state.userID}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Properties {...props} userID={this.state.userID} />}
          />
          <Route path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
