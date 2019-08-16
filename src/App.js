import React from 'react';
import './App.css';
import Engine from './Engine'
import {
  AppContainer,
  Loss,
  StyledConsole,
  StyledPlayArea,
  StyledPlayerWindow,
  SprintDeadline,
} from './App.styles';
import Giphy from './Giphy';

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      phrases : [' a really long one ti test if it looks good or not','git pull','int i = 0;','git push','color: #303','for(i < 5) {i++;}','display: flex;','{...this.props}','backdrop : yellow;','public dev() {};','decimal dollaBill = 500.00;','public class dev extends denver{}','Boolean iAmCool = true;','console.log(growThatDev};','Boolean dvlpDnvr = true;','if(numBeers < 3) Boolean ballmerPeak = false;'],
      phraseIndex: -1,
      misses: 0,
      successAnswers:[],
      failedAnswers: [],
      lost: false,
    }
  }

  startGame = () => {
    this.setState({
      phraseIndex: 0,
      misses: 0,
    });
    this.startInterval();
  };

  componentDidMount() {
    this.startGame();
  }

  startInterval(){
    this.timer = setInterval(() => {
      if(this.state.misses == 2){
        this.setState({lost: true })
        clearInterval(this.timer)
      }
      if( this.state.phraseIndex >= this.state.phrases.length -1){
        console.log('Finished');
        clearInterval(this.timer)
      }
      this.setState({
        phraseIndex: this.state.phraseIndex + 1,
        misses: this.state.misses + 1,
        failedAnswers: [...this.state.failedAnswers, this.state.phrases[this.state.phraseIndex]]
      });
    }, 10000)
  }

  phraseMet = () => {
    clearInterval(this.timer);
    this.startInterval();
    this.setState({
      phraseIndex: this.state.phraseIndex+1,
      successAnswers: [...this.state.successAnswers, this.state.phrases[this.state.phraseIndex]]
    })
  };

  render() {
    const {phrases, phraseIndex, misses, lost } = this.state;
    return (
      <div className='screwYouRyan'>
        <h1 className="title">
          Grow that Dev
        </h1>
        <AppContainer className="App">

        <StyledPlayerWindow>
          <Giphy misses={misses}/>
        </StyledPlayerWindow>
        <StyledPlayArea currentWord={phrases[phraseIndex]}>

        </StyledPlayArea>
        <StyledConsole currentWord={phrases[phraseIndex]} success={this.phraseMet}>
          <button onClick={this.startGame}>Start</button>
          <h3>{phrases[phraseIndex]}</h3>
          <h3>{misses}</h3>
          <Engine currentWord={phrases[phraseIndex]} success={this.phraseMet}></Engine>
        </StyledConsole>
        <SprintDeadline>
          Sprint Deadline
        </SprintDeadline>
        {lost &&
          <Loss>
            <h1>You Lose</h1>
            <h1>Did you even check Stack Overflow?</h1>
          </Loss>
        }
      </AppContainer>
      </div>

    );
  }
}
export default App;
