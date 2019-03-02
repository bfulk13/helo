import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';

class Auth extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount(){
    this.checkUser();
  }

  checkUser = async () => {
    const {id} = this.props;
    if(!id){
      try{
        let res = await axios.get('/api/current');
        this.props.updateUser(res.data)
        this.props.history.push('/dashboard')
      } catch(err){}
    } else {
      this.props.history.push('/dashboard')
    }
  }

  handleChange(prop, val){
    this.setState({
      [prop]: val
    })
  }

  register = async () => {
    console.log(this.props.history)
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/auth/register', user)
      this.props.updateUser(res.data);
      this.props.history.push('/dashboard')
    } catch(err) {
      console.log(err)
      // alert('This username is taken')
    }
  }

  login = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/auth/login', user);
      // console.log(res)
      this.props.updateUser(res.data);
      this.props.history.push('/dashboard')
    } catch(err) {
      alert('Invalid login credentials');
    }
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
        <button onClick={ this.login }>Login</button>
        <button onClick={ this.register }>Register</button>
      </div>
    );
  }
}



export default connect(null, {updateUser})(Auth);
