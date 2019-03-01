import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';

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
  return {
    id: reduxState.id
  }
}

const mapDispatchToProps = {
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);