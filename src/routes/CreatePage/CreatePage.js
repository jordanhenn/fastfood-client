import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import FastFoodContext from '../../contexts/FastFoodContext'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import { buns, sauces, fillings } from '../../data/fastfooddata'
import 'pure-react-carousel/dist/react-carousel.es.css';
import './CreatePage.css'

class CreatePage extends Component {
  state = {
    bunIndex: 0,
    sauceIndex: 0,
    fillingOneIndex: 0,
    fillingTwoIndex: 0
  }

  static contextType = FastFoodContext

  handleBunNextClick = () => {
    const currentIndex = this.state.bunIndex
    if (buns[currentIndex + 1] !== undefined) {
      this.setState({
        bunIndex: currentIndex + 1
      })
    }
  }

  handleBunBackClick = () => {
    const currentIndex = this.state.bunIndex
    if (currentIndex !== 0) {
      this.setState({
        bunIndex: currentIndex - 1
      })
    }
  }

  handleSauceNextClick = () => {
    const currentIndex = this.state.sauceIndex
    if (sauces[currentIndex + 1] !== undefined) {
      this.setState({
        sauceIndex: currentIndex + 1
      })
    }
  }

  handleSauceBackClick = () => {
    const currentIndex = this.state.sauceIndex
    if (currentIndex !== 0) {
      this.setState({
        sauceIndex: currentIndex - 1
      })
    }
  }

  handleFillingOneNextClick = () => {
    const currentIndex = this.state.fillingOneIndex
    if (fillings[currentIndex + 1] !== undefined) {
      this.setState({
        fillingOneIndex: currentIndex + 1
      })
    }
  }

  handleFillingOneBackClick = () => {
    const currentIndex = this.state.fillingOneIndex
    if (currentIndex !== 0) {
      this.setState({
        fillingOneIndex: currentIndex - 1
      })
    }
  }

  handleFillingTwoNextClick = () => {
    const currentIndex = this.state.fillingTwoIndex
    if (fillings[currentIndex + 1] !== undefined) {
      this.setState({
        fillingTwoIndex: currentIndex + 1
      })
    }
  }

  handleFillingTwoBackClick = () => {
    const currentIndex = this.state.fillingTwondex
    if (currentIndex !== 0) {
      this.setState({
        fillingTwoIndex: currentIndex - 1
      })
    }
  }


  render() {
    return (
      <div className='create-area'>
          <div className="selection-area">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={12}
                className='carousel'>
                <Slider>
                    {buns.map(bun => {
                      return <Slide index={bun.index}><Image hasMasterSpinner={true} alt={bun.description} src={`../../images/buns/${bun.name}.svg`}/></Slide>
                    })}
                </Slider>
                <p>{buns[this.state.bunIndex].description}</p>
                <ButtonBack onClick={() => this.handleBunBackClick}>Back</ButtonBack>
                <ButtonNext onClick={() => this.handleBunNextClick}>Next</ButtonNext>
              </CarouselProvider>
          </div>

          <div className="selection-area">
          <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={7}>
            <Slider>
            {sauces.map(sauce => {
                      return <Slide index={sauce.index}><Image hasMasterSpinner={true} alt={sauce.description} src={`../../images/sauces/${sauce.name}.svg`}/></Slide>
                    })}
                </Slider>
                <p>{sauces[this.state.sauceIndex].description}</p>
                <ButtonBack onClick={() => this.handleSauceBackClick}>Back</ButtonBack>
                <ButtonNext onClick={() => this.handleSauceNextClick}>Next</ButtonNext>
            </CarouselProvider>    
          </div>

          <div className="selection-area">
          <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={29}>
                <Slider>
                {fillings.map(filling => {
                      return <Slide index={filling.index}><Image hasMasterSpinner={true} alt={filling.description} src={`../../images/fillings/${filling.name}.svg`}/></Slide>
                    })}
                </Slider>
                <p>{fillings[this.state.fillingOneIndex].description}</p>
                <ButtonBack onClick={() => this.handleFillingOneBackClick}>Back</ButtonBack>
                <ButtonNext onClick={() => this.handleFillingOneNextClick}>Next</ButtonNext>
              </CarouselProvider>
          </div>

          <div className="selection-area">
          <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={29}>
                    <Slider>
                    {fillings.map(filling => {
                      return <Slide index={filling.index}><Image hasMasterSpinner={true} alt={filling.description} src={`../../images/fillings/${filling.name}.svg`}/></Slide>
                    })}
                </Slider>
                <p>{fillings[this.state.fillingTwoIndex].description}</p>
                <ButtonBack onClick={() => this.handleFillingTwoBackClick}>Back</ButtonBack>
                <ButtonNext onClick={() => this.handleFillingTwoNextClick}>Next</ButtonNext>
              </CarouselProvider>
          </div>

          <div className="bottom-bun">
              bottom bun
          </div>
          <form
        className='name-creation'
      >
        <div className='burger_name'>
          <label htmlFor='form_burger_name'>
            Name Your Creation:
          </label>
          <input
            className='form_burger_name'
            id='form_burger_name'/>
        </div>
        <div className='user_name'>
          <label htmlFor='form_user_name'>
            Take Credit:
          </label>
          <input
            className='form_user_name'
            type='form_user_name'
            id='form_user_name'/>
        </div>
      </form>
          <Link style={{ textDecoration: 'none' }} to={'/final'}>CREATE</Link>
      </div>
    ) 
}
}

export default withRouter(CreatePage)