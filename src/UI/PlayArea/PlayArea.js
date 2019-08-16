import React from 'react';

import { StyledPlayArea } from './PlayArea.styles';
class PlayArea extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      class: ''
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.currentWord !== prevProps.currentWord){
      this.setState({class:'other'});
    }
    this.setState({class:'animate'});
  }

  render() {
    const { currentWord } = this.props;
    return (
      <StyledPlayArea
        {...this.props}
      >
        <h3 key={currentWord} className={this.state.class}>{currentWord}</h3>
      </StyledPlayArea>
    )
  }
};

export default PlayArea;
