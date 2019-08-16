import React from 'react';

import {
  StyledConsoleWindow,
  CursorContainer,
  TextWindow,
  ConsoleLine,
  InputDisplay,
} from './TypingConsole.styles';
class TypingConsole extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.inputRef = React.createRef();
  }

  refocusInput = () => this.inputRef.current.focus();

  handleChange = e => this.setState({ value: e.target.value })

  render() {
    return (
      <StyledConsoleWindow
        {...this.props}
      >
        <CursorContainer>
          >
        </CursorContainer>
        <TextWindow>
          <div>
           Old Text
          </div>
          <div>
           New Text
          </div>
          <InputDisplay>
            {this.state.value}
          </InputDisplay>
          <ConsoleLine
            ref={this.inputRef}
            onBlur={this.refocusInput}
            autoFocus
            name="password"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </TextWindow>
      </StyledConsoleWindow>
    )
  }
};

export default TypingConsole;