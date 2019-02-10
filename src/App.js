import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import MusicCard from './components/MusicCard';

class App extends Component {

  render() {
    return (
      <div>
        
        <MusicCard/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
