import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import FastFoodContext from '../../contexts/FastFoodContext'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import './CreatePage.css'

class CreatePage extends Component {
  state = {
    bun: null,
    sauce: null,
    fillingOne: null,
    fillingTwo: null
  }

  static contextType = FastFoodContext

  setBun = (bun) => {
    this.setState({
      bun
    })
    this.context.setBun(bun)
  }

  setSauce = (sauce) => {
    this.setState({
      sauce
    })
    this.context.setSauce(sauce)
  }

  setFillingOne = (fillingOne) => {
    this.setState({
      fillingOne
    })
    this.context.setFillingOne(fillingOne)
  }

  setFillingTwo = (fillingTwo) => {
    this.setState({
      fillingTwo
    })
    this.context.setFillingTwo(fillingTwo)
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
                    <Slide onFocus={() => this.setBun('innout_standard')} index={0}><Image children={null} tag='img' hasMasterSpinner={true} alt='In N Out Bun' src={'../../images/buns/innout_standard.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('burgerking_sesame')} index={1}><Image children={null} tag='img' hasMasterSpinner={true} alt='Burger King Bun' src={'../../images/buns/burgerking_sesame.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('carlsjr_standard')} index={2}><Image children={null} tag='img' hasMasterSpinner={true} alt='Carls Jr Bun' src={'../../images/buns/carlsjr_standard.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('jack_baconultimate')} index={3}><Image children={null} tag='img' hasMasterSpinner={true} alt='Jack in the Box Standard Bun' src={'../../images/buns/jack_baconultimate.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('mcdonalds_artisan')} index={4}><Image children={null} tag='img' hasMasterSpinner={true} alt='McDonalds Artisan Bun' src={'../../images/buns/mcdonalds_artisan.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('jack_sourdough')} index={5}><Image children={null} tag='img' hasMasterSpinner={true} alt='Jack in the Box Sourdough Bun' src={'../../images/buns/jack_sourdough.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('mcdonalds_mcgriddle')} index={6}><Image children={null} tag='img' hasMasterSpinner={true} alt='McDonalds McGriddle Bun' src={'../../images/buns/mcdonalds_mcgriddle.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('mcdonalds_mcmuffin')} index={7}><Image children={null} tag='img' hasMasterSpinner={true} alt='McDonalds McMuffin Bun' src={'../../images/buns/mcdonalds_mcmuffin.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('jack_butteryjack')} index={8}><Image children={null} tag='img' hasMasterSpinner={true} alt='Jack in the Box Buttery Jack Bun' src={'../../images/buns/jack_butteryjack.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('mcdonalds_sesame')} index={9}><Image children={null} tag='img' hasMasterSpinner={true} alt='McDonalds Sesame Bun' src={'../../images/buns/mcdonalds_sesame.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('mcdonalds_standard')} index={10}><Image children={null} tag='img' hasMasterSpinner={true} alt='McDonalds Standard Bun' src={'../../images/buns/mcdonalds_standard.svg'}/></Slide>
                    <Slide onFocus={() => this.setBun('wendys_standard.svg')} index={11}><Image children={null} tag='img' hasMasterSpinner={true} alt='Wendys Bun' src={'../../images/buns/wendys_standard.svg'}/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </CarouselProvider>
          </div>

          <div className="selection-area">
          <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={7}>
            <Slider>
            <Slide onFocus={() => this.setSauce('innout_spread')} index={0}><Image tag='img' hasMasterSpinner={true} alt='In n Out Spread' src='../../images/sauces/innout_spread.svg'/></Slide>
            <Slide onFocus={() => this.setSauce('mcdonalds_bigmacsauce')} index={1}><Image tag='img' hasMasterSpinner={true} alt='Big Mac Sauce' src='../../images/sauces/mcdonalds_bigmacsauce.svg'/></Slide>
            <Slide onFocus={() => this.setSauce('carlsjr_bigtwinsauce')} index={2}><Image tag='img' hasMasterSpinner={true} alt='Carls Jr Big Twin Sauce' src='../../images/sauces/carlsjr_bigtwinsauce.svg'/></Slide>
            <Slide onFocus={() => this.setSauce('burgerking_whoppersauce')} index={3}><Image tag='img' hasMasterSpinner={true} alt='Whopper Sauce' src='../../images/sauces/burgerking_whoppersauce.svg'/></Slide>
            <Slide onFocus={() => this.setSauce('jack_secretsauce')} index={4}><Image tag='img' hasMasterSpinner={true} alt='Jacks Secret Sauce' src='../../images/sauces/jack_secretsauce.svg'/></Slide>
            <Slide onFocus={() => this.setSauce('jack_tacosauce')} index={5}><Image tag='img' hasMasterSpinner={true} alt='Jacks Taco Sauce' src='../../images/sauces/jack_tacosauce.svg'/></Slide>
            <Slide onFocus={() => this.setSauce('wendys_sawesomesauce')} index={6}><Image tag='img' hasMasterSpinner={true} alt='Wendys Sawesome Sauce' src='../../images/sauces/wendys_sawesomesauce.svg'/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>    
          </div>

          <div className="selection-area">
          <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={29}>
                <Slider>
                <Slide index={0}><Image tag='img' hasMasterSpinner={true} alt='Burger King Chicken Fries' src='../../images/fillings/burgerking_chickenfries.svg'/></Slide>
                <Slide index={1}><Image tag='img' hasMasterSpinner={true} alt='Burger King Bacon King' src='../../images/fillings/burgerking_baconking.svg'/></Slide>
                <Slide index={2}><Image tag='img' hasMasterSpinner={true} alt='Burger King Double Cheeseburger' src='../../images/fillings/burgerking_doublecheeseburger.svg'/></Slide>
                <Slide index={3}><Image tag='img' hasMasterSpinner={true} alt='In N Out Animal Style Fries' src='../../images/fillings/innout_animalstylefries.svg'/></Slide>
                <Slide index={4}><Image tag='img' hasMasterSpinner={true} alt='Burger King Whopper' src='../../images/fillings/burgerking_whopper.svg'/></Slide>
                <Slide index={5}><Image tag='img' hasMasterSpinner={true} alt='Carls Jr Jalapeno Poppers' src='../../images/fillings/carlsjr_jalapenopopper.svg'/></Slide>
                <Slide index={6}><Image tag='img' hasMasterSpinner={true} alt='In N Out Double Double' src='../../images/fillings/innout_doubledouble.svg'/></Slide>
                <Slide index={7}><Image tag='img' hasMasterSpinner={true} alt='Burger King Hersheys Sundae Pie' src='../../images/fillings/burgerking_hersheyspie.svg'/></Slide>
                <Slide index={8}><Image tag='img' hasMasterSpinner={true} alt='Carls Jr Double Western Bacon' src='../../images/fillings/carlsjr_doublewesternbacon.svg'/></Slide>
                <Slide index={9}><Image tag='img' hasMasterSpinner={true} alt='Carls Jr Super Star' src='../../images/fillings/carlsjr_superstar.svg'/></Slide>
                <Slide index={10}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Curly Fries' src='../../images/fillings/jack_curlyfries.svg'/></Slide>
                <Slide index={11}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Bacon and Swiss Buttery Jack' src='../../images/fillings/jack_baconswissbuttery.svg'/></Slide>
                <Slide index={12}><Image tag='img' hasMasterSpinner={true} alt='In N Out Neopolitan Milkshake' src='../../images/fillings/innout_neopolitan.svg'/></Slide>
                <Slide index={13}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Ultimate Bacon Cheeseburger' src='../../images/fillings/jack_doubleultimatebacon.svg'/></Slide>
                <Slide index={14}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Tiny Tacos' src='../../images/fillings/jack_minitacos.svg'/></Slide>
                <Slide index={15}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Sourdough Jack' src='../../images/fillings/jack_sourdoughjack.svg'/></Slide>
                <Slide index={16}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Spicy Chicken' src='../../images/fillings/jack_spicychicken.svg'/></Slide>
                <Slide index={17}><Image tag='img' hasMasterSpinner={true} alt='McDonalds Big Mac' src='../../images/fillings/mcdonalds_bigmac.svg'/></Slide>
                <Slide index={18}><Image tag='img' hasMasterSpinner={true} alt='McDonalds Buttermilk Crisy Chicken' src='../../images/fillings/mcdonalds_crispychicken.svg'/></Slide>
                <Slide index={19}><Image tag='img' hasMasterSpinner={true} alt='McDonalds Filet O Fish' src='../../images/fillings/mcdonalds_filetofish.svg'/></Slide>
                <Slide index={20}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McDouble' src='../../images/fillings/mcdonalds_mcdouble.svg'/></Slide>
                <Slide index={21}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McGriddle' src='../../images/fillings/mcdonalds_mcgriddle.svg'/></Slide>
                <Slide index={22}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McMuffin' src='../../images/fillings/mcdonalds_mcmuffin.svg'/></Slide>
                <Slide index={23}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McNuggets' src='../../images/fillings/mcdonalds_mcnuggets.svg'/></Slide>
                <Slide index={24}><Image tag='img' hasMasterSpinner={true} alt='Wendys Daves Double' src='../../images/fillings/wendys_davesdouble.svg'/></Slide>
                <Slide index={25}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McRib' src='../../images/fillings/mcdonalds_mcrib.svg'/></Slide>
                <Slide index={26}><Image tag='img' hasMasterSpinner={true} alt='Wendys Spicy Chicken' src='../../images/fillings/wendys_spicychicken.svg'/></Slide>
                <Slide index={27}><Image tag='img' hasMasterSpinner={true} alt='Wendys Baconator' src='../../images/fillings/wendys_baconator.svg'/></Slide>
                <Slide index={28}><Image tag='img' hasMasterSpinner={true} alt='Wendys Chili' src='../../images/fillings/wendys_chili.svg'/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </CarouselProvider>
          </div>

          <div className="selection-area">
          <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={29}>
                    <Slider>
                    <Slide index={0}><Image tag='img' hasMasterSpinner={true} alt='Burger King Chicken Fries' src='../../images/fillings/burgerking_chickenfries.svg'/></Slide>
                <Slide index={1}><Image tag='img' hasMasterSpinner={true} alt='Burger King Bacon King' src='../../images/fillings/burgerking_baconking.svg'/></Slide>
                <Slide index={2}><Image tag='img' hasMasterSpinner={true} alt='Burger King Double Cheeseburger' src='../../images/fillings/burgerking_doublecheeseburger.svg'/></Slide>
                <Slide index={3}><Image tag='img' hasMasterSpinner={true} alt='In N Out Animal Style Fries' src='../../images/fillings/innout_animalstylefries.svg'/></Slide>
                <Slide index={4}><Image tag='img' hasMasterSpinner={true} alt='Burger King Whopper' src='../../images/fillings/burgerking_whopper.svg'/></Slide>
                <Slide index={5}><Image tag='img' hasMasterSpinner={true} alt='Carls Jr Jalapeno Poppers' src='../../images/fillings/carlsjr_jalapenopopper.svg'/></Slide>
                <Slide index={6}><Image tag='img' hasMasterSpinner={true} alt='In N Out Double Double' src='../../images/fillings/innout_doubledouble.svg'/></Slide>
                <Slide index={7}><Image tag='img' hasMasterSpinner={true} alt='Burger King Hersheys Sundae Pie' src='../../images/fillings/burgerking_hersheyspie.svg'/></Slide>
                <Slide index={8}><Image tag='img' hasMasterSpinner={true} alt='Carls Jr Double Western Bacon' src='../../images/fillings/carlsjr_doublewesternbacon.svg'/></Slide>
                <Slide index={9}><Image tag='img' hasMasterSpinner={true} alt='Carls Jr Super Star' src='../../images/fillings/carlsjr_superstar.svg'/></Slide>
                <Slide index={10}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Curly Fries' src='../../images/fillings/jack_curlyfries.svg'/></Slide>
                <Slide index={11}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Bacon and Swiss Buttery Jack' src='../../images/fillings/jack_baconswissbuttery.svg'/></Slide>
                <Slide index={12}><Image tag='img' hasMasterSpinner={true} alt='In N Out Neopolitan Milkshake' src='../../images/fillings/innout_neopolitan.svg'/></Slide>
                <Slide index={13}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Ultimate Bacon Cheeseburger' src='../../images/fillings/jack_doubleultimatebacon.svg'/></Slide>
                <Slide index={14}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Tiny Tacos' src='../../images/fillings/jack_minitacos.svg'/></Slide>
                <Slide index={15}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Sourdough Jack' src='../../images/fillings/jack_sourdoughjack.svg'/></Slide>
                <Slide index={16}><Image tag='img' hasMasterSpinner={true} alt='Jack in the Box Spicy Chicken' src='../../images/fillings/jack_spicychicken.svg'/></Slide>
                <Slide index={17}><Image tag='img' hasMasterSpinner={true} alt='McDonalds Big Mac' src='../../images/fillings/mcdonalds_bigmac.svg'/></Slide>
                <Slide index={18}><Image tag='img' hasMasterSpinner={true} alt='McDonalds Buttermilk Crisy Chicken' src='../../images/fillings/mcdonalds_crispychicken.svg'/></Slide>
                <Slide index={19}><Image tag='img' hasMasterSpinner={true} alt='McDonalds Filet O Fish' src='../../images/fillings/mcdonalds_filetofish.svg'/></Slide>
                <Slide index={20}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McDouble' src='../../images/fillings/mcdonalds_mcdouble.svg'/></Slide>
                <Slide index={21}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McGriddle' src='../../images/fillings/mcdonalds_mcgriddle.svg'/></Slide>
                <Slide index={22}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McMuffin' src='../../images/fillings/mcdonalds_mcmuffin.svg'/></Slide>
                <Slide index={23}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McNuggets' src='../../images/fillings/mcdonalds_mcnuggets.svg'/></Slide>
                <Slide index={24}><Image tag='img' hasMasterSpinner={true} alt='Wendys Daves Double' src='../../images/fillings/wendys_davesdouble.svg'/></Slide>
                <Slide index={25}><Image tag='img' hasMasterSpinner={true} alt='McDonalds McRib' src='../../images/fillings/mcdonalds_mcrib.svg'/></Slide>
                <Slide index={26}><Image tag='img' hasMasterSpinner={true} alt='Wendys Spicy Chicken' src='../../images/fillings/wendys_spicychicken.svg'/></Slide>
                <Slide index={27}><Image tag='img' hasMasterSpinner={true} alt='Wendys Baconator' src='../../images/fillings/wendys_baconator.svg'/></Slide>
                <Slide index={28}><Image tag='img' hasMasterSpinner={true} alt='Wendys Chili' src='../../images/fillings/wendys_chili.svg'/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
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