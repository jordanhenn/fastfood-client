import React, { Component } from 'react';
import Creation from '../../components/Creation/Creation';
import './CreationsPage.css'

class CreationsPage extends Component {
  render() {
    const creations = [];
    return (
      <section className='Creations'>
        <h2>Previous Creations</h2>
        <p>None created yet. Check back again later, haha</p>
        <ul className='Creations-List' aria-live='polite'>
          {creations.map(creation =>
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