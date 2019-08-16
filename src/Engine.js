import React from 'react';

class Engine extends React.Component {

  handleChange = (e) => {
    const { currentWord } = this.props;
    if (e.target.value === currentWord){
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
