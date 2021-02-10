import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './style.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        this.props.history.push("/profile")
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          <p>
            Already a Member? <Link to="/login"
          className={window.location.pathname === "/login"}
          >
          <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Login Here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Create;