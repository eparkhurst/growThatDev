import React from 'react';
import Misses from './Misses';

import { StyledPlayerWindow } from './PlayerWindow.styles';

class PlayerWindow extends React.PureComponent {
  render() {
    return (
      <StyledPlayerWindow
        {...this.props}
      />
    )
  }
};

export default PlayerWindow;