import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import CreatePage from '../../routes/CreatePage/CreatePage'
import FinalPage from '../../routes/FinalPage/FinalPage'
import CreationsPage from '../../routes/CreationsPage/CreationsPage'
import CreationPage from '../../routes/CreationPage/CreationPage'
import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'


class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <div className='header-styling'>
          <h1><Link style={{ textDecoration: 'none' }} to={'/'}>Fast Food Evolved</Link></h1>
          <div className="desktop-nav">
          <Nav/>
          </div>
          <div className="mobile-nav">
          <Sidebar/>
          </div>
          </div>
        </header>
        <main className='App__main'>
          <div id="page-wrap">
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              path={'/create'}
              component={CreatePage}
            />
            <Route
              path={'/final'}
              component={FinalPage}
            />
            <Route
              path={'/creations/'}
              component={CreationsPage}
            />
            <Route
              path={'/creations/:itemId'}
              component={CreationPage}
            />
            {/* <Route
              component={NotFoundPage}
            /> */}
          </Switch>
        </div>
        </main>
      </div>
    )
  }
}

export default App
