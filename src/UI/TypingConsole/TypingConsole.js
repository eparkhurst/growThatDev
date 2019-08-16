import React from 'react';

import { StyledConsoleWindow } from './TypingConsole.styles';
class TypingConsole extends React.PureComponent {
  render() {
    return (
      <StyledConsoleWindow
        {...this.props}
      />
    )
  }
};

export default TypingConsole;