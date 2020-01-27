import React from 'react';
import '../Styles/App.css';
import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router';
import Properties from './Properties';
import AddProperty from './AddProperty';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userId: '' };
  }
  render() {
    return (
      <div>
        <NavBar />
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
