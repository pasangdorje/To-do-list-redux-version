import React from 'react';
import ToDo from './containers/ToDo';
import store from './redux/store';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDo />
      </div>
    </Provider>
  );
}

export default App;
