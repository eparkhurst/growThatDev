import React from 'react';
import './App.css';
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
      phrases : ['git pull,int i = 0;','git push,color: #303','for(i < 5) {i++;}','display: flex;','{...this.props}','backdrop : yellow;','public dev() {};','decimal dollaBill = 500.00;','public class dev extends denver{}','Boolean iAmCool = true;','console.log(growThatDev};','Boolean dvlpDnvr = true;','if(numBeers < 3) Boolean ballmerPeak = false;'],
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

  render() {
    const {phrases, phraseIndex, misses } = this.state;
    return (
      <AppContainer className="App">
        <StyledPlayerWindow>

        </StyledPlayerWindow>
        <StyledPlayArea>
          <button onClick={this.startGame}>Start</button>
          <h3>{phrases[phraseIndex]}</h3>
          <h3>{misses}</h3>
          <Engine currentWord={phrases[phraseIndex]} success={this.phraseMet}></Engine>
        </StyledPlayArea>
        <StyledConsole>

        </StyledConsole>
      </AppContainer>
    );
  }
}
export default App;
