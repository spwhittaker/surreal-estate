import React from 'react';
import '../Styles/App.css';
import NavBar from '../components/NavBar';
import { Route, Switch } from 'react-router';
import Properties from './Properties';
import AddProperty from './AddProperty';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
