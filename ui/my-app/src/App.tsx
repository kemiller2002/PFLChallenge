import * as React from 'react';
import './App.css';

import axios from 'axios';

import logo from './logo.svg';


class App extends React.Component {

  public testAjax () {

    const config = {
        headers : {
          "Authorization" : "Basic bWluaXByb2plY3Q6UHIhbnQxMjM=",
          "Content-Type" : "application/json"
        }
    };

    axios.get('https://testapi.pfl.com/product?apikey=136085', config)
      .then(x=>console.log(x))
  }


  public render() {
    this.testAjax();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
