import React from 'react';
import logo from './logo.svg';
import './App.css';

import Cart from './containers/Cart';
import Prices from './containers/Prices';

const App = () => {
  return (
      <div className="App">
          <Cart />
          <Prices />
      </div>
  );
}

export default App;
