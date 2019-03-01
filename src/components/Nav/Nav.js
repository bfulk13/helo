import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props){
  // console.log(props)
  if(props.location.pathname !== '/'){
    return (
      <div>
        <h1>Nav</h1>
        <Link to="/dashboard"><button>Home</button></Link>
        <Link to="/new"><button>New Post</button></Link>
        <Link to="/"><button>Logout</button></Link>
      </div>
    );
  }
  return null
}

const mapStateToProps = (reduxState) => {
  const {username, img} = reduxState;
  return {
    username: reduxState.username,
    img: reduxState.img
  }
}

export default connect(mapStateToProps)(Nav);