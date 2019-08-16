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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.currentWord !== this.props.currentWord){
      this.setState({value: ''});
    }
  }

  refocusInput = () => this.inputRef.current.focus();

  handleChange = (e) => {
    const { currentWord } = this.props;
    if (e.target.value === currentWord){
      this.props.success();
    } else{
      this.setState({value:e.target.value})
    }
  };

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
           Enter text here:
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
