import React from 'react';
import logo from './logo.svg';
import './App.css';

import Prices from './containers/Prices';

const App = () => {
  return (
      <div className="App">
        <header className="App-header">
          <Prices />
        </header>
      </div>
  );
}

export default App;
