import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './FinalPage.css'

class FinalPage extends Component {
  render() {
    return (
      <div className='creation-area'>
          <div className="title">
              <h2 className="name">The Beast</h2>
              <h4 className="creator">Created by Eric McDonald Jr.</h4>
          </div>
          <div className="bun-final">
              selected bun
          </div>

          <div className="sauce-final">
              selected sauce  
          </div>

          <div className="patty-one-final">
                first patty/filling
          </div>

          <div className="patty-two-final">
                second patty/filling
          </div>

          <div className="bottom-bun">
              bottom bun
          </div>
          <div className="button-styling">

           <div className="price">
               total price
           </div>
          <button>POST</button>
          </div>
      </div>
    )
  }
}

export default withRouter(FinalPage)