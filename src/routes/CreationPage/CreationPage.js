import React, { Component } from 'react'
import Rating from 'react-rating'
import FoodApiService from '../../services/food-api-service'
import './CreationPage.css'

class CreationPage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  state = {
    bun: '',
    fillingOne: '',
    fillingTwo: '',
    sauce: '',
    price: '',
    user_name: '',
    creation_name: '',
    date_created: ''
  }

  componentDidMount() {
    const { creationId } = this.props.match.params
    const creation = FoodApiService.getCreationById(creationId)
    const bun = FoodApiService.getBunById(creation.bun_id)
    const fillingOne = FoodApiService.getFillingById(creation.fillingOne_id)
    const fillingTwo = FoodApiService.getFillingById(creation.fillingTwo_id)
    const sauce = FoodApiService.getSauceById(creation.sauce_id)
    const { price, user_name, creation_name, date_created } = creation

  this.setState({
      bun,
      fillingOne,
      fillingTwo,
      sauce,
      price,
      user_name,
      creation_name,
      date_created
    })
  }

  render() {
    return (
      <div className='creation-area'>
          <div className="title">
              <h2 className="name">{this.state.creation_name}</h2>
              <h4 className="creator">Created by {this.state.user_name}</h4>
              <Rating
                readonly="true"
                initialRating={3}
                emptySymbol={<img src="./emptysymbol.jpg" className="icon" />}
                fullSymbol={<img src="./opensymbol.jpg" className="icon" />}>
                </Rating>
          </div>
          <div className='creation'>
          <div className="bottom-bun">
              <img alt='Bottom Bun' src={`../../images/buns/bottombun.svg`}/>
          </div>
          <div className="patty-two-final">
              <img alt={this.state.fillingTwo.description} src={`../../images/fillings/${this.state.fillingTwo.name}.svg`}/>
          </div>
          <div className="patty-one-final">
              <img alt={this.state.fillingOne.description} src={`../../images/fillings/${this.state.fillingOne.name}.svg`}/>
          </div>
          <div className="bun-final">
              <img alt={this.state.bun.description} src={`../../images/buns/${this.state.bun.name}.svg`}/>
          </div>
          </div>

           <div className="receipt">
               <ul>
                 <li>{this.state.bun.description}</li>
                 <li>{this.state.sauce.description}</li>
                 <li>{this.state.fillingOne.description}</li>
                 <li>{this.state.fillingTwo.description}</li>
                 <li>{this.state.price}</li>
               </ul>
           </div>
         <div className="rate-and-share">
          <Rating
               fractions={2}
               emptySymbol={<img src="./emptysymbol.jpg" className="icon" />}
                fullSymbol={<img src="./opensymbol.jpg" className="icon" />}>
                </Rating>
        </div>
      </div>
    )
  }
}

export default CreationPage