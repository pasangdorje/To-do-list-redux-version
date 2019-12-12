import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h4>Welcome, Login to create your own To-Do-List</h4>
        <button
          onClick={this.props.auth.login}
          className="btn btn-primary btn-sm m-2"
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
