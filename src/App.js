import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import MusicCard from './components/MusicCard';

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      name:''
    };
    
  }

  handleName (value) {
    this.setState({
      name:value
    });
  };

  handleAlert = () => {
    // console.log("This works!")
    alert (`Welcome ${this.state.name}!`);
    this.setState ({
      name:""
    })
  };
  


  render() {
    return (
      <div>
        <MusicCard 
        name={this.state.name}
        />
        <input 
          placeholder="Name" 
          onChange={(e)=>{this.handleName(e.target.value)}} 
          type="text"
          value={this.state.name}
          />
        <button onClick={this.handleAlert}>Submit Name</button>
        <br/>
        <Dashboard/>
      </div>
    );
  }
}
