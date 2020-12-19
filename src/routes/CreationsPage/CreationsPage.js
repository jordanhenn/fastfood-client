import React, { Component } from 'react';
import Creation from '../../components/Creation/Creation';
import FoodApiService from '../../services/food-api-service'
import './CreationsPage.css'

class CreationsPage extends Component {

  state = {
    creations: []
  }

  renderCreations = () => {
    if (this.state.creations.length === 0) {
      return (
        <p>Loading, please wait...</p>
      )
    }
    else {
      return (
        this.state.creations.map(creation =>
          <Creation
            key={creation.id}
            {...creation}
          />
        )
      )
    }
  }

  componentDidMount() {
    FoodApiService.getCreations()
      .then(creations => {
        this.setState({
          creations
        })
      })
  }

  render() {
    return (
      <section className='Creations'>
        <h2>Previous Creations</h2>
        <ul className='Creations-List' aria-live='polite'>
          {this.renderCreations()}
        </ul>
      </section>
    );
  }
}

export default CreationsPage;