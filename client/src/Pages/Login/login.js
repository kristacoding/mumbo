import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, Container } from "react-bootstrap";
import './style.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
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
    console.log(username)


    axios.post('/api/auth/login', { "username": username, "password": password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        console.log(result.data);
        this.setState({ message: '' });
        this.props.history.push('/seo-dashboard')
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <>

        <Container>
          <Form className="form-signin" onSubmit={this.onSubmit}>
            {message !== '' &&
              <div className="alert alert-warning alert-dismissible" role="alert">
                {message}
              </div>
            }
            <h2 className="form-signin-heading">Please sign in</h2>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required />
            <Button className="btn btn-lg btn-primary btn-block" type="submit">Login</Button>
            <p>
              Not a member? <Link to="/register"
                className={window.location.pathname === "/register"}
              >
                <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
            </p>
          </Form>
        </Container>
      </>
    );
  }
}

export default Login;