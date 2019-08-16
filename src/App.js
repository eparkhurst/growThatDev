import React from 'react';
import './App.css';
import Engine from './Engine'
import {
  AppContainer,
  StyledConsole,
  StyledPlayArea,
  StyledPlayerWindow,
} from './App.styles';
import Giphy from './Giphy';

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

  render() {
    const {phrases, phraseIndex, misses } = this.state;
    return (
      <AppContainer className="App">
        <StyledPlayerWindow>
          <Giphy misses={misses}/>
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
