import React, { Component } from 'react'
import Rating from 'react-rating'
import FoodApiService from '../../services/food-api-service'
import CurrencyFormat from 'react-currency-format'
import { FacebookShareButton, FacebookIcon, RedditShareButton, RedditIcon, TwitterShareButton, TwitterIcon } from 'react-share'
import 'font-awesome/css/font-awesome.min.css';
import './CreationPage.css'

class CreationPage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  state = {
    creation: {},
    bun: {},
    fillingOne: {},
    fillingTwo: {},
    sauce: {},
  }

  handleRate = (value) => {
    const userRating = value;
    let newRating
    const newNumberOfRatings = this.state.creation.number_of_ratings + 1
    if (this.state.creation.number_of_ratings === 0) {
      newRating = userRating
    }
    if (this.state.creation.number_of_ratings !== 0) {
      newRating = ((this.state.creation.rating * this.state.creation.number_of_ratings) + userRating)/newNumberOfRatings
    }
    const newInfo = {
      newRating,
      newNumberOfRatings
    }

    FoodApiService.updateCreation(this.state.creation.id, newInfo)
  }

  componentDidMount() {
    const { creationId } = this.props.match.params
    FoodApiService.getCreationById(creationId)
      .then(creation => {
        this.setState({
          creation
        })
        FoodApiService.getBunById(creation.bun_id)
        .then(bun => {
          this.setState({
          bun
        })
        })
        FoodApiService.getFillingById(creation.fillingone_id)
          .then(fillingOne => {
            this.setState({
              fillingOne
            })
          })
        FoodApiService.getFillingById(creation.fillingtwo_id)
          .then(fillingTwo => {
            this.setState({
              fillingTwo
            })
          })
        FoodApiService.getSauceById(creation.sauce_id)
          .then(sauce => {
            this.setState({
              sauce
            })
          })
      })
  }

  render() {
    const quote = `I need you to see this. It's the ${this.state.creation.creation_name}. It was created by ${this.state.creation.user_name}. Please, I'm begging you. Take a look.`
    return (
      <div className='creation-area'>
          <div className='creation'>
          <div className="share">
           <FacebookShareButton quote={quote} url={`https://fastfood-client.jordanhenn.vercel.app/creations/${this.state.creation.id}`}><FacebookIcon size={32} round={true}/></FacebookShareButton>
           <RedditShareButton title={quote} url={`https://fastfood-client.jordanhenn.vercel.app/creations/${this.state.creation.id}`}><RedditIcon size={32} round={true}/></RedditShareButton>
           <TwitterShareButton title={quote} url={`https://fastfood-client.jordanhenn.vercel.app/creations/${this.state.creation.id}`}><TwitterIcon size={32} round={true}/></TwitterShareButton>
        </div>
          <div className="title">
              <h2 className="name">{this.state.creation.creation_name}</h2>
              <h4 className="creator">Created by {this.state.creation.user_name}</h4>
          </div>
          <div className="bottom-bun-creation-full">
              <img className="creation-full-img" alt='Bottom Bun' src={`../../images/buns/bottombun.svg`}/>
          </div>
          <div className="patty-two-creation-full">
              <img className="creation-full-img" alt={this.state.fillingTwo.filling_description} src={`../../images/fillings/${this.state.fillingTwo.filling_name}.svg`}/>
          </div>
          <div className="patty-one-creation-full">
              <img className="creation-full-img" alt={this.state.fillingOne.filling_description} src={`../../images/fillings/${this.state.fillingOne.filling_name}.svg`}/>
          </div>
          <div className="bun-creation-full">
              <img className="creation-full-img" alt={this.state.bun.bun_description} src={`../../images/buns/${this.state.bun.bun_name}.svg`}/>
          </div>
          <Rating
                initialRating={this.state.creation.rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                onClick={this.handleRate}/>
          </div>

           <div className="receipt">
               <ul className="receipt-list">
                 <li>Receipt:</li>
                 <li>{this.state.bun.bun_description} Bun</li>
                 <li>{this.state.sauce.sauce_description}</li>
                 <li>{this.state.fillingOne.filling_description}</li>
                 <li>{this.state.fillingTwo.filling_description}</li>
                 <li><p className="receipt-line">__________________</p></li>
                 <li className="receipt-cost"><CurrencyFormat displayType={'text'} decimalScale={2} fixedDecimalScale={true} prefix={'$'} value={this.state.creation.price}/></li>
               </ul>
           </div>
      </div>
    )
  }
}

export default CreationPage