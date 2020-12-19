import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { buns, sauces, fillings } from '../../data/fastfooddata'
import FastFoodContext from '../../contexts/FastFoodContext'
import FoodApiService from '../../services/food-api-service'
import CurrencyFormat from 'react-currency-format'
import './FinalPage.css'

class FinalPage extends Component {
  state = {
    posted: false,
    items: [],
    fillingOne: {},
    fillingTwo: {},
    bun: {},
    sauce: {},
    price: null,
    priceCalculated: false,
    postedCreation: {}
  }

  renderButton = () => {
    if (this.state.posted === true && this.state.priceCalculated === true) {
      return (
      <p>Your creation has been posted. Check it out <Link to={`/creations/${this.state.postedCreation.id}`}>here.</Link></p>
      )
    } 
    else if (this.state.priceCalculated === true && this.state.posted === false) {
      return (
        ''
      )
    }
    else {
      return (
        <button onClick={this.calculatePrice}>How much would it cost?</button>
      )
    }
  }

  calculatePrice = () => {
    const { fillingOne, fillingTwo, bun, items } = this.state
    console.log(fillingOne, fillingTwo, bun, items)

    const fillingOneItem = items.find(item => item.filling_id === fillingOne.id)
    const fillingTwoItem = items.find(item => item.filling_id === fillingTwo.id)

    console.log(fillingOneItem, fillingTwoItem)

    let bunPrice
    if (fillingOneItem.bun_id === bun.id || fillingTwoItem.bun_id === bun.id) {
      bunPrice = 0;
    }
    
    if (fillingOneItem.bun_id !== bun.id && fillingTwoItem.bun_id !== bun.id) {
      bunPrice = items.find(item => item.bun_id === bun.id).price
    }

    this.setState({
      price: fillingOneItem.price + fillingTwoItem.price + bunPrice,
      priceCalculated: true
    })
  }

  handlePost = (e) => {
    e.preventDefault()
    const { user_name, creation_name } = e.target
    const bun_id = this.state.bun.id
    const fillingOne_id = this.state.fillingOne.id
    const fillingTwo_id = this.state.fillingTwo.id
    const sauce_id = this.state.sauce.id
    const price = this.state.price;

    const newCreation = {
      user_name: user_name.value,
      creation_name: creation_name.value,
      rating: null,
      price,
      number_of_ratings: 0,
      bun_id,
      fillingone_id: fillingOne_id,
      fillingtwo_id: fillingTwo_id,
      sauce_id
    }

    console.log(newCreation)

    FoodApiService.postCreation(newCreation)
      .then(result => {
        this.setState({
          postedCreation: result
        })
      })

    this.setState({
      posted: true
    })
  }

  componentDidMount() {
    FoodApiService.getFillingByName(fillings[this.context.fillingOne].name)
      .then(result => {
        this.setState({
          fillingOne: result
        })
      })

    FoodApiService.getFillingByName(fillings[this.context.fillingTwo].name)
    .then(result => {
      this.setState({
        fillingTwo: result
      })
    })
    
    FoodApiService.getBunByName(buns[this.context.bun].name)
    .then(result => {
      this.setState({
        bun: result
      })
    })

    FoodApiService.getSauceByName(sauces[this.context.sauce].name)
    .then(result => {
      this.setState({
        sauce: result
      })
    })

    FoodApiService.getAllItems()
    .then(result => {
      this.setState({
        items: result
      })
    })
  }

  componentWillUnmount() {
    this.setState({
      posted: false,
      priceCalculated: false,
      price: null,
      postedCreation: {}
    })
  }

  static contextType = FastFoodContext

  render() {
    return (
      <div className='final-area'>
          <div className='creation'>
          <div className="bottom-bun">
              <img className="final-img" alt='Bottom Bun' src={`../../images/buns/bottombun.svg`}/>
          </div>
          <div className="patty-two-final">
              <img className="final-img" alt={fillings[this.context.fillingTwo].description} src={`../../images/fillings/${fillings[this.context.fillingTwo].name}.svg`}/>
          </div>
          <div className="patty-one-final">
              <img className="final-img" alt={fillings[this.context.fillingOne].description} src={`../../images/fillings/${fillings[this.context.fillingOne].name}.svg`}/>
          </div>
          <div className="bun-final">
              <img className="final-img" alt={buns[this.context.bun].description} src={`../../images/buns/${buns[this.context.bun].name}.svg`}/>
          </div>
          </div>

           <div className="receipt">
               <ul className="receipt-list">
                 <li>{buns[this.context.bun].description}</li>
                 <li>{sauces[this.context.sauce].description}</li>
                 <li>{fillings[this.context.fillingOne].description}</li>
                 <li>{fillings[this.context.fillingTwo].description}</li>
                 <li><p className="receipt-line">__________________</p></li>
                 <li className="receipt-cost">{this.state.price && <CurrencyFormat decimalScale={2} fixedDecimalScale={true} prefix={'$'} value={this.state.price}/>}</li>
               </ul>
           </div>
           <div className="button-styling">
          {this.renderButton()}
          </div>
          {this.state.priceCalculated && !this.state.posted &&
          <form
          className='PostForm'
          onSubmit={this.handlePost}
        >
          <div className='input-and-label'>
            <label htmlFor='creation_name'>
              Name it:
            </label>
            <input
              name='creation_name'
              id='creation_name'
              type='text'/>
          </div>
          <div className='input-and-label'>
            <label htmlFor='user_name'>
              Take credit:
            </label>
            <input
              name='user_name'
              type='text'
              id='user_name'/>
          </div>
          <button className="post" type='submit'>
            Share your creation with other FFE users
          </button>
        </form>}
      </div>
    )
  }
}

export default withRouter(FinalPage)