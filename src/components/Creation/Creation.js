import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
import FoodApiService from '../../services/food-api-service'
import './Creation.css'

class Creation extends Component {
  
  state = {
    bun: '',
    fillingOne: '',
    fillingTwo: '',
    sauce: '',
  }

  componentDidMount() {
    console.log(this.props.bun_id, this.props.fillingone_id, this.props.fillingtwo_id, this.props.sauce_id)
    FoodApiService.getBunById(this.props.bun_id)
      .then(bun => {
        this.setState({
          bun: bun
        })
      })
    FoodApiService.getFillingById(this.props.fillingone_id)
      .then(fillingOne => {
        this.setState({
          fillingOne: fillingOne
        })
      })
    FoodApiService.getFillingById(this.props.fillingtwo_id)
      .then(fillingTwo => {
        this.setState({
          fillingTwo: fillingTwo
        })
      })
    FoodApiService.getSauceById(this.props.sauce_id)
      .then(sauce => {
        this.setState({
          sauce: sauce
        })
      })
  }

  render() {
  return (
    <li className='creations-list-item'>
    <Link to={`/creations/${this.props.id}`}>
      <div className='Creation-Name-User'>
        <h3 className='Creation Name'>
            {this.props.creation_name}
        </h3>
        <h4>{this.props.user_name}</h4>
        <div className='creation-item'>
          <div className="bottom-bun">
              <img alt='Bottom Bun' src={`../../images/buns/bottombun.svg`}/>
          </div>
          <div className="patty-two-final">
              <img alt={this.state.fillingTwo.filling_description} src={`../../images/fillings/${this.state.fillingTwo.filling_name}.svg`}/>
          </div>
          <div className="patty-one-final">
              <img alt={this.state.fillingOne.filling_description} src={`../../images/fillings/${this.state.fillingOne.filling_name}.svg`}/>
          </div>
          <div className="bun-final">
              <img alt={this.state.bun.bun_description} src={`../../images/buns/${this.state.bun.bun_name}.svg`}/>
          </div>
          </div>
        <Rating
                readonly="true"
                initialRating={this.props.rating}
                emptySymbol={<img alt="empty rating" src="./emptysymbol.jpg" className="icon" />}
                fullSymbol={<img alt="full rating" src="./opensymbol.jpg" className="icon" />}>
                </Rating>
      </div>
    </Link>
    </li>
    )
  }
}

export default Creation