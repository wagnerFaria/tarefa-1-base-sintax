import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {

  state = {
    userName: 'Wagner'
  }

  stateEventHandler = (event) => {
    this.setState(
      {
        userName: event.target.value
      }
    )
  }


  render() {
    return (
      <div className="App">
        <UserInput valor={this.state.userName} change={this.stateEventHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
