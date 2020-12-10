import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { buns, sauces, fillings } from '../../data/fastfooddata'
import FastFoodContext from '../../contexts/FastFoodContext'
import './FinalPage.css'

class FinalPage extends Component {
  state = {
    posted: false
  }

  renderButton = () => {
    if (this.state.posted === true) {
      return (
      <p>Your creation has been posted. Thanks bud!</p>
      )
    } else {
      return (
      <button onClick={() => this.handlePost()}>POST</button>
      )
    }
  }

  handlePost = () => {
    this.setState({
      posted: true
    })
  }

  componentDidMount() {
    this.setState({
      posted: false
    })
  }
  static contextType = FastFoodContext

  render() {
    return (
      <div className='creation-area'>
        <div className='form'>
          <form>
            <div className='input-and-label'>
            <label htmlFor='creation-name'>Name it:</label>
            <input id='creation-name' type='text'></input>
            </div>
            <div className='input-and-label'>
            <label htmlFor='user-name'>Take credit:</label>
            <input id='user-name' type='text'></input>
            </div>
          </form>
          </div>
          <div className='creation'>
          <div className="bottom-bun">
              <img alt='Bottom Bun' src={`../../images/buns/bottombun.svg`}/>
          </div>
          <div className="patty-two-final">
              <img alt={fillings[this.context.fillingTwo].description} src={`../../images/fillings/${fillings[this.context.fillingTwo].name}.svg`}/>
          </div>
          <div className="patty-one-final">
              <img alt={fillings[this.context.fillingOne].description} src={`../../images/fillings/${fillings[this.context.fillingOne].name}.svg`}/>
          </div>
          <div className="bun-final">
              <img alt={buns[this.context.bun].description} src={`../../images/buns/${buns[this.context.bun].name}.svg`}/>
          </div>
          </div>

           <div className="receipt">
               <ul>
                 <li>{buns[this.context.bun].description}</li>
                 <li>{sauces[this.context.sauce].description}</li>
                 <li>{fillings[this.context.fillingOne].description}</li>
                 <li>{fillings[this.context.fillingTwo].description}</li>
               </ul>
           </div>
           <div className="button-styling">
          {this.renderButton()}
          </div>
      </div>
    )
  }
}

export default withRouter(FinalPage)