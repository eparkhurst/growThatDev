import React, { Component } from 'react';

import Low_1 from './Assets/low-1.gif';
import Low_2 from './Assets/low-2.gif';
import Low_3 from './Assets/low-3.gif';
import Low_4 from './Assets/low-4.gif';
import Low_5 from './Assets/low-5.gif';
import Low_6 from './Assets/low-6.gif';
import Low_7 from './Assets/low-7.gif';
import Low_8 from './Assets/low-8.gif';
import Low_9 from './Assets/low-9.gif';

import Mid_1 from './Assets/mid-1.gif';
import Mid_2 from './Assets/mid-2.gif';
import Mid_3 from './Assets/mid-3.gif';
import Mid_4 from './Assets/mid-4.gif';
import Mid_5 from './Assets/mid-5.gif';
import Mid_6 from './Assets/mid-6.gif';
import Mid_7 from './Assets/mid-7.gif';
import Mid_8 from './Assets/mid-8.gif';
import Mid_9 from './Assets/mid-9.gif';

import High_1 from './Assets/high-1.gif';
import High_2 from './Assets/high-2.gif';
import High_3 from './Assets/high-3.gif';
import High_4 from './Assets/high-4.gif';
import High_5 from './Assets/high-5.gif';
import High_6 from './Assets/high-6.gif';
import High_7 from './Assets/high-7.gif';
import High_8 from './Assets/high-8.gif';
import High_9 from './Assets/high-9.gif';

const images={
  low: [Low_1, Low_2, Low_3, Low_4, Low_5, Low_6, Low_7, Low_8, Low_9],
  mid: [Mid_1, Mid_2, Mid_3, Mid_4, Mid_5, Mid_6, Mid_7, Mid_8, Mid_9],
  high: [High_1, High_2, High_3, High_4, High_5, High_6, High_7, High_8, High_9],
}

class Giphy extends Component {
  render() {
    const {miss} = this.props;
    let image;
    let stress;

    if(miss===0){
      stress = 'low';
    } else if(miss ===1){
      stress = 'mid';
    } else if(miss === 2){
      stress = 'high';
    }

    if(stress){
      image = images[stress][Math.floor(Math.random()*images[stress].length)];
    }
    
    return (
      <div>
        {<img src={image} alt=""/>}
      </div>
    );
  }
}

export default Giphy;