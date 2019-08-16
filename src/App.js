import React from 'react';
import './App.css';
import Engine from './Engine'

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      phrases : ['hello', 'good bye', 'other', 'other2'],
      phraseIndex: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('hit');
      this.setState({phraseIndex: this.state.phraseIndex + 1})
    }, 2000)
  }
  phraseMet = () => {
    console.log('Got the phrase');
    this.setState({phraseIndex:this.state.phraseIndex+1})
  }
  render(){
    const {phrases, phraseIndex } = this.state;
    return (
      <div className="App">
        <h3>{phrases[phraseIndex]}</h3>
        <Engine currentWord={phrases[phraseIndex]} success={this.phraseMet}></Engine>
      </div>
    );
  }
}

export default App;
