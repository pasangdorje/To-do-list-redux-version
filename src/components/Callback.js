import Auth from './Auth';
import React, { Component } from 'react';

class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }

  render() {
    return <div>Loading...</div>;
  }
}

export default Callback;
