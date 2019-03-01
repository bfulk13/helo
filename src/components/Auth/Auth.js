import React, { Component } from 'react';

class Auth extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(prop, val){
    this.setState({
      [prop]: val
    })
  }


  render() {
    const { username, password } = this.state;
    return (
      <div className="App">
        <h1>Auth</h1>
        <input 
          value={username} 
          placeholder='username' 
          onChange={ e => this.handleChange('username', e.target.value) } 
        />
        <input 
          value={password} 
          placeholder='password' 
          type='password' 
          onChange={ e => this.handleChange('password', e.target.value) } 
        />
        <button>Login</button>
        <button>Register</button>
      </div>
    );
  }
}

export default Auth;
