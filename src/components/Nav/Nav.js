import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props){
  // console.log(props.location)
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
