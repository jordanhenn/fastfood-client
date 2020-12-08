import React, { Component } from 'react'

const FastFoodContext = React.createContext({
  bun: null,
  sauce: null,
  fillingOne: null,
  fillingTwo: null,
  price: null,
  setError: () => {},
  clearError: () => {},
  setBun: () => {},
  setSauce: () => {},
  setFillingOne: () => {},
  setFillingTwo: () => {},
  setPrice: () => {}
})

export default FastFoodContext

export class FastFoodProvider extends Component {
  state = {
    bun: null,
    sauce: null,
    filling: null,
    price: null,
  };

  setBun = bun => {
    this.setState({ bun })
  }

  setSauce = sauce => {
    this.setState({ sauce })
  }

  setFillingOne = fillingOne => {
    this.setState({ fillingOne })
  }

  setFillingTwo = fillingTwo => {
      this.setState({ fillingTwo })
  }

  setPrice = price => {
    this.setState({ price })
}

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      bun: this.state.bun,
      sauce: this.state.sauce,
      fillingOne: this.state.fillingOne,
      fillingTwo: this.state.fillingTwo,
      price: this.state.price,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBun: this.setBun,
      setSauce: this.setSauce,
      setFillingOne: this.setFillingOne,
      setFillingTwo: this.setFillingTwo,
      setPrice: this.setPrice,
    }

    return (
      <FastFoodContext.Provider value={value}>
        {this.props.children}
      </FastFoodContext.Provider>
    )
  }
}