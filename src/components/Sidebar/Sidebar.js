import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

class Sidebar extends Component {

    render() {
        return (
            <Menu>
                <div className='Nav-Style-Mobile'>
                <ul className='Main-Nav-Mobile'>
            <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            About
          </Link>
          </li>
          <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/create'}>
            Create
          </Link>
          </li>
          <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/creations'}>
            Recent Creations
          </Link>
            </li>
          </ul>
                </div>
            </Menu>
        )
    }
}

export default withRouter(Sidebar)