import React from 'react';
import './App.css';
import Engine from './Engine'

class App extends React.PureComponent {
  currentWord = 'hello';
  render(){
    return (
      <div className="App">
        <Engine currentWord={this.currentWord}></Engine>
      </div>
    );
  }
}

export default App;
