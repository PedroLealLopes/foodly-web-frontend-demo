import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './pages/index.js'
import RestaurantsPage from './pages/restaurants.js'
import RestaurantPage from './pages/restaurant.js'

class App extends Component {
  render(){
    return <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/restaurants' component={RestaurantsPage} />
          <Route exact path='/restaurants/1' component={RestaurantPage} />
        </Switch>
      </Router>
  }
}

export default App;
