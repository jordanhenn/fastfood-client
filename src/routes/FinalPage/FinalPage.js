import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { buns, sauces, fillings } from '../../data/fastfooddata'
import FastFoodContext from '../../contexts/FastFoodContext'
import FoodApiService from '../../services/food-api-service'
import './FinalPage.css'

class FinalPage extends Component {
  state = {
    posted: false,
    price: null
  }

  renderButton = () => {
    if (this.state.posted === true) {
      return (
      <p>Your creation has been posted. Check out all the latest creations here.</p>
      )
    } else {
      return (
      <button onClick={(e) => this.handlePost(e)}>POST</button>
      )
    }
  }

  handlePost = (e) => {
    const { user_name, creation_name } = e.target
    const bun_id = FoodApiService.getBunByName(buns[this.context.bun].name).id
    const fillingOne_id = FoodApiService.getBunByName(fillings[this.context.fillingOne].name).id
    const fillingTwo_id = FoodApiService.getBunByName(fillings[this.context.fillingTwo].name).id
    const sauce_id = FoodApiService.getBunByName(sauces[this.context.sauce].name).id
    const price = this.state.price;

    const newCreation = {
      user_name: user_name.value,
      creation_name: creation_name.value,
      rating: null,
      price,
      number_of_ratings: 0,
      bun_id,
      fillingOne_id,
      fillingTwo_id,
      sauce_id
    }

    FoodApiService.postCreation(newCreation)

    this.setState({
      posted: true
    })
  }

  componentDidMount() {
    const fillingOneItem = FoodApiService.getItemByName(fillings[this.context.fillingOne].name)
    const fillingTwoItem = FoodApiService.getItemByName(fillings[this.context.fillingTwo].name)
    const bun = FoodApiService.getBunByName(buns[this.context.bun].name)

    if (fillingOneItem.bun_id === bun.id || fillingTwoItem.bun_id === bun.id) {
      const bunPrice = 0;
    }
    else {
    const bunPrice = FoodApiService.getAllItems().find(item => item.bun_id === bun.id)
    }
    this.setState({
      posted: false,
      price: fillingOneItem.price + fillingTwoItem.price + bunPrice
    })
  }

  componentWillUnmount() {
    this.setState({
      posted: false,
      price: null
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
                 <li>{this.state.price}</li>
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