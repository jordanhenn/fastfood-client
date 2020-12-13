import React, { Component } from 'react';
import Creation from '../../components/Creation/Creation';
import FoodApiService from '../../services/food-api-service'
import './CreationsPage.css'

class CreationsPage extends Component {

  state = {
    creations: []
  }

  componentDidMount() {
    const creations = FoodApiService.getCreations()

    this.setState({
      creations
    })
  }

  componentWillUnmount() {
    this.setState({
      creations: []
    })
  }

  render() {
    return (
      <section className='Creations'>
        <h2>Previous Creations</h2>
        <ul className='Creations-List' aria-live='polite'>
          {this.state.creations.map(creation =>
            <Creation
              key={creation.id}
              {...creation}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default CreationsPage;