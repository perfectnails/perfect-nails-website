import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

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

              <div style={{ marginBottom: '2.5%' }} className='wow animated fadeInUp' data-wow-duration='2.5s'>
                <footer>© 2019 Perfect Nails All Rights Reserved</footer>
              </div>

          </div>
      </Router>
    );
  }
}

export default App;
