import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Prices from './Prices/Prices';
import Hours from './Hours/Hours';

import './App.css';
import './animate.css'


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Navigation />
              <Route exact path='/' component={Home} />
              <Route path='/prices' component={Prices} />
              <Route path='/hours' component={Hours} />
          </div>
      </Router>
    );
  }
}

export default App;
