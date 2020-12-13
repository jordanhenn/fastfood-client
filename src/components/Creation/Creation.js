import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import FoodApiService from '../../services/food-api-service'
import './Creation.css';

class Creation extends Component {
  
  state = {
    bun: '',
    fillingOne: '',
    fillingTwo: '',
    sauce: '',
  }

  componentDidMount() {
    const bun = FoodApiService.getBunById(this.props.bun_id)
    const fillingOne = FoodApiService.getFillingById(this.props.fillingOne_id)
    const fillingTwo = FoodApiService.getFillingById(this.props.fillingTwo_id)
    const sauce = FoodApiService.getSauceById(this.props.sauce_id)

    this.setState({
      bun,
      fillingOne,
      fillingTwo,
      sauce
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
              <img alt={this.state.fillingTwo.description} src={`../../images/fillings/${this.state.fillingTwo.name}.svg`}/>
          </div>
          <div className="patty-one-final">
              <img alt={this.state.fillingOne.description} src={`../../images/fillings/${this.state.fillingOne.name}.svg`}/>
          </div>
          <div className="bun-final">
              <img alt={this.state.bun.description} src={`../../images/buns/${this.state.bun.name}.svg`}/>
          </div>
          </div>
        <Rating
                readonly="true"
                initialRating={props.rating}
                emptySymbol={<img src="./emptysymbol.jpg" className="icon" />}
                fullSymbol={<img src="./opensymbol.jpg" className="icon" />}>
                </Rating>
      </div>
    </Link>
    </li>
    )
  }
}