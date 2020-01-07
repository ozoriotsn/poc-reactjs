import React, { Component } from 'react';
import './Custom.css';
import axios from 'axios'
import Carousel from "react-multi-carousel";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      loggedIn: false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    const params =  {
        "email": this.state.username,
        "password": this.state.password
    }
    console.log('params', params);
    axios.post("https://reqres.in/api/login", params).then(res => {
        console.log('login response: ',res.data);
        localStorage.setItem('token', res.data.token);
        this.props.history.push("/dashboard");
      });


    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    const css = "margin:5px; border:solid red;";

    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
              <h3>ReactJs</h3>
            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" id="icon" alt="User Icon" />
          </div>

          <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" className="alert alert-danger" onClick={this.dismissError}>
              {this.state.error}
              <button className='btn btn-link btn-sm'  onClick={this.dismissError}>✖</button>
            </h3>
          }
            <input type="email" required id="login" className="fadeIn second" name="login" placeholder="username@mail.com" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="********" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
            <button className="btn btn-primary btn-md fadeIn fourth">Login</button>

            <a style={{margin:"5px",color:"#fff"}} href={"carousel"} className="btn btn-primary btn-md fadeIn fourth">Carousel</a>
            <br/>
            <br/>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

