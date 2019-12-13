import React, { Component } from 'react';
import './App.css';

import { Navigation, Main } from './components';

class App extends Component {


  render() {
    return (
      <div >
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
