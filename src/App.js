import React from 'react';
import store from './redux/store';
import ToDo from './containers/ToDo';
import Login from './containers/Login';
import { Provider } from 'react-redux';
import Callback from './components/Callback';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To Do List</h1>
        <Router>
          <Switch>
            <Route exact path="/" render={_ => <Login {...props} />} />
            {/* <Route exact path="/todo" component={ToDo} /> */}
            <Route
              path="/todo"
              render={
                props.auth.isAuthenticated()
                  ? _ => <ToDo {...props} />
                  : _ => <Login {...props} />
              }
            />
            <Route path="/callback" component={Callback} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
