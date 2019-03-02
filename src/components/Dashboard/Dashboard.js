import React, { Component } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      input: '',
      checkbox: true,
      posts: []
    }
    this.toggleBox = this.toggleBox.bind(this);
  }

  componentDidMount(){
    this.displayPosts();
  }

  displayPosts = () => {
    // this.state.posts.map(post => post)
    axios.get('/api/posts').then(res => {
      this.setState({ posts: res.data })
    })
  }

  resetSearch = () => {
    axios.get('/api/posts').then(res => {
      this.setState({ posts: res.data })
    })
  }

  toggleBox() {
    if(!this.state.checkbox){
      this.setState({ checkbox: true })
    } else {
      this.setState({ checkbox: false })
    }
  }

  render() {
    return (
      <div className="mainDash">
        <h1>Dashboard</h1>
        <input />
        <button>Search</button>
        <button>Reset</button>
        My Posts <input value={ this.state.checkbox } type='checkbox' onClick={ this.toggleBox } />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    id: reduxState.id
  }
}

export default connect(mapStateToProps)(Dashboard);