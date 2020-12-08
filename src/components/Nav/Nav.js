import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    
  render() {
  return (
    <nav className='Nav'>
    <div className='Nav-Style'>
    <ul className='Main-Nav'>
        <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        About
      </Link>
      </li>
      <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/create'}>
        Create
      </Link>
      </li>
      <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/creations'}>
        Recent Creations
      </Link>
      </li>
      </ul>
    </div>
    </nav>
  );
  }
}

export default withRouter(Nav)