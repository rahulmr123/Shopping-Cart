import React, {Component} from 'react';
import Head from './Header';
import Pro from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import Filter from './Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Filter />
        <Pro />
        <Cart />
        <Footer />
      </div>
    );
  }
}

export default App;
