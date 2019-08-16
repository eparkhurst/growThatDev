import React from 'react';

class Engine extends React.Component {
  phrases = ['hello'];

  handleChange = (e) => {
    if (e.target.value === this.phrases[0]){
      console.log('you got it');
    }
    console.log(e.target.value);
  };

  render() {
    return <div>
      <input type="text" onChange={this.handleChange}/>
    </div>
  }
}

export default Engine;
