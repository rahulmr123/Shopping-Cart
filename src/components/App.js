import React, {Component} from 'react';
import Head from './Header';
import Pro from './ProductList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Pro />
      </div>
    );
  }
}

export default App;
