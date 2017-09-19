import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import {Component} from 'react';
import CHECKOUT from './checkout';
class Router1 extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Route exact path="/" component={App} />
         
          <Route path="/checkout" component={CHECKOUT} />
          </div>

        </Router>
      </div>
    );
  }
}
export default Router1;
