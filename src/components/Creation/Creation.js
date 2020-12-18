import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
import 'font-awesome/css/font-awesome.min.css';
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
    <Link style={{ textDecoration: 'none' }} to={`/creations/${this.props.id}`}>
      <div className='Creation-Name-User'>
        <h3 className='Creation Name'>
            {this.props.creation_name}
        </h3>
        <h4>{this.props.user_name}</h4>
        <div className='creation-item'>
          <div className="bottom-bun-creation">
              <img className="creation-img" alt='Bottom Bun' src={`../../images/buns/bottombun.svg`}/>
          </div>
          <div className="patty-two-creation">
              <img className="creation-img" alt={this.state.fillingTwo.filling_description} src={`../../images/fillings/${this.state.fillingTwo.filling_name}.svg`}/>
          </div>
          <div className="patty-one-creation">
              <img className="creation-img" alt={this.state.fillingOne.filling_description} src={`../../images/fillings/${this.state.fillingOne.filling_name}.svg`}/>
          </div>
          <div className="bun-creation">
              <img className="creation-img" alt={this.state.bun.bun_description} src={`../../images/buns/${this.state.bun.bun_name}.svg`}/>
          </div>
          </div>
        <Rating
                readonly="true"
                initialRating={this.props.rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"/>
      </div>
    </Link>
    </li>
    )
  }
}

export default Creation