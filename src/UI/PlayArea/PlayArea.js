import React from 'react';

import { StyledPlayArea } from './PlayArea.styles';
class PlayArea extends React.PureComponent {
  render() {
    return (
      <StyledPlayArea
        {...this.props}
      />
    )
  }
};

export default PlayArea;