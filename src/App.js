import React from 'react';
import './App.css';
import Engine from './Engine'

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      phrases : ['hello', 'good bye', 'other', 'other2'],
      phraseIndex: -1,
      misses: 0,
    }
  }

  startGame = () => {
    this.setState({phraseIndex:0});
    this.startInterval();
  };

  startInterval(){
    this.timer = setInterval(() => {
      if( this.state.phraseIndex === this.state.phrases.length -1){
        clearInterval(this.timer)
      }
      this.setState({
        phraseIndex: this.state.phraseIndex + 1,
        misses: this.state.misses + 1,
      })
    }, 5000)
  }

  phraseMet = () => {
    clearInterval(this.timer);
    this.startInterval();
    this.setState({phraseIndex: this.state.phraseIndex+1})
  };

  render(){
    const {phrases, phraseIndex, misses } = this.state;
    return (
      <div className="App">
        <button onClick={this.startGame}>Start</button>
        <h3>{phrases[phraseIndex]}</h3>
        <h3>{misses}</h3>
        <Engine currentWord={phrases[phraseIndex]} success={this.phraseMet}></Engine>
      </div>
    );
  }
}

export default App;
