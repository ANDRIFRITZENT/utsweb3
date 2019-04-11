import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      sapa : 'Hallo',
      backgroundColor : 'Grey'
    }
  } 
  clicked = () => {
    if(this.state.sapa === 'DARK THEME'){
      //console.log("tru LIGHT THEME");
      document.body.style.backgroundColor = 'Aqua'
      this.setState(
        {
          sapa : 'LIGHT THEME',
          backgroundColor : 'Aqua'
        }
      );
    } else{
      document.body.style.backgroundColor = 'Grey'
      this.setState(
        {
          sapa : 'DARK THEME',
          backgroundColor : 'Grey'
        }
      );
    }
    
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.sapa}</h1>
          <button className="btn btn-primary btn-lg active" aria-pressed="true" onClick={this.clicked}>GANTI THEME</button>
      </div>
    );
  }
}

export default App;
