import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import MusicCard from './components/MusicCard';
import './App.css';


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
    };

  }

  handleName(value) {
    this.setState({
      name: value
    });
  };

  handleAlert = () => {
    // console.log("This works!")
    alert(`Welcome ${this.state.name}!`);
    // let setName = this.state.name;
  };



  render() {
    return (
      <body>
        <nav>
          <MusicCard
            name={this.state.name}
          />
        </nav>
        
        <br/>
        
        <div class="nameholder">
          <input
            placeholder="Name"
            onChange={(e) => { this.handleName(e.target.value) }}
            type="text"
            value={this.state.name}
          />
          <button onClick={this.handleAlert}>Submit Name</button>
        </div>

        <br/>
      
        <div class="music-library">
         
          <Dashboard />
        </div>
      </body>
    );
  }
}
