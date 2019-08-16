import React from 'react';
import './App.css';
<<<<<<< HEAD
import Giphy from './Giphy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Giphy miss={2}/>
      </header>
    </div>
  );
}
=======
import Engine from './Engine'
import {
  AppContainer,
  StyledConsole,
  StyledPlayArea,
  StyledPlayerWindow,
} from './App.styles';

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      phrases : ['hello', 'good bye', 'other', 'other2'],
      phraseIndex: -1,
      misses: 0,
      successAnswers:[],
      failedAnswers: [],
    }
  }

  startGame = () => {
    this.setState({
      phraseIndex: 0,
      misses: 0,
    });
    this.startInterval();
  };

  startInterval(){
    this.timer = setInterval(() => {
      if( this.state.phraseIndex >= this.state.phrases.length -1){
        console.log('Finished');
        clearInterval(this.timer)
      }
      this.setState({
        phraseIndex: this.state.phraseIndex + 1,
        misses: this.state.misses + 1,
      });
    }, 5000)
  }

  phraseMet = () => {
    clearInterval(this.timer);
    this.startInterval();
    this.setState({phraseIndex: this.state.phraseIndex+1})
  };
>>>>>>> master

  render() {
    const {phrases, phraseIndex, misses } = this.state;
    return (
      <AppContainer className="App">
        <StyledPlayerWindow>

        </StyledPlayerWindow>
        <StyledPlayArea>

        </StyledPlayArea>
        <StyledConsole>
          <button onClick={this.startGame}>Start</button>
          <h3>{phrases[phraseIndex]}</h3>
          <h3>{misses}</h3>
          <Engine currentWord={phrases[phraseIndex]} success={this.phraseMet}></Engine>
        </StyledConsole>
      </AppContainer>
    );
  }
}
export default App;
