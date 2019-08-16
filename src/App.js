import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  AppContainer,
  StyledConsole,
  StyledPlayArea,
  StyledPlayerWindow,
} from './App.styles';

class App extends React.PureComponent{
  render() {
    return (
      <AppContainer className="App">
        <StyledPlayerWindow>
  
        </StyledPlayerWindow>
        <StyledPlayArea>
  
        </StyledPlayArea>
        <StyledConsole>
  
        </StyledConsole>
      </AppContainer>
    );
  }
}
export default App;
