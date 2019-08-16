import React, { Component } from 'react';
import styled from 'styled-components';

export const Miss = styled.div`
  font-size: 5em;
  float:left;
  width: 33%;
`;

const missesObject ={
  0: ["O", "O", "O"],
  1: ["X", "O", "O"],
  2: ["X", "X", "O"],
  3: ["X", "X", "X"],
}

class Misses extends Component {
  render() {
    const {misses} = this.props;
    return (
      <div>
        <Miss>
          {missesObject[misses][0]}
        </Miss>
        <Miss>
          {missesObject[misses][1]}
        </Miss>
        <Miss>
          {missesObject[misses][2]}
        </Miss>
      </div>
    );
  }
}

export default Misses;