import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './pages/index.js'
import RestaurantsPage from './pages/restaurants'
import RestaurantPage from './pages/restaurant'
import PrivacyPolicy from './pages/privacy-policy'
import LoginPage from './pages/loginPage'
import ProfilePage from './pages/profile'

class App extends Component {
  render(){
    return <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/restaurants' component={RestaurantsPage} />
          <Route exact path='/restaurants/1' component={RestaurantPage} />
          <Route exact path='/privacy-policy' component={PrivacyPolicy} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
      </Router>
  }
}

export default App;
