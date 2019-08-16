import React from 'react';
import './App.css';
import Engine from './Engine'

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      phrases : ['hello', 'good bye', 'other', 'other2'],
      phraseIndex: 0,
      misses: 0,
    }
  }

  componentDidMount() {
    this.startInterval();
  }

  startInterval(){
    this.timer = setInterval(() => {
      console.log('hit');
      if(this.state.phrases.length <= this.state.phraseIndex){
        clearInterval(this.timer)
      }
      // this.setState({phraseIndex: this.state.phraseIndex + 1, misses: this.state})
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
        <h3>{phrases[phraseIndex]}</h3>

        HELP
        <h3>{misses}</h3>
        <Engine currentWord={phrases[phraseIndex]} success={this.phraseMet}></Engine>
      </div>
    );
  }
}

export default App;
